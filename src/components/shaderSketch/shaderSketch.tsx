import p5 from "p5";

export const shaderSketch = (p: p5) => {
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
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.noStroke();
    // disables scaling for retina screens which can create inconsistent scaling between displays
    p.pixelDensity(1);
  };

  p.draw = () => {
    if (shaderProgram) {
      p.rectMode(p.CENTER);
      p.shader(shaderProgram);
      shaderProgram.setUniform("u_time", p.millis() / 1000.0); // we divide millis by 1000 to convert it to seconds
      p.plane(100, 100);
    } else {
      console.error("Shader program is not defined.");
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

export default shaderSketch;
