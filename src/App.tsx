import { useState } from "react";
import "./App.css";
import { P5Wrapper } from "./components/P5Wrapper";
import { shaderSketch } from "./components/shaderSketch";

function App() {
  const [angleScale, setAngleScale] = useState(30.0);
  return (
    <>
      <div className="">
        <P5Wrapper sketch={(p) => shaderSketch(p, angleScale)} />
      </div>
      <div className=" absolute top-0 left-0 w-full h-full text-cyan-50">
        <div
          className="absolute h-full flex items-center justify-center -mr-16 w-[600px] "
          style={{ right: "10vw" }}
        >
          <div className="bg-slate-900 flex items-center justify-center flex-col w-[250px] h-[200px] rounded-md gap-6">
            <label>Value Selected {angleScale}</label>
            <input
              type="range"
              min="1"
              max="100"
              value={angleScale}
              onChange={(e) => setAngleScale(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
