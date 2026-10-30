<?php

declare(strict_types=1);

var_dump('A: ' . preg_match('/\d{3}/',       'Room 42'));
// Prediction: False

var_dump('B: ' . preg_match('/\d{3}/',       'Booking 12345'));
// Prediction: True

var_dump('C: ' . preg_match('/^\d{3}$/',     'Booking 12345'));
// Prediction: True // Actual: False

var_dump('D: ' . preg_match('/colou?r/',     'What color is it?'));
// Prediction: True

var_dump('E: ' . preg_match('/[A-Z]{2}\d/',  'ref: ab1'));
// Prediction: False

var_dump('F: ' . preg_match('/[A-Z]{2}\d/i', 'ref: ab1'));
// Prediction: True

var_dump('G: ' . preg_match('/a.c/',         'a.c and abc'));
// Prediction: True

var_dump('H: ' . preg_match('/^RE:/',        'FW: RE: Invoice'));
// Prediction: False