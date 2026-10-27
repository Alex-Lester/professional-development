// Task 1
console.log('start');

setTimeout(() => console.log('timeout'), 0);

new Promise((resolve) => {
    console.log('executor');
    resolve('done');
})
    .then((value) => console.log(`then 1: ${value}`))
    .then(() => console.log('then 2'));

console.log('end');

// Task 2
const reservations = [
    { ref: 'BK-204811', stay: { nights: 14 }, apartment: { city: 'Manchester', rate: 95 } },
    { ref: 'BK-204812', stay: { nights: 3 },  apartment: { city: 'London', rate: 160 }, discount: 50 },
    { ref: 'BK-204813', stay: { nights: 7 },  apartment: { city: 'Manchester', rate: 110 } },
    { ref: 'BK-204814', stay: { nights: 21 }, apartment: { city: 'Leeds', rate: 85 } },
];

function findReservation(ref) {
    return new Promise((resolve, reject) => {
        const booking = reservations.find(item => item.ref === ref)
        if (booking) {
            setTimeout(() => resolve(booking), 200);
        } else {
            setTimeout(() => reject(new Error(`Reservation ${ref} not found`)), 200);
        }
    })
}

findReservation('BK-204813')
    .then((value) => console.log(value.apartment.city))
    .catch((error) => console.log(error.message));
findReservation('BK-999999')
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message));