import { useEffect, useRef } from "react";

export default function HorizontalScroll({ children }) {
  const scrollRef = useRef(null);
  const velocityRef = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const onWheel = (e) => {
      e.preventDefault();
      velocityRef.current += e.deltaY; // deltaY = force du scroll
      if (!animationRef.current) animateScroll();
    };

    const animateScroll = () => {
      const velocity = velocityRef.current;
      if (Math.abs(velocity) < 0.1) {
        velocityRef.current = 1;
        animationRef.current = null;
        return;
      }

      el.scrollLeft += velocity;
      velocityRef.current *= 0.9; // friction pour inertie
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div ref={scrollRef} className="page_content projects-page_content">
      {children}
    </div>
  );
}
