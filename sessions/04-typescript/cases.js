"use strict";
const testCases = [
    {
        id: 1,
        subject: "I'm very upset",
        status: "open",
        priority: "low",
        assignee: "John Steward",
    },
    {
        id: 2,
        subject: "I'm rather happy",
        status: "pending",
        priority: "high",
    },
    {
        id: 3,
        subject: "I'm devastated",
        status: "pending",
        priority: "low",
        assignee: "Malcom Jones",
    },
];
function describeCase(supCase) {
    let printString = `#${supCase.id} ${supCase.subject} (${supCase.status})`;
    if (supCase.assignee !== undefined) {
        printString += `, assigned to ${supCase.assignee}`;
    }
    else {
        printString += ', unassigned';
    }
    return printString;
}
function findCase(cases, id) {
    return cases.find(item => item.id === id);
}
function openCases(cases) {
    return cases.filter(item => item.status === "open");
}
console.log('\n ----- Part 1 ----- \n');
testCases.forEach((refs) => {
    console.log(describeCase(refs));
});
console.log('\n ----- Part 2 ----- \n');
const searchCase = 99;
const returned = findCase(testCases, searchCase);
if (returned !== undefined) {
    console.log(describeCase(returned));
}
else {
    console.log(`Case ${searchCase} not found`);
}
console.log(' \n ----- Part 3 ----- \n');
const cases = openCases(testCases);
cases.forEach((item) => {
    console.log(describeCase(item));
});
