import { useEffect, useState } from "react";

function CursorRing() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div style={{position: "fixed",top: pos.y,left: pos.x,width: 1000, height:1000, borderRadius: "50%",  background: "radial-gradient(circle, rgba(0,0,255,0.1) 0%, rgba(0,0,255,0) 70%)", pointerEvents: "none", transform: "translate(-50%, -50%)",zIndex: 9999,}}/>
  );
}
export default CursorRing