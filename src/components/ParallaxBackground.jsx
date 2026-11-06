// ============================================================
// ParallaxBackground.jsx
// Interactive canvas-based dynamic starfield/grid + glowing orbs
// Tracks cursor coordinates with fluid inertia & depth layers
// ============================================================

import { useEffect, useRef } from "react";

function ParallaxBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      // Normalize from -1 to 1
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Particle nodes for subtle cyber constellation effect
    const nodeCount = 55;
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      depth: 0.5 + Math.random() * 1.5,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.4 ? "rgba(0, 212, 255," : "rgba(123, 97, 255,",
    }));

    const render = () => {
      // Smooth lerp for mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw subtle connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 150, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(
              nodes[i].x + mx * 18 * nodes[i].depth,
              nodes[i].y + my * 18 * nodes[i].depth
            );
            ctx.lineTo(
              nodes[j].x + mx * 18 * nodes[j].depth,
              nodes[j].y + my * 18 * nodes[j].depth
            );
            ctx.stroke();
          }
        }
      }

      // Draw floating nodes with glow
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        const renderX = node.x + mx * 25 * node.depth;
        const renderY = node.y + my * 25 * node.depth;

        ctx.beginPath();
        ctx.arc(renderX, renderY, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color} ${0.35 * node.depth})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00d4ff";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Dynamic interactive Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ambient background volumetric blobs */}
      <div className="parallax-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Analog noise grain texture */}
      <div className="noise-overlay"></div>
    </>
  );
}

export default ParallaxBackground;
