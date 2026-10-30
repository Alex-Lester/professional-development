export function findReservation(ref, reservations) {
    return new Promise((resolve, reject) => {
        const booking = reservations.find(item => item.ref === ref)
        if (booking) {
            setTimeout(() => resolve(booking), 200);
        } else {
            setTimeout(() => reject(new Error(`Reservation ${ref} not found`)), 200);
        }
    })
}