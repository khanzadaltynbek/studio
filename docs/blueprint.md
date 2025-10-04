# **App Name**: SwiftAPI

## Core Features:

- Async HTTP Routing: Enable async request handling using decorators like @app.get and @app.post.
- Lightweight Validation: Implement dataclasses for request body validation, providing basic data validation.
- OpenAPI Schema Generation: Automatically generate an OpenAPI 3.0 schema at /openapi.json for API documentation.
- Automatic API Docs: Serve Swagger UI at /docs and ReDoc at /redoc for interactive API documentation.
- Dependency Injection: Allow dependency injection using type hints in function parameters.
- Development Server: Include a built-in development server based on Uvicorn, with instructions for production deployment.
- Error Handling: Implement a custom HTTPException class and a global handler for structured JSON error responses.

## Style Guidelines:

- Background color: White (#FFFFFF) for a clean base.
- Primary accent: Gentle pink (#FFC0CB) for links and highlights, providing a soft, modern touch.
- Text color: Dark grey (#333333) for readability.
- Code block background: Very light grey (#F8F8F8) with a pink top border (#FFC0CB) for visual distinction.
- Font: 'Inter' (sans-serif) for clean readability. Note: currently only Google Fonts are supported.
- Use ample whitespace and center the main content column for an airy and readable layout. Employ rounded corners on buttons, cards, and code blocks for a modern feel.