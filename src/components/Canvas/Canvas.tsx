import React, { useRef, useEffect } from "react";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = 397;
        canvas.height = 562;

        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="border-2 border-black" />;
};

export default Canvas;
