import { P5Wrapper } from "../P5Wrapper";
import { shaderSketch } from "../shaderSketch";

const SecondShader = () => {
  return (
    <>
      {" "}
      <P5Wrapper
        sketch={(p) =>
          shaderSketch(
            p,
            {},
            "/shaders/first/vertex.vert",
            "/shaders/second/fragment.frag"
          )
        }
      />
    </>
  );
};
export default SecondShader;
