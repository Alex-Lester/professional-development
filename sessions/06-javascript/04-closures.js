const reservations = [
    { ref: 'BK-204811', stay: { nights: 14 }, apartment: { city: 'Manchester', rate: 95 } },
    { ref: 'BK-204812', stay: { nights: 3 },  apartment: { city: 'London', rate: 160 }, discount: 50 },
    { ref: 'BK-204813', stay: { nights: 7 },  apartment: { city: 'Manchester', rate: 110 } },
    { ref: 'BK-204814', stay: { nights: 21 }, apartment: { city: 'Leeds', rate: 85 } },
];

// Task 1
function makeRefGenerator(ref) {
    let currentRefNumbers = [];

    return {
        nextRef() {
            currentRefNumbers[ref] = (currentRefNumbers[ref] ?? 0) + 1;
            return `${ref}-${currentRefNumbers[ref]}`;
        },
    }
}

const nextBk = makeRefGenerator('BK');
const nextQt = makeRefGenerator('QT');
const nextInv = makeRefGenerator('INV');
console.log(nextBk.nextRef());
console.log(nextBk.nextRef());
console.log(nextQt.nextRef());
console.log(nextQt.nextRef());
console.log(nextBk.nextRef());
console.log(nextInv.nextRef());

// Task 2
function inCity(city) {
    return (item) => item.apartment.city === city;
}
console.log(reservations.filter(inCity('Manchester')).map(({ ref }) => ref));

// Task 3
function totalCost({stay: {nights}, apartment: {rate}, discount = 0}) {
    return (nights * rate) - discount;
}

function createLedger() {
    let reservations = [];

    return {
        add(reservation) {
            reservations.push(reservation);
        },
        count() {
            return reservations.length;
        },
        total() {
            return reservations.reduce((runningTotal, reservations) => runningTotal + totalCost(reservations), 0)
        },
    }
}

const ledger = createLedger();
for (const reservation of reservations) {
    ledger.add(reservation);
}
const count = ledger.count();
console.log(count);
const total = ledger.total();
console.log(total);