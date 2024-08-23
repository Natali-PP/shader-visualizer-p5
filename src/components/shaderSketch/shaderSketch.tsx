import p5 from "p5";

interface ShaderSketchProps {
  vertexShader: string;
  fragmentShader: string;
  sliders?: {
    name: string;
    min: number;
    max: number;
    step: number;
    initial: number;
    position: { x: number; y: number };
    label: string;
  }[];
  checkboxes?: {
    name: string;
    label: string;
    initial: boolean;
    position: { x: number; y: number };
  }[];
  uniforms?: { [key: string]: any };
  radioButtons?: {
    name: string;
    label: string;
    value: number;
    position: { x: number; y: number };
    size: number;
  }[];
}

export const shaderSketch = (
  p: p5,
  uniforms: ShaderSketchProps["uniforms"] = {},
  vertexShader: ShaderSketchProps["vertexShader"],
  fragmentShader: ShaderSketchProps["fragmentShader"],
  sliders?: ShaderSketchProps["sliders"],
  checkboxes?: ShaderSketchProps["checkboxes"],
  radioButtons?: ShaderSketchProps["radioButtons"]
) => {
  let shaderProgram: p5.Shader;
  const sliderElements: any[] = [];
  const sliderLabels: any[] = [];
  const checkboxElements: any[] = [];
  const radioElements: any[] = [];

  p.preload = () => {
    const vertexShaderPath = vertexShader;
    const fragmentShaderPath = fragmentShader;
    shaderProgram = p.loadShader(vertexShaderPath, fragmentShaderPath);

    if (!shaderProgram) {
      console.error("Shader program could not be loaded.");
    }
  };

  p.setup = () => {
    p.createCanvas(2 * p.windowWidth, 2 * p.windowHeight, p.WEBGL);
    p.noStroke();
    p.perspective();
    if (sliders) {
      sliders.forEach((slider) => {
        const s = p.createSlider(
          slider.min,
          slider.max,
          slider.initial,
          slider.step
        );
        s.position(slider.position.x, slider.position.y);
        s.style("z-index", "1000");
        sliderElements.push({ name: slider.name, element: s });

        // Create the label text
        const label = p.createP(slider.label);
        label.position(slider.position.x, slider.position.y - 30); // Position above the slider
        label.style("color", "#FFFFFF"); // White text color
        label.style("margin", "0");
        label.style("z-index", "1000");
        sliderLabels.push(label);
      });
    }

    // Radio buttons setup
    if (radioButtons) {
      const rb = p.createRadio() as p5.Element & {
        option: (label: string, value: string) => void;
        value: (val?: string) => string;
        changed: (callback: () => void) => void;
        selected: (val: string) => void;
      };
      rb.position(radioButtons[0].position.x, radioButtons[0].position.y);
      rb.style("width", "1000px");
      rb.style("z-index", "1000");
      rb.size(radioButtons[0].size);

      radioButtons.forEach((radio) => {
        rb.option(String(radio.value), radio.label);
      });

      rb.changed(() => {
        const selectedValue = Number(rb.value());
        // Update the shader uniform with the selected value
        shaderProgram.setUniform("radioChoice", selectedValue);
      });

      rb.selected(String(radioButtons[0].value));

      radioElements.push(rb);
    }
  };

  p.draw = () => {
    if (shaderProgram) {
      p.shader(shaderProgram);
      // Set default uniforms like iResolution and iTime
      shaderProgram.setUniform("iResolution", [p.width, p.height]);
      shaderProgram.setUniform("iTime", p.millis() / 1000.0);
      if (uniforms) {
        for (const [name, value] of Object.entries(uniforms)) {
          shaderProgram.setUniform(name, value);
        }
      }
      //Update the shader with slider values
      sliderElements.forEach((slider) => {
        shaderProgram.setUniform(slider.name, slider.element.value());
      });
      //Update the shader with checkboxes values
      checkboxElements.forEach((checkbox) => {
        shaderProgram.setUniform(checkbox.name, checkbox.element.checked());
      });

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
