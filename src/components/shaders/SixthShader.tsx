import { P5Wrapper } from "../P5Wrapper";
import { shaderSketch } from "../shaderSketch";

const SixthShader = () => {
  const checkboxes = [
    {
      name: "choice",
      label: "Horizontal",
      initial: true,
      position: { x: window.innerWidth * 0.9, y: window.innerHeight * 0.06 },
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
            "/shaders/sixth/fragment.frag",
            [],
            checkboxes
          )
        }
      />
      <div className=" absolute  w-full h-full text-cyan-50 top-[2vh] left-[87.5vw]  ">
        <div className="bg-slate-900 flex flex-col items-center justify-center w-[220px] h-[100px] rounded-md gap-6"></div>
      </div>
    </>
  );
};
export default SixthShader;
