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

// Task 1
async function getCity(ref) {
    const reservation = await findReservation(ref);
    const {apartment: {city}} = reservation;

    return city;
}

getCity('BK-204813')
    .then((city) => console.log(city))
    .catch((error) => console.log(error.message));
getCity('BK-999999')
    .then((city) => console.log(city))
    .catch((error) => console.log(error.message));

// Task 2
async function showAll() {
    const start = Date.now();
    console.log(`Start: ${Date.now() - start}`);

    const cities = [];
    try {
        for (const item of reservations) {
            const newCity = await getCity(item.ref)
            if (!cities.includes(newCity)) {
                cities.push(newCity)
            }
        }

        console.log(cities);
        console.log(`End: ${Date.now() - start}`)
    } catch (error) {
        console.log(error.message);
    }
}

showAll()