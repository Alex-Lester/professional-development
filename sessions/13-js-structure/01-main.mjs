import { describeReservation as summarise }from "./01-reservations.mjs";

const reservation = {
    ref: 'BK-204811',
    guest: { firstName: 'Priya', lastName: 'Shah', email: 'priya@example.com' },
    stay: { checkIn: '2026-11-02', checkOut: '2026-11-16', nights: 14 },
    apartment: { city: 'Manchester', rate: 95 },
};

console.log(summarise(reservation))