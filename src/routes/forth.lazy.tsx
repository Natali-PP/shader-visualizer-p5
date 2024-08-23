import { createLazyFileRoute } from "@tanstack/react-router";
import ForthShader from "../components/shaders/ForthShader";

export const Route = createLazyFileRoute("/forth")({
  component: ForthShader,
});
