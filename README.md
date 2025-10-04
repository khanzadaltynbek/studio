# ⚡ SwiftAPI

SwiftAPI is an **educational, lightweight, and asynchronous web framework for Python** inspired by FastAPI.  

The project demonstrates the core mechanics behind modern Python frameworks:  
asynchronous programming (`async/await`), routing, data validation, and automatic API documentation.

---

## ✨ Features

- **Fully asynchronous**: built on ASGI for high performance  
- **Decorator-based routing**: simple and intuitive syntax  
- **Data validation**: lightweight validation with Python `dataclass` and type hints  
- **Auto-generated docs**: Swagger UI (`/docs`), ReDoc (`/redoc`), and OpenAPI schema (`/openapi.json`)  
- **Dependency injection** through function parameters  
- **MIT License**: open source and free to use  

---

## ⚙️ Installation

# Clone the repository
git clone https://github.com/khanzadaltynbek/swiftapi.git
cd swiftapi

# (recommended) create a virtual environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
pip install -e .

---

🚀 Quick Start

Create a file main.py:
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
---
Server will be available at:
👉 http://127.0.0.1:8000
---
📚 API Documentation

Swagger UI: http://127.0.0.1:8000/docs

ReDoc: http://127.0.0.1:8000/redoc

OpenAPI JSON: http://127.0.0.1:8000/openapi.json
---
▶️ Example

The repository includes a ready-to-run example:

python -m examples.hello_world
---
🤝 Contributing

We welcome contributions!
Please read CONTRIBUTING.md
 before submitting a Pull Request.
---
📄 License

SwiftAPI is licensed under the MIT License.
