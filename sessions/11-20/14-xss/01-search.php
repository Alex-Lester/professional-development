<?php
declare(strict_types=1);

$q = $_GET['q'] ?? null;

function escape(string $string): string
{
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

?>
<!DOCTYPE html>
<html lang="en">
<body>
<?php if (is_string($q)) : ?>
    <p>No bookings found for "<?= escape($q) ?>".</p>
<?php else : ?>
    <p>No bookings found.</p>
<?php endif; ?>
</body>
</html>