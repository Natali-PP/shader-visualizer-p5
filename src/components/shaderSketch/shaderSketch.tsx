import p5 from "p5";

export const shaderSketch = (p: p5, angleScale?: number) => {
  let shaderProgram: p5.Shader;

  p.preload = () => {
    const vertexShaderPath = "/shaders/vertex.vert";
    const fragmentShaderPath = "/shaders/fragment.frag";
    shaderProgram = p.loadShader(vertexShaderPath, fragmentShaderPath);

    if (!shaderProgram) {
      console.error("Shader program could not be loaded.");
    }
  };

  p.setup = () => {
    p.createCanvas(2 * p.windowWidth, 2 * p.windowHeight, p.WEBGL);
    p.noStroke();
    p.perspective();
  };

  p.draw = () => {
    if (shaderProgram) {
      p.shader(shaderProgram);
      shaderProgram.setUniform("iResolution", [p.width, p.height]);
      shaderProgram.setUniform("iTime", p.millis() / 1000.0);
      !!angleScale ? shaderProgram.setUniform("angleScale", angleScale) : null;
      p.plane(p.width, 2 * p.height);
      p.resizeCanvas(p.windowWidth * 2, p.windowHeight * 2);
    } else {
      console.error("Shader program is not defined.");
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

export default shaderSketch;
