"use client";
import { transcribe } from "./transcriber";
import { brainrot_counter } from "./counter";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import customStyle from "../constant/syntax-style";

let rotten: { [key: string]: number } = {
  skibidi: 0,
  lookmaxing: 0,
  galvanize: 0,
  rizz: 0,
  sus: 0,
};

export default function Page() {
  const [transformedText, setTransformedText] = useState<string>("");
  const [sussyRNG, setSussyRNG] = useState<number>(
    Math.floor(Math.random() * 10)
  );
  setInterval(() => {
    setSussyRNG(Math.floor(Math.random() * 10));
  }, 1000);

  function brainrot(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let rotten_string = transcribe(event.target.value);
    for (const [key, value] of Object.entries(rotten)) {
      rotten[key] = brainrot_counter(rotten_string, key);
    }
    setTransformedText(rotten_string);
    console.log(Object.entries(rotten));
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
          key="textarea"
          className={`text-md  ${
            rotten.galvanize >= 3
              ? "bg-[url(https://media1.tenor.com/m/u_U_V-3kjyMAAAAd/little-john-galvanized-square-steel.gif)] bg-cover transition-all duration-500"
              : ""
          } ${
            rotten.galvanize < 3 && sussyRNG > 5
              ? "bg-[url(https://media1.tenor.com/m/WhXYjpREz1kAAAAd/skibidi-toilet-skibidi.gif)] bg-cover transition-all duration-500"
              : ""
          } `}
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
