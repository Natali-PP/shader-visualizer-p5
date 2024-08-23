import { createLazyFileRoute } from "@tanstack/react-router";
import Diamond1Shader from "../components/shaders/Diamond1Shader";

export const Route = createLazyFileRoute("/diamond-1")({
  component: Diamond1Shader,
});
