import { useState, useEffect } from "react";
import MarkdownRenderer from "../components/MarkdownRenderer.jsx";
import "../styles/components/_modal.css";

export default function Modal({ projects }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll(".open-modal-btn");
    buttons.forEach((btn) =>
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.projectIndex);
        setSelectedIndex(index);
        setTimeout(() => setIsActive(true), 10); // permet à la transition de jouer
      })
    );

    return () => {
      buttons.forEach((btn) =>
        btn.removeEventListener("click", () => setSelectedIndex(null))
      );
    };
  }, []);

  const closeModal = () => {
    setIsActive(false);
    setTimeout(() => setSelectedIndex(null), 300); // attend la fin de la transition
  };

  if (selectedIndex === null) return null;
  const project = projects[selectedIndex];

  return (
    <div className={`modal ${isActive ? "show" : ""}`}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={closeModal}>
          X
        </button>

        <h2 className="modal_title">{project.title}</h2>
        <div className="modal_text">
          <MarkdownRenderer content={project.descriptionText} />
        </div>
        <div className="modal_links">
          {project.linkS && (
            <a href={project.linkS} target="_blank" rel="noopener noreferrer">
              Site
            </a>
          )}
          {project.linkM && (
            <a href={project.linkM} target="_blank" rel="noopener noreferrer">
              Maquette
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
