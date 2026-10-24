<?php

declare(strict_types=1);

class EmailCase
{
    public string $status = 'open';
}

// A
$tags = ['urgent', 'billing'];
$copy = $tags;
$copy[] = 'refund';
echo 'A: ' . count($tags) . "\n";
// Prediction: A: 2 (The array is copied and refund is added to the copy and not the original)

// B
$case = new EmailCase();
$same = $case;
$same->status = 'closed';
echo 'B: ' . $case->status . "\n";
// Prediction: B: closed ($same is a copy and the status is changed for the copy, not the original)

// C
function closeCase(EmailCase $c): void
{
    $c->status = 'closed';
}

function addSpamTag(array $t): void
{
    $t[] = 'spam';
}

$c2 = new EmailCase();
$t2 = ['inbox'];
closeCase($c2);
addSpamTag($t2);
echo 'C: ' . $c2->status . ' ' . count($t2) . "\n";
// Prediction: C: closed 1 ($c2 has its value changed but $t2 the add spam tag function creates a copy which it adds spam to and not to the original)

// D
function replaceCase(EmailCase $c): void
{
    $c = new EmailCase();
    $c->status = 'replaced';
}

$c3 = new EmailCase();
replaceCase($c3);
echo 'D: ' . $c3->status . "\n";
// Prediction: D: open (replaceCase creates a new EmailCase so changing the status on $c will not affect the original)

// E
$ids = [1, 2, 3];
foreach ($ids as &$id) {
}
foreach ($ids as $id) {
    echo implode(', ', $ids) . "\n";
}
echo 'E: ' . implode(', ', $ids) . "\n";
// I dont know