<?php

declare(strict_types=1);

require_once __DIR__ . '/BookingService.php';

readonly class BookingController
{
    public function __construct(
        private BookingService $bookingService
    )
    {}

    /**
     * @throws JsonException
     */
    public function confirm(string $reference): void
    {
        header('Content-Type: application/json');

        try {
            $total = $this->bookingService->confirm($reference);
        } catch (BookingNotFound $e) {
            http_response_code(404);
            echo json_encode(['error' => $e->getMessage()], JSON_THROW_ON_ERROR);
            return;
        } catch (BookingCannotBeConfirmed $e) {
            http_response_code(409);
            echo json_encode(['error' => $e->getMessage()], JSON_THROW_ON_ERROR);
            return;
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server Error'], JSON_THROW_ON_ERROR);
            return;
        }

        echo json_encode(['reference' => $reference, 'status' => 'confirmed', 'total_pence' => $total], JSON_THROW_ON_ERROR);
    }
}