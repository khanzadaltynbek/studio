# SwiftAPI

SwiftAPI — это образовательный, легковесный и асинхронный веб-фреймворк для Python, вдохновленный FastAPI.

Проект создан с целью изучения основных механик современных Python-фреймворков: асинхронность (async/await), маршрутизация, валидация данных и автоматическая генерация документации API.

---

## Ключевые особенности

- Полностью асинхронный: построен на ASGI, что обеспечивает высокую производительность.  
- Маршрутизация на основе декораторов: простой и интуитивно понятный синтаксис для определения эндпоинтов.  
- Валидация данных: встроенная легковесная валидация на основе стандартных датаклассов Python и аннотаций типов.  
- Автоматическая документация API: Swagger UI (/docs), ReDoc (/redoc), OpenAPI схема (/openapi.json).  
- Простое внедрение зависимостей через параметры функций.  
- Открытый исходный код: распространяется под лицензией MIT.  

---

## Установка

```bash
# Клонирование репозитория
git clone https://github.com/khanzadaltynbek/swiftapi.git
cd swiftapi

# (Рекомендуется) создание виртуального окружения
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Установка зависимостей
pip install -r requirements.txt
pip install -e .
Быстрый старт
Создайте файл main.py со следующим содержимым:

python
Копировать код
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
Запуск сервера разработки:

bash
Копировать код
uvicorn main:app --reload
После запуска сервер будет доступен по адресу:
http://127.0.0.1:8000

Документация API
Swagger UI: http://127.0.0.1:8000/docs

ReDoc: http://127.0.0.1:8000/redoc

OpenAPI JSON: http://127.0.0.1:8000/openapi.json

Запуск примера
В репозитории есть готовый пример. Запустите его командой:

bash
Копировать код
python -m examples.hello_world
Как внести вклад
Мы рады любому вкладу. Пожалуйста, ознакомьтесь с CONTRIBUTING.md перед отправкой Pull Request.

Лицензия
Проект распространяется под лицензией MIT. Подробности можно найти в файле LICENSE.
