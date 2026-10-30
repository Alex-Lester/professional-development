type refType = {
    input: string;
    expected: boolean;
}

const pattern: RegExp = /^BK-\d{6}$/i;
const refTypes: refType[] = [
    {input: 'BK-123456', expected: true},
    {input: 'BK-12345', expected: false},
    {input: 'xBK-123456', expected: false},
];

function isValidBookingReference(ref: string): boolean
{
    return pattern.test(ref);
}

refTypes.forEach((item) =>{
    let match = isValidBookingReference(item.input);

    if (match === item.expected) {
        console.log(`${item.input} -> PASS: Matches Expected`);
    } else {
        console.log(`${item.input} -> FAIL: Does not match expected`);
    }
})