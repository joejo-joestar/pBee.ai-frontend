import { useRef, useEffect } from "react";

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

  return (
    <div className="absolute left-1/2 -z-10 flex h-screen w-full -translate-x-1/2 transform items-center justify-center bg-dark">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
