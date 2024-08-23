import { createLazyFileRoute } from "@tanstack/react-router";
import FifthShader from "../components/shaders/FifthShader";

export const Route = createLazyFileRoute("/fifth")({
  component: FifthShader,
});
