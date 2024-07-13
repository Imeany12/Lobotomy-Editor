"use client";
import { transcribe } from "./transcriber";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CodeBlock } from "@/components/codeblock";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";

export default function Page() {
  const [transformedText, setTransformedText] = useState<string>("");

  function brainrot(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTransformedText(event.target.value);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Lobotomy Editor</h1>
      <div className="grid grid-cols-2 gap-4 w-full min-h-[70vh]">
        <Textarea
          placeholder="Please type your command here"
          onChange={brainrot}
        />
        <CodeBlock
          language="javascript"
          code={transformedText}
          // className="border rounded-md"
        />
      </div>
    </div>
  );
}
