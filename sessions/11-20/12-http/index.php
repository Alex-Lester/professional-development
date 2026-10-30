<?php

declare(strict_types=1);

$booking = ['id' => 7, 'city' => 'London', 'nights' => 3];

echo 'debug';

http_response_code(200);
header('Content-Type: application/json');
header('Cache-Control: no-store');

echo sprintf("%s\n", json_encode($booking, JSON_THROW_ON_ERROR));
