const reservations = [
    { ref: 'BK-204811', stay: { nights: 14 }, apartment: { city: 'Manchester', rate: 95 } },
    { ref: 'BK-204812', stay: { nights: 3 },  apartment: { city: 'London', rate: 160 }, discount: 50 },
    { ref: 'BK-204813', stay: { nights: 7 },  apartment: { city: 'Manchester', rate: 110 } },
    { ref: 'BK-204814', stay: { nights: 21 }, apartment: { city: 'Leeds', rate: 85 } },
];

function totalCost({stay: {nights}, apartment: {rate}, discount = 0}) {
    return (nights * rate) - discount;
}

// Task 1
let foreachTotalNights = 0;
reservations.forEach((item) => foreachTotalNights += item.stay.nights);
console.log(`forEach Method: ${foreachTotalNights}`);

// Task 2
const totalNights = reservations.reduce((total, {stay: {nights}}) => total + nights, 0);
console.log(`reduce Method: ${totalNights}`)

// Task 3
const perCity = reservations.reduce((tally, { apartment: { city }, stay: { nights}}) => {
        tally[city] = (tally[city] ?? 0) + nights;
        return tally;
    }, {});
console.log(perCity);

// Extension
const totalRevenue = reservations.reduce((totalRevenue, reservations ) =>
    totalRevenue + totalCost(reservations),
    0,
);
console.log(`Total Revenue: £${totalRevenue}`);