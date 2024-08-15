import "./App.css";
import { P5Wrapper } from "./components/P5Wrapper";
import { shaderSketch } from "./components/shaderSketch";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <P5Wrapper sketch={shaderSketch} />
      </div>
    </>
  );
}

export default App;
