import React, { useState, useEffect } from "react";
import "../styles/components/_navbar.css";

export default function Navbar({ currentPath }) {
  const links = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
    { name: "Compétences", path: "/competences" },
    { name: "Projets", path: "/projets" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      {links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className={currentPath === link.path ? "active" : ""}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
