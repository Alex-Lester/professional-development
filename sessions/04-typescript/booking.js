"use strict";
const pattern = /^BK-\d{6}$/i;
const test_cases = [
    { input: 'BK-123456', expected: true },
    { input: 'BK-12345', expected: false },
    { input: 'xBK-123456', expected: false },
];
function isValidBookingReference(ref) {
    return pattern.test(ref);
}
test_cases.forEach((ref) => {
    let match = isValidBookingReference(ref.input);
    if (match === ref.expected) {
        console.log(`${ref.input} -> PASS: Matches Expected`);
    }
    else {
        console.log(`${ref.input} -> FAIL: Does not match expected`);
    }
});
