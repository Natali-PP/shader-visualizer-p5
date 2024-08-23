import { useState } from "react";
import "../App.css";
import { P5Wrapper } from "./P5Wrapper";
import { shaderSketch } from "./shaderSketch";

function FlowerShader() {
  const [angleScale, setAngleScale] = useState(30.0);
  const uniforms = {
    angleScale: angleScale,
  };

  const sliders = [
    {
      name: "angleScale",
      min: 1,
      max: 100,
      step: 1,
      initial: 30,
      position: { x: window.innerWidth * 0.9, y: window.innerHeight * 0.08 },
      label: "Petals amount",
    },
  ];
  return (
    <>
      <div className="">
        <P5Wrapper
          sketch={(p) =>
            shaderSketch(
              p,
              uniforms,
              "/shaders/vertex.vert",
              "/shaders/fragment.frag",
              sliders
            )
          }
        />
      </div>
      <div className=" absolute  w-full h-full text-cyan-50 top-[2vh] left-[87.5vw]  ">
        <div className="bg-slate-900 flex flex-col items-center justify-center w-[220px] h-[100px] rounded-md gap-6"></div>
      </div>
    </>
  );
}

export default FlowerShader;
