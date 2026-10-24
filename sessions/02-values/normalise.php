<?php

declare(strict_types=1);

$emails = [
['sender' => '  Alice@Example.com ', 'subject' => '  Invoice query  '],
['sender' => 'BOB@example.com',      'subject' => 'Refund request '],
['sender' => ' carol@EXAMPLE.com',   'subject' => 'Booking change'],
];

function normaliseEmails(array $e): array
{
    $cleanedEmails = [];

    foreach ($e as $email) {
        $sender          = strtolower(trim($email['sender']));
        $subject         = trim($email['subject']);
        $cleanedEmails[] = [
            'sender'  => $sender,
            'subject' => $subject,
        ];
    }

    return $cleanedEmails;
}

function normaliseEmailsWithMap(array $email): array
{
    $email['sender']  = strtolower(trim($email['sender']));
    $email['subject'] = trim($email['subject']);

    return $email;
}

print_r($emails);
$normalisedEmails = normaliseEmails($emails);
print_r($normalisedEmails);
$normalisedEmailsWithMap = array_map(normaliseEmailsWithMap(...), $emails);
print_r($normalisedEmailsWithMap);