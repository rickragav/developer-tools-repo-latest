<?php

// Get the HTTP method, path, and request body
$method = $_SERVER['REQUEST_METHOD'];
$request = $_SERVER['REQUEST_URI'];



$developer_tools = [
    [
        "name" => "Base64 Text Encoder",
        "description" => "Easily convert any text to Base64 with various advanced options.",
        "text" => "ABAAAAGgAAAAAABJKGAAcAAAASAAAAUKABAAMAAAABAAEAAKACAAQAAAABAAAHgKADAAQAAAABAAAEOAAAAABBU0NJSQAAAFNjcmVlbnNob3Qxbz3GAAAB2GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnM"
    ],
    [
        "name" => "Base64 Text Decoder",
        "description" => "Easily convert any Base64 text to String with various advanced options.",
        "text" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ]
];
// Set up headers for JSON response
header('Content-Type: application/json');

// Handle GET requests
if ($method === 'GET') {
    if ($request === '/landing.php') {
        echo json_encode($developer_tools, JSON_PRETTY_PRINT);
    } else {
        echo json_encode(['error' => 'Endpoint not found']);
    }
}



// Add more handlers for other HTTP methods and endpoints as needed
