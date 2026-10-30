console.log('dates loaded');

export const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function nightsBetween(checkIn, checkOut) {
    return (new Date(checkOut) - new Date(checkIn)) / MS_PER_DAY;
}