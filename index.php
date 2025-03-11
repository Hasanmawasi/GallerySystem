<?php 

// Define your base directory 
$base_dir = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');
$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// echo "req: ". $request;
// echo "base: ". $base_dir;
// Remove the base directory from the request if present
if (strpos($request, $base_dir) === 0) {
    $request = substr($request, strlen($base_dir));
}

// Ensure the request is at least '/'
if ($request == '') {
    $request = '/';
}

$apis = [
    '/signup'         => ['controllers' => 'UserController', 'method' => 'registerUser'],
    '/login'    => ['controllers' => 'UserController', 'method' => 'login']
];

if (isset($apis[$request])) {
    $controllerName = $apis[$request]['controllers'];
    $method = $apis[$request]['method'];
    require_once "GallerySystem-Server/users/v1/{$controllerName}.php";
    
    $controller = new $controllerName();
    if (method_exists($controller, $method)) {
        $controller->$method();
    } else {
        echo "Error: Method {$method} not found in {$controllerName}.";
    }
} else {
    echo "4042 Not Found";
}