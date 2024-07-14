import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";

export const CodeBlock = ({
  language,
  code,
  className,
}: {
  language: string;
  code: string;
  className?: string;
}) => {
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  return (
    // <div className={className}>
    <pre>
      <code className={`language-${language}`} ref={codeRef}>
        {code}
      </code>
    </pre>
    // </div>
  );
};
