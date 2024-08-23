import { P5Wrapper } from "../P5Wrapper";
import { shaderSketch } from "../shaderSketch";

const FirstShader = () => {
  return (
    <>
      {" "}
      <P5Wrapper
        sketch={(p) =>
          shaderSketch(
            p,
            {},
            "shaders/first/vertex.vert",
            "/shaders/first/fragment.frag"
          )
        }
      />
    </>
  );
};
export default FirstShader;
