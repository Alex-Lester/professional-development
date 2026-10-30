import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { findReservation } from "./03-find-reservation.mjs";

const reservations = [
    {
        ref: 'BK-204811',
        guest: {firstName: 'Priya', lastName: 'Shah', email: 'priya@example.com'},
        stay: {checkIn: '2026-11-02', checkOut: '2026-11-16', nights: 14},
        apartment: {city: 'Manchester', rate: 95},
    },
    {
        ref: 'BK-204812',
        guest: {firstName: 'Jermaine', lastName: 'Jones', email: 'jones@example.com'},
        stay: {checkIn: '2026-11-02', checkOut: '2026-11-20', nights: 18},
        apartment: {city: 'Leeds', rate: 75},
    },
    {
        ref: 'BK-204813',
        guest: {firstName: 'Terrence', lastName: 'Howard', email: 'th@example.com'},
        stay: {checkIn: '2026-11-02', checkOut: '2026-11-18', nights: 16},
        apartment: {city: 'Leeds', rate: 68},
        discount: 50
    },
];

describe('findReservation', () => {
    it('resolves with the matching reservation', async () => {
        const reservation = await findReservation('BK-204812', reservations);
        assert.equal(reservation.guest.lastName, 'Jones')
    });

    it('rejects with a clear message when the ref is unknown', async () => {
        await assert.rejects(
            findReservation('BK-999999', reservations),
            { message: 'Reservation BK-999999 not found' }
        );
    });
})