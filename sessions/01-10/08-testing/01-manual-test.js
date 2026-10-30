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

function totalCost({stay: {nights}, apartment: {rate}, discount = 0}) {
    return (nights * rate) - discount;
}

function expectedEqual(actual, expected, label) {
    if (actual === expected) {
        console.log(`PASS: ${label}`);
    } else {
        console.log(`FAIL: ${label} (expected: ${expected}, got: ${actual})`);
        process.exitCode = 1;
    }
}

expectedEqual(totalCost(reservations[0]), 1330, 'charges nights × rate when there’s no discount (test case 1)')
expectedEqual(totalCost(reservations[1]), 1350, 'charges nights × rate when there’s no discount (test case 2)')
expectedEqual(totalCost(reservations[2]), 1038, 'subtracts the discount from nights × rate')

