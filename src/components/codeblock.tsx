import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

export const CodeBlock = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => {
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code className={`language-${language}`} ref={codeRef}>
        {code}
      </code>
    </pre>
  );
};
