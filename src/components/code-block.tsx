"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const ref = React.useRef<HTMLPreElement>(null);

  const onCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    });
  };

  return (
    <div className="relative group">
      <pre
        ref={ref}
        className={cn(
          "my-4 rounded-lg border-t-4 border-primary bg-secondary p-4 pr-12 overflow-x-auto text-sm font-code text-secondary-foreground",
          className
        )}
      >
        <code>{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-3 right-3 h-8 w-8 text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
        onClick={onCopy}
        aria-label="Copy code to clipboard"
      >
        {hasCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
