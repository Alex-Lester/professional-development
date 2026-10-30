<?php

declare(strict_types=1);

final class BookingNotFound extends RuntimeException {}
final class BookingCannotBeConfirmed extends RuntimeException {}

final class BookingService
{
    public function __construct(private PDO $db) {

    }

    /**
     * @throws Exception
     * @throws BookingNotFound
     * @throws BookingCannotBeConfirmed
     */
    public function confirm(string $reference): int
    {
        $statement = $this->db->prepare(
            'SELECT reference, status, check_in, check_out, nightly_rate_pence
             FROM bookings
             WHERE reference = :reference'
        );
        $statement->execute(['reference' => $reference]);
        $booking = $statement->fetch(PDO::FETCH_ASSOC);

        if ($booking === false) {
            throw new BookingNotFound('Booking not found');
        }

        if ($booking['status'] !== 'pending') {
            throw new BookingCannotBeConfirmed('Only pending bookings can be confirmed.');
        }

        $checkIn = new DateTimeImmutable($booking['check_in']);
        $checkOut = new DateTimeImmutable($booking['check_out']);

        if ($checkIn < new DateTimeImmutable('today')) {
            throw new BookingCannotBeConfirmed('Check-in date has passed');
        }

        $nights = $checkIn->diff($checkOut)->days;
        $total = $nights * (int) $booking['nightly_rate_pence'];

        if ($nights >= 28) {
            $total = (int) round($total * 0.9);
        }

        $update = $this->db->prepare(
            'UPDATE bookings SET status = :status, total_pence = :total WHERE reference = :reference'
        );
        $update->execute(['status' => 'confirmed', 'total' => $total, 'reference' => $reference]);

        return $total;
    }
}