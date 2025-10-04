import { Feather, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import { getImage } from "@/app/lib/placeholder-images";

const navItems = [
  { name: "Getting Started", href: "#getting-started" },
  { name: "Routing", href: "#routing" },
  { name: "Validation", href: "#validation" },
  { name: "API Docs", href: "#api-docs" },
  { name: "Contributing", href: "#contributing" },
];

const quickstartCode = `from swiftapi.app import SwiftAPI

app = SwiftAPI()

@app.get("/")
async def read_root():
    return {"message": "Hello World"}`;

const runServerCode = `uvicorn your_file:app --reload`;

const routingCode = `@app.get("/users/{user_id}")
async def read_user(user_id: int, q: str | None = None):
    # path parameter 'user_id' is automatically converted to int
    # query parameter 'q' is optional
    return {"user_id": user_id, "q": q}`;

const validationCode = `from dataclasses import dataclass
from swiftapi.app import SwiftAPI

app = SwiftAPI()

@dataclass
class Item:
    name: str
    price: float
    is_offer: bool | None = None

@app.post("/items")
async def create_item(item: Item):
    # SwiftAPI automatically validates the request body
    # against the 'Item' dataclass.
    return item`;

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Feather className="h-6 w-6 text-primary-foreground" />
          <span className="font-bold font-headline">SwiftAPI</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-primary-foreground/80"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/firebase/genkit-pro-swiftapi" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
        </div>
      </div>
    </header>
  );
}

function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
    return (
        <section id={id} className="py-16 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight font-headline text-center">{title}</h2>
            <div className="text-muted-foreground text-lg leading-relaxed">
                {children}
            </div>
        </section>
    );
}

function HeroSection() {
  const heroImage = getImage("hero-code");
  return (
    <section id="home" className="py-20 text-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tighter font-headline sm:text-6xl md:text-7xl">
          Build Fast, Modern APIs with Python
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          An educational, lightweight Python web framework inspired by FastAPI.
          Perfect for learning and building efficient asynchronous web services.
        </p>
        <div className="flex justify-center gap-2">
            <Badge variant="secondary">Build: Passing</Badge>
            <Badge variant="secondary">PyPI: v0.1.0</Badge>
            <Badge variant="secondary">License: MIT</Badge>
        </div>
      </div>
      <div className="mt-12 text-left">
          {heroImage && (
            <div className="my-8 rounded-xl border shadow-lg overflow-hidden">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={800}
                    className="w-full"
                    data-ai-hint={heroImage.imageHint}
                />
            </div>
          )}
          <h3 className="text-center text-lg font-semibold mb-2">Try the demo locally</h3>
          <CodeBlock code="pip install swiftapi\npython examples/hello_world.py" />
      </div>
    </section>
  );
}

function GettingStartedSection() {
    return (
        <Section id="getting-started" title="Getting Started">
            <p className="text-center">Getting a SwiftAPI application up and running is quick and easy. Follow these simple steps.</p>
            <h3 className="text-xl font-semibold pt-8">1. Installation</h3>
            <p>Install SwiftAPI using pip. It has minimal dependencies to keep your projects lightweight.</p>
            <CodeBlock code="pip install swiftapi" />
            <h3 className="text-xl font-semibold pt-4">2. Create your first endpoint</h3>
            <p>Create a file (e.g., <code className="font-code rounded bg-secondary px-1 py-0.5">main.py</code>) and add the following code:</p>
            <CodeBlock code={quickstartCode} />
            <h3 className="text-xl font-semibold pt-4">3. Run the server</h3>
            <p>Use an ASGI server like Uvicorn to run your application.</p>
            <CodeBlock code={runServerCode} />
            <p>Now, open your browser and navigate to <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer" className="text-primary-foreground underline">http://127.0.0.1:8000</a>. You should see the JSON response: <code className="font-code rounded bg-secondary px-1 py-0.5">{`{"message": "Hello World"}`}</code>.</p>
        </Section>
    );
}

function RoutingSection() {
    const routingImage = getImage("routing-diagram");
    return (
        <Section id="routing" title="Async HTTP Routing">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p>SwiftAPI uses simple decorators to define API routes. It fully supports <code className="font-code rounded bg-secondary px-1 py-0.5">async def</code> for high-performance, non-blocking I/O.</p>
                    <h3 className="text-xl font-semibold pt-8">Path and Query Parameters</h3>
                    <p>Define path parameters with curly braces and add type-hinted function arguments for query parameters. SwiftAPI handles parsing and type conversion for you.</p>
                    <CodeBlock code={routingCode} />
                    <p>A request to <code className="font-code rounded bg-secondary px-1 py-0.5">/users/123?q=searchterm</code> would result in the JSON response: <code className="font-code rounded bg-secondary px-1 py-0.5">{`{"user_id": 123, "q": "searchterm"}`}</code>.</p>
                </div>
                 {routingImage && (
                    <div className="rounded-lg overflow-hidden border shadow-lg">
                        <Image
                            src={routingImage.imageUrl}
                            alt={routingImage.description}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            data-ai-hint={routingImage.imageHint}
                        />
                    </div>
                )}
            </div>
        </Section>
    );
}

function ValidationSection() {
    const validationImage = getImage("validation-check");
    return (
        <Section id="validation" title="Lightweight Validation">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 {validationImage && (
                    <div className="rounded-lg overflow-hidden border shadow-lg">
                        <Image
                            src={validationImage.imageUrl}
                            alt={validationImage.description}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            data-ai-hint={validationImage.imageHint}
                        />
                    </div>
                )}
                <div>
                    <p>Ensure data integrity with a simple, Pydantic-like validation system using Python's built-in dataclasses.</p>
                    <h3 className="text-xl font-semibold pt-8">Request Body Validation</h3>
                    <p>Define your expected data structure using a <code className="font-code rounded bg-secondary px-1 py-0.5">dataclass</code>. SwiftAPI will automatically validate incoming request bodies, parse the data, and inject it into your path function.</p>
                    <CodeBlock code={validationCode} />
                    <p>If a request is sent with an invalid body (e.g., missing 'name' or incorrect type for 'price'), SwiftAPI will automatically return a <code className="font-code rounded bg-secondary px-1 py-0.5">422 Unprocessable Entity</code> error with a descriptive JSON body.</p>
                </div>
            </div>
        </Section>
    );
}

function ApiDocsSection() {
    const swaggerImage = getImage("swagger-ui");
    const redocImage = getImage("redoc-ui");
    return (
        <Section id="api-docs" title="Automatic API Docs">
            <p className="text-center">One of SwiftAPI's most powerful features is its ability to automatically generate interactive API documentation from your code.</p>
            <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                    {swaggerImage && <Image src={swaggerImage.imageUrl} alt={swaggerImage.description} width={500} height={350} className="rounded-t-lg" data-ai-hint={swaggerImage.imageHint}/>}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold">Swagger UI</h3>
                        <p className="mt-2 text-muted-foreground flex-1">Navigate to <a href="#api-docs" className="text-primary-foreground underline">/docs</a> to explore your API through a rich, interactive Swagger UI. Test endpoints, see schemas, and understand your API's capabilities instantly.</p>
                    </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
                    {redocImage && <Image src={redocImage.imageUrl} alt={redocImage.description} width={500} height={350} className="rounded-t-lg" data-ai-hint={redocImage.imageHint} />}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold">ReDoc</h3>
                        <p className="mt-2 text-muted-foreground flex-1">For a clean, single-column documentation view, visit <a href="#api-docs" className="text-primary-foreground underline">/redoc</a>. ReDoc provides a beautifully rendered, readable alternative for your API documentation.</p>
                    </div>
                </div>
            </div>
            <p className="text-center pt-8">This is all generated automatically from your type hints and route definitions, requiring zero extra configuration.</p>
        </Section>
    );
}

function ContributingSection() {
    return (
        <Section id="contributing" title="Contributing to SwiftAPI">
            <p className="text-center">SwiftAPI is an open-source project, and contributions are welcome! Whether it's reporting a bug, proposing a new feature, or submitting code, your help is appreciated.</p>
            <div className="text-center pt-8">
                <Button asChild>
                    <a href="https://github.com/firebase/genkit-pro-swiftapi/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                        Read Contribution Guide
                    </a>
                </Button>
            </div>
        </Section>
    );
}


function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-20 max-w-4xl items-center justify-between px-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SwiftAPI. All rights reserved.</p>
        <p>
          Built by{" "}
          <a
            href="https://firebase.google.com/docs/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Firebase Studio
          </a>
        </p>
      </div>
    </footer>
  );
}


export default function SwiftAPIPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 divide-y divide-border">
          <HeroSection />
          <GettingStartedSection />
          <RoutingSection />
          <ValidationSection />
          <ApiDocsSection />
          <ContributingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
