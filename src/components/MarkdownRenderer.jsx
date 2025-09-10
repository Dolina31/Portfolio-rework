import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ content }) {
  // Remplace chaque saut de ligne par <br /> pour ReactMarkdown
  const contentWithBreaks = content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return <div>{contentWithBreaks}</div>;
}
