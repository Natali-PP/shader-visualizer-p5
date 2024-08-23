import { P5Wrapper } from "../P5Wrapper";
import { shaderSketch } from "../shaderSketch";

const Diamond1Shader = () => {
  const radioButtons = [
    {
      name: "choice1",
      label: "Option 1",
      value: 0.0,
      position: { x: window.innerWidth * 0.92, y: window.innerHeight * 0.03 },
      size: 80,
    },
    {
      name: "choice2",
      label: "Option 2",
      value: 1.0,
      position: { x: window.innerWidth * 0.9, y: window.innerHeight * 0.1 },
      size: 80,
    },
    {
      name: "choice3",
      label: "Option 3",
      value: 2.0,
      position: { x: window.innerWidth * 0.9, y: window.innerHeight * 0.2 },
      size: 80,
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
            "/shaders/diamond1/fragment.frag",
            [],
            [],
            radioButtons
          )
        }
      />
      <div className=" absolute  w-full h-full text-cyan-50 top-[1.5vh] left-[90.75vw]  ">
        <div className="bg-slate-900 flex flex-col items-center justify-center w-[120px] h-[100px] rounded-md gap-6"></div>
      </div>
    </>
  );
};
export default Diamond1Shader;
