const reservation = {
    ref: 'BK-204811',
    guest: { firstName: 'Priya', lastName: 'Shah', email: 'priya@example.com' },
    stay: { checkIn: '2026-11-02', checkOut: '2026-11-16', nights: 14 },
    apartment: { city: 'Manchester', rate: 95 },
};

const nightlyRates = [95, 110, 120];

function totalCost({stay: {nights}, apartment: {rate}, discount = 0}) {
    return (nights * rate) - discount;
}

// Task 1
const upgraded = { ...reservation, apartment: { ...reservation.apartment, rate: 110 } }

console.log('reservation rate: £' + reservation.apartment.rate);
console.log('upgraded rate: £' + upgraded.apartment.rate);

console.log(`complete reservation rate: £${totalCost(reservation)}`);
console.log(`complete upgraded rate: £${totalCost(upgraded)}`);

// Task 2
const { email, ...guestWithoutEmail } = reservation.guest;
console.log(guestWithoutEmail);

// Task 3
function priciestRate(...rates) {
    return Math.max(...rates);
}

console.log(priciestRate(95, 140, 80));
console.log(priciestRate(...nightlyRates));

// Example 1
const shallow = { ...reservation, apartment: { ...reservation.apartment } };
shallow.apartment.city = 'Leeds';
console.log(reservation.apartment.city);