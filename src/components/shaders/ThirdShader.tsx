import { P5Wrapper } from "../P5Wrapper";
import { shaderSketch } from "../shaderSketch";

const ThirdShader = () => {
  return (
    <>
      {" "}
      <P5Wrapper
        sketch={(p) =>
          shaderSketch(
            p,
            {},
            "/shaders/first/vertex.vert",
            "/shaders/third/fragment.frag"
          )
        }
      />
    </>
  );
};
export default ThirdShader;
