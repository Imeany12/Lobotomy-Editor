"use client";
import { transcribe } from "./transcriber";
import { brainrot_counter } from "./counter";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";



let rotten = {"skibidi": 0,
"lookmaxing": 0,  
"galvanize": 0,
"rizz": 0,
"sus":0
}



export default function Page() {
  const [transformedText, setTransformedText] = useState<string>("");
  const customStyle = {
    borderRadius: "0.375rem" /* 6px */,
  };

  function brainrot(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let rotten_string = transcribe(event.target.value)
    for (const [key, value] of Object.entries(rotten)) {
        rotten[key] = brainrot_counter(rotten_string, key);
    }
    setTransformedText(rotten_string);
    console.log(Object.entries(rotten))
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
