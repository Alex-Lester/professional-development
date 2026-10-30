<?php

declare(strict_types=1);

use JetBrains\PhpStorm\NoReturn;

header('Content-Type: application/json');

match($_SERVER['REQUEST_METHOD']) {
    'POST' => handlePost(),
    'GET' => handleGet(),
    default => handleRest(),
};

// GET Handler
#[NoReturn]
function handleGet(): never
{
    http_response_code(200);
    header('Content-Type: application/json');
    header('Cache-Control: no-store');

    $booking = ['id' => 42, 'city' => 'London', 'nights' => 3];
    echo sprintf("%s\n", json_encode($booking, JSON_THROW_ON_ERROR));
    exit;
}

// POST Handler
#[NoReturn]
function handlePost(): never
{
    try {
        $data = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    } catch (JsonException) {
        http_response_code(400);
        echo sprintf("%s\n", json_encode(['error' => 'Request body must be valid JSON'], JSON_THROW_ON_ERROR));
        exit;
    }

    $errors = [];
    if (!isset($data['city']) || !is_string($data['city']) || trim($data['city']) === '') {
        $errors['city'] = 'City is required and must be a non-empty string';
    }

    if (!isset($data['nights']) || !is_int($data['nights']) || (!$data['nights']) > 0) {
        $errors['nights'] = 'Nights is required and must be a non-zero integer';
    }

    if ($errors !== []) {
        http_response_code(422);
        echo sprintf("%s\n", json_encode(['errors' => $errors], JSON_THROW_ON_ERROR));
        exit;
    }

    http_response_code(201);
    header('Location: /bookings/43');
    echo sprintf("%s\n", json_encode(['id' => 43, 'city' => $data['city'], 'nights' => $data['nights']], JSON_THROW_ON_ERROR));
    exit;
}

// Rest Handler
#[NoReturn]
function handleRest(): never
{
    http_response_code(405);
    header('Allow: POST, GET');
    echo sprintf("%s\n", json_encode(['error' => 'Method not allowed'], JSON_THROW_ON_ERROR));
    exit;
}