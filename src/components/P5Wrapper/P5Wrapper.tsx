import { useEffect, useRef } from "react";
import p5 from "p5";

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

export const P5Wrapper = ({ sketch }: P5WrapperProps) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const p5Instance = new p5(sketch, canvasRef.current!);

    return () => {
      p5Instance.remove();
    };
  }, [sketch]);
  return <div ref={canvasRef}></div>;
};
