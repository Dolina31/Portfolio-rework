import { useState } from "react";
import "../styles/components/_navbar.css";

export default function Navbar({ currentPath }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
    { name: "Savoir-faire", path: "/competences" },
    { name: "Projets", path: "/projets" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Bouton menu pour tablette et mobile */}
      <div className="mobile_menu_wrapper">
        <button
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Navbar */}

      <nav className={`navbar ${open ? "show" : ""}`}>
        {" "}
        <div>
          <img src="/images/logo.png" alt="Logo de Line Ibo" loading="lazy" />
        </div>
        <span className="mobile_menu_close" onClick={() => setOpen(!open)}>
          ✕
        </span>
        {links.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={currentPath === link.path ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
}
