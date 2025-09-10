import React from "react";
import Navbar from "./Navbar.jsx";
import "../styles/global.css";
import "../styles/components/_layout.css";

export default function Layout({ children, currentPath }) {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <link rel="stylesheet" href="/src/styles/global.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Montaga&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <div className="layout-container">
        <div className="content-wrapper">
          <Navbar currentPath={currentPath} />
          <div className="white-box">{children}</div>
        </div>
      </div>
    </>
  );
}
