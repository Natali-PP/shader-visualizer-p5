import { createLazyFileRoute } from "@tanstack/react-router";
import FlowerShader from "../components/FlowerShader";
import "../index.css";
export const Route = createLazyFileRoute("/")({
  component: FlowerShader,
});

// function Index() {
//   return (
//     <div className="p-2 text-red-600">
//       <h3>Welcome Home!</h3>
//     </div>
//   );
// }
