<?php

declare(strict_types=1);

const REGEX_EXPRESSION = '/^BK-\d{6}$/i';

function isValidBookingReference(string $ref): bool
{
    $result = preg_match(REGEX_EXPRESSION, $ref);

    return $result === 1;
}

$testCases = [
    [
        'input' => 'BK-123456',
        'expected' => true,
    ],
    [
        'input' => 'BK-12345',
        'expected' => false,
    ],
    [
        'input' => 'BK-1234567',
        'expected' => false,
    ],
    [
        'input' => 'xBK-123456',
        'expected' => false,
    ],
    [
        'input' => 'bk-123456',
        'expected' => true,
    ],
];

foreach ($testCases as $case) {
    $validRef = isValidBookingReference($case['input']);

    echo $case['input'] . " -> "
        . ($validRef === $case['expected'] ? 'PASS: ' : 'FAIL: ')
        . ($validRef ? 'Matched' : 'No Match')
        . "\n";
}