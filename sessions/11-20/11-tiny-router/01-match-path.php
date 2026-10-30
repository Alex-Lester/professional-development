<?php

declare(strict_types=1);

function matchPath(string $pattern, string $path): ?array
{
    $patternSegments = explode('/', trim($pattern,'/'));
    $pathSegments = explode('/', trim($path, '/'));

    if (count($patternSegments) !== count($pathSegments)) {
        return null;
    }

    $params = [];
    for ($i = 0, $iMax = count($pathSegments); $i < $iMax; $i++) {
        if (str_starts_with($patternSegments[$i], '{')) {
            $params[] = $pathSegments[$i];
        } else if ($patternSegments[$i] !== $pathSegments[$i]) {
            return null;
        }
    }

    return $params;
}

var_dump(matchPath('/bookings/{id}', '/bookings/45'));
var_dump(matchPath('/bookings/{id}', '/bookings'));
var_dump(matchPath('/bookings/{id}', '/rooms/42'));
var_dump(matchPath('/bookings/{id}/guests/{guestId}', '/bookings/7/guests/3'));

var_dump(matchPath('/bookings', '/bookings'));
var_dump(matchPath('/bookings/{id}', '/bookings/42/'));