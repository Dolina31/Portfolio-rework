import { useEffect, useState } from "react";
import "../styles/competences.css";

export default function SkillsBar({ progress, index }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <span className="skill-bar">
      <span
        className="skill-bar-progress"
        style={{
          width: animated ? progress : "0%",
          transitionDelay: `${index * 0.3}s`,
        }}
      />
    </span>
  );
}
