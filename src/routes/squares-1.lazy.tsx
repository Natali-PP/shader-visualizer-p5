import { createLazyFileRoute } from "@tanstack/react-router";
import Squares1Shader from "../components/Squares1Shader/Squares1Shader";

export const Route = createLazyFileRoute("/squares-1")({
  component: Squares1Shader,
});
