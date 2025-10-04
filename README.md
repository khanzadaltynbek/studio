SwiftAPI

SwiftAPI is an educational, lightweight, and asynchronous Python web framework inspired by FastAPI.

The project was created to explore the core mechanics of modern Python frameworks: async/await, routing, data validation, and automatic API documentation generation.

Key Features

Fully asynchronous, built on ASGI for high performance

Decorator-based routing with simple and intuitive syntax

Data validation using dataclass and type annotations

Automatic API docs: Swagger UI (/docs), ReDoc (/redoc), OpenAPI (/openapi.json)

Dependency injection via function parameters

Open source under the MIT license

Installation
git clone https://github.com/YOUR_USERNAME/swiftapi.git
cd swiftapi

# (recommended) create a virtual environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# install dependencies
pip install -r requirements.txt
pip install -e .

Quick Start

Create a main.py file:

from swiftapi.app import SwiftAPI
from dataclasses import dataclass

app = SwiftAPI()

@dataclass
class Item:
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

@app.get("/")
async def read_root():
    return {"message": "Welcome to SwiftAPI!"}

@app.post("/items/")
async def create_item(item: Item):
    return {"item_name": item.name, "price": item.price}


Run the development server:

uvicorn main:app --reload


The server will be available at:
http://127.0.0.1:8000

API Documentation

Swagger UI: http://127.0.0.1:8000/docs

ReDoc: http://127.0.0.1:8000/redoc

OpenAPI JSON: http://127.0.0.1:8000/openapi.json

Example Run
python -m examples.hello_world

Contributing

See CONTRIBUTING.md
 for contribution guidelines.

License

This project is licensed under the MIT License. See LICENSE.
