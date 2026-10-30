import {nightsBetween} from "./01-dates.mjs";

export function describeReservation(reservation) {
    const fullName = `${reservation.guest.firstName} ${reservation.guest.lastName}`;
    const nights = nightsBetween(reservation.stay.checkIn, reservation.stay.checkOut);

    return `${fullName}: ${nights} nights`
}