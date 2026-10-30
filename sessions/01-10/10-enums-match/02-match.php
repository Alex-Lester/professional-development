<?php

declare(strict_types=1);

enum BackedPaymentMethod: string
{
    case Card = 'card';
    case BankTransfer = 'bank_transfer';
    case Invoice = 'invoice';

// Task 1
    public function requiresApproval(): bool
    {
        return match ($this) {
            self::Invoice => true,
            self::Card, self::BankTransfer => false,
        };
    }

    public function label(): string
    {
        return match ($this) {
            self::Card => 'Card',
            self::BankTransfer => 'Bank transfer',
            self::Invoice => 'Invoice',
        };
    }
}

// Task 2
$input = 'paypal';
$paymentMethod = BackedPaymentMethod::tryFrom($input);
var_dump(
    $paymentMethod
        ? $paymentMethod->requiresApproval()
        : 'Unknown payment method: ' . $input);

foreach (BackedPaymentMethod::cases() as $case) {
    var_dump($case);
    var_dump($case->value);
    var_dump($case->name);
    var_dump($case->label());
    var_dump($case->requiresApproval());
}

