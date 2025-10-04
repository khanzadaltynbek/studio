⚡ SwiftAPI

SwiftAPI — это образовательный, легковесный и асинхронный веб-фреймворк для Python, вдохновлённый FastAPI
.

🎯 Цель проекта — показать основы асинхронных фреймворков:
async/await, маршрутизация, валидация данных и авто-генерация документации API.

✨ Ключевые особенности

⚡ Полностью асинхронный — построен на ASGI для высокой производительности

🛣 Маршрутизация на декораторах — интуитивный синтаксис:

@app.get("/")
@app.post("/items/")


✅ Валидация данных — на основе dataclass + type hints

📖 Автодокументация — Swagger UI (/docs), ReDoc (/redoc), OpenAPI (/openapi.json)

🧩 Внедрение зависимостей через параметры функций

💡 MIT License — свободное распространение

⚙️ Установка
# Клонируем репозиторий
git clone https://github.com/khanzadaltynbek/swiftapi.git
cd swiftapi

# (Опционально) создаём виртуальное окружение
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Устанавливаем зависимости
pip install -r requirements.txt
pip install -e .

🚀 Быстрый старт

Создаём файл main.py:

from swiftapi.app import SwiftAPI
from dataclasses import dataclass

# 1. Экземпляр приложения
app = SwiftAPI()

# 2. Модель данных
@dataclass
class Item:
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

# 3. GET-эндпоинт
@app.get("/")
async def read_root():
    return {"message": "Welcome to SwiftAPI!"}

# 4. POST-эндпоинт
@app.post("/items/")
async def create_item(item: Item):
    return {"item_name": item.name, "price": item.price}


Запуск сервера разработки:

uvicorn main:app --reload


🌍 Сервер: http://127.0.0.1:8000

📚 Документация API

🔹 Swagger UI

🔹 ReDoc

🔹 OpenAPI JSON

🖥 Запуск примера

В проекте есть готовый пример:

python -m examples.hello_world

🤝 Как внести вклад

Мы рады любому вкладу!
📌 См. CONTRIBUTING.md
 для подробностей.

📄 Лицензия

📝 SwiftAPI распространяется под лицензией MIT
.
