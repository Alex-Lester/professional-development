type Status = "open" | "closed" | "pending";
type Priority = "low" | "medium" | "high";
type SupportCase = {
    id: number;
    subject: string;
    status: Status;
    priority: Priority;
    assignee?: string
}

const testCases: SupportCase[] = [
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
]

function describeCase(supCase: SupportCase): string
{
    let printString = `#${supCase.id} ${supCase.subject} (${supCase.status})`

    if (supCase.assignee !== undefined){
        printString += `, assigned to ${supCase.assignee}`;
    } else {
        printString += ', unassigned';
    }

    return printString;
}

function findCase(cases: SupportCase[], id: number): SupportCase | undefined
{
    return cases.find(item => item.id === id);
}

function openCases(cases: SupportCase[]): SupportCase[]
{
    return cases.filter(item => item.status === "open");
}

console.log('\n ----- Part 1 ----- \n');

testCases.forEach((refs) => {
    console.log(describeCase(refs));
})

console.log('\n ----- Part 2 ----- \n')

const searchCase: number = 99;
const returned: SupportCase | undefined = findCase(testCases, searchCase);
if (returned !== undefined) {
    console.log(describeCase(returned))
} else {
    console.log(`Case ${searchCase} not found`)
}

console.log(' \n ----- Part 3 ----- \n')

const cases = openCases(testCases);
cases.forEach((item) => {
    console.log(describeCase(item));
})