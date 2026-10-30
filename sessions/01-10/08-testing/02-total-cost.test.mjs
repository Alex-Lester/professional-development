import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { totalCost } from "./02-total-cost.mjs";

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
        ref: 'BK-204812',
        guest: {firstName: 'Terrence', lastName: 'Howard', email: 'th@example.com'},
        stay: {checkIn: '2026-11-02', checkOut: '2026-11-18', nights: 16},
        apartment: {city: 'Leeds', rate: 68},
        discount: 50
    },
];

describe('totalCost', () => {
    it('charges nights × rate when there’s no discount', () => {
        assert.equal(totalCost(reservations[0]), 1330)
    });

    it('subtracts the discount from nights × rate', () => {
        assert.equal(totalCost(reservations[2]), 1038)
    })
})