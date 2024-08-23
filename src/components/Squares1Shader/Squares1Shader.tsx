import { P5Wrapper } from "../P5Wrapper";
import { shaderSketch } from "../shaderSketch";

const Squares1Shader = () => {
  const sliders = [
    {
      name: "valueX",
      min: 0,
      max: 1,
      step: 0.1,
      initial: 0.2,
      position: { x: window.innerWidth * 0.9, y: window.innerHeight * 0.08 },
      label: "Horizontal value",
    },
    {
      name: "valueY",
      min: 0,
      max: 1,
      step: 0.1,
      initial: 0.2,
      position: { x: window.innerWidth * 0.9, y: window.innerHeight * 0.16 },
      label: "Vertical value",
    },
  ];
  return (
    <>
      {" "}
      <P5Wrapper
        sketch={(p) =>
          shaderSketch(
            p,
            {},
            "/shaders/first/vertex.vert",
            "/shaders/squares1/fragment.frag",
            sliders
          )
        }
      />
      <div className=" absolute  w-full h-full text-cyan-50 top-[2vh] left-[87.5vw]  ">
        <div className="bg-slate-900 flex flex-col items-center justify-center w-[220px] h-[200px] rounded-md gap-6"></div>
      </div>
    </>
  );
};
export default Squares1Shader;
