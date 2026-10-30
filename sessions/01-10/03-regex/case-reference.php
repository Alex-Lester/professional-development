<?php

declare(strict_types=1);

const REGEX_EXPRESSION = '/\[CASE-(\d+)]/i';

function extractCaseReference(string $subject): ?string
{
    $result = preg_match(REGEX_EXPRESSION, $subject, $matches);

    return $result === 1 ? $matches[1] : null;
}

function extractAllCaseReferences(string $subject): array
{
    preg_match_all(REGEX_EXPRESSION, $subject, $matches);

    return $matches[1];
}

$singleTestCases = [
    1 => [
        'input' => '[CASE-1042] Booking enquiry',
        'expected' => '1042',
    ],
    2 => [
        'input' => 'RE: [CASE-77] Late check-in',
        'expected' => '77',
    ],
    3 => [
        'input' => 'FW: RE: [case-2051] Invoice',
        'expected' => '2051',
    ],
    4 => [
        'input' => 'Booking enquiry',
        'expected' => null,
    ],
    5 => [
        'input' => '[CASE-] Missing number',
        'expected' => null,
    ],
    6 => [
        'input' => 'CASE-1042 No brackets',
        'expected' => null,
    ],
    7 => [
        'input' => '[CASE-12A] Typo in reference',
        'expected' => null,
    ],
    8 => [
        'input' => 'RE: [CASE-300] and [CASE-301]',
        'expected' => '300',
    ],
];
$allTestCases = [
    1 => [
        'input' => '[CASE-1042] Booking enquiry',
        'expected' => ['1042'],
    ],
    2 => [
        'input' => 'RE: [CASE-77] Late check-in',
        'expected' => ['77'],
    ],
    3 => [
        'input' => 'FW: RE: [case-2051] Invoice',
        'expected' => ['2051'],
    ],
    4 => [
        'input' => 'Booking enquiry',
        'expected' => [],
    ],
    5 => [
        'input' => '[CASE-] Missing number',
        'expected' => [],
    ],
    6 => [
        'input' => 'CASE-1042 No brackets',
        'expected' => [],
    ],
    7 => [
        'input' => '[CASE-12A] Typo in reference',
        'expected' => [],
    ],
    8 => [
        'input' => 'RE: [CASE-300] and [CASE-301]',
        'expected' => ['300', '301'],
    ],
];

foreach ($singleTestCases as $case) {
    $match = extractCaseReference($case['input']);

    if ($match === $case['expected']) {
        echo "PASS: " . ($match ?? 'no match') . "\n";
    } else {
        echo "FAIL: Did not match expected value \n";
    }
}

echo "------------------------------------- \n";

foreach ($allTestCases as $case) {
    $matchAll = extractAllCaseReferences($case['input']);

    if ($matchAll === $case['expected']) {
        $matchAllString = $matchAll
            ? '[' . implode(',', $matchAll) . ']'
            : 'no match';

        echo "PASS: " . $matchAllString . "\n";
    } else {
        echo "FAIL: Did not match expected value \n";
    }
}