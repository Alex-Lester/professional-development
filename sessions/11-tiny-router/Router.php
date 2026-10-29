<?php

declare(strict_types=1);

class Router {
    private array $routes = [];
    public function __construct()
    {
    }

    public function add(string $method, string $path, callable $handler): void
    {
        $this->routes[] = [
            'method' => $method,
            'pattern' => $path,
            'handler' => $handler,
        ];
    }

    private function matchPath(string $pattern, string $path): ?array
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

    public function dispatch(string $method, string $path): string
    {
        foreach ($this->routes as $route) {

            if ($route['method'] !== $method) {
                continue;
            }

            $params = $this->matchPath($route['pattern'], $path);
            if ($params !== null) {
                return $route['handler'](...$params);
            }
        }

        return 'Unknown route';
    }
}

$router = new Router();

$router->add('GET', '/bookings', fn () => 'List of bookings');
$router->add('GET', '/bookings/{id}', fn (string $id) => "Booking $id");
$router->add('POST', '/bookings', fn () => 'Booking created');

var_dump($router->dispatch('GET', '/bookings'));
var_dump($router->dispatch('GET', '/bookings/42'));
var_dump($router->dispatch('POST', '/bookings'));
var_dump($router->dispatch('DELETE', '/bookings'));