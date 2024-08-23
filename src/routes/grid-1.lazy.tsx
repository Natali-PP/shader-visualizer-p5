import { createLazyFileRoute } from "@tanstack/react-router";
import Grid1Shader from "../components/shaders/Grid1Shader";

export const Route = createLazyFileRoute("/grid-1")({
  component: Grid1Shader,
});
