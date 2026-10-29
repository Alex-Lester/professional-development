<?php

declare(strict_types=1);

enum PaymentMethod
{
    case Card;
    case BankTransfer;
    case Invoice;
}

// Task 1
function requiresApproval(PaymentMethod $method): bool {
    return $method === PaymentMethod::Invoice;
}

var_dump(requiresApproval(PaymentMethod::Invoice));
var_dump(requiresApproval(PaymentMethod::BankTransfer));
//var_dump(requiresApproval('invoice'));

// Task 2
enum BackedPaymentMethod: string
{
    case Card = 'card';
    case BankTransfer = 'bank_transfer';
    case Invoice  = 'invoice';
}

$input = 'paypal';
$paymentMethod = BackedPaymentMethod::tryFrom($input);

if($paymentMethod) {
    var_dump($paymentMethod);
} else {
    var_dump('Unknown Payment Method: ' . $input);
}

// Task 3
foreach(BackedPaymentMethod::cases() as $object) {
    var_dump($object);
    var_dump($object->value);
}