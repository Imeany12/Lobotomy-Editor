"use client";
import { transcribe } from "./transcriber";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import customStyle from "../constant/syntax-style";

export default function Page() {
  const [transformedText, setTransformedText] = useState<string>("");

  function brainrot(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTransformedText(transcribe(event.target.value));
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-16">
      <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Lobotomy Editor
      </h1>
      <div className="grid grid-cols-2 gap-8 w-full min-h-[70vh]">
        <Textarea
          placeholder="Please type your command here"
          onChange={brainrot}
          className="text-md"
        />
        <SyntaxHighlighter
          style={atomOneDarkReasonable}
          customStyle={customStyle}
          showLineNumbers
        >
          {transformedText}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
