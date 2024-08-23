import { createLazyFileRoute } from "@tanstack/react-router";
import SixthShader from "../components/shaders/SixthShader";

export const Route = createLazyFileRoute("/sixth")({
  component: SixthShader,
});
