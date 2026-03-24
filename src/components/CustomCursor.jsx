import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top  = mouseY + "px";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top  = ringY + "px";
      raf = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const el = e.target;
      if (
        el.matches('a, button, .btn-primary, .btn-outline, [role="button"], input, label, select, textarea')
      ) {
        ring.style.width  = "52px";
        ring.style.height = "52px";
        ring.style.borderColor = "rgba(59, 130, 246, 0.8)";
        dot.style.opacity = "0";
      }
    };
    const onLeave = () => {
      ring.style.width  = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(59, 130, 246, 0.5)";
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout",  onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout",  onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
