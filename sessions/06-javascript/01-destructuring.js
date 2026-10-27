const reservation = {
    ref: 'BK-204811',
    guest: { firstName: 'Priya', lastName: 'Shah', email: 'priya@example.com' },
    stay: { checkIn: '2026-11-02', checkOut: '2026-11-16', nights: 14 },
    apartment: { city: 'Manchester', rate: 95 },
};

const nightlyRates = [95, 110, 120];

// Task 1
const {ref: bookingRef, guest: {firstName}} = reservation;
console.log(bookingRef + ', ' + firstName);

// Task 2
const {apartment: {city: location}, discount = 0} = reservation;
console.log(location + ', ' + discount);

// Task 3
const  [cheapest, , priciest] = nightlyRates;
console.log(cheapest + ', ' + priciest);

// Task 4
function totalCost({stay: {nights}, apartment: {rate}, discount = 0}) {
    return (nights * rate) - discount;
}

console.log(`total stay cost: £${totalCost(reservation)}`);