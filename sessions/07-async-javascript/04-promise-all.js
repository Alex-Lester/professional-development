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

async function getCity(ref) {
    const reservation = await findReservation(ref);
    const {apartment: {city}} = reservation;

    return city;
}

// Task 1
async function showAllParallel() {
    const start = Date.now();
    console.log(`Start: ${Date.now() - start}`);

    const cities = Array.from(new Set(await Promise.all(reservations.map((item) => getCity(item.ref)))));

    console.log(cities);
    console.log(`End: ${Date.now() - start}`)
}

showAllParallel()

// Task 2
const refs = ['BK-204811', 'BK-204812', 'BK-999999', 'BK-204814', 'BK-204813'];

async function showAllParallelWithFailure() {
    const start = Date.now();
    console.log(`Start: ${Date.now() - start}`);

    try {
        const cities = Array.from(new Set(await Promise.all(refs.map((item) => getCity(item)))));
        console.log(cities);
    } catch (error) {
        console.log(error.message);
    }

    console.log(`End: ${Date.now() - start}`)
}

showAllParallelWithFailure()

// Task 3
async function showAllParallelHandlingFailure() {
    const start = Date.now();
    console.log(`Start: ${Date.now() - start}`);

    const cities = Array.from(new Set(
        (await Promise.allSettled(refs.map((ref) => getCity(ref))))
        .filter((item) => item.status !== 'rejected')
        .map((item) => item.value)
    ));

    console.log(cities);
    console.log(`End: ${Date.now() - start}`)
}

showAllParallelHandlingFailure()