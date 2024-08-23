import { createLazyFileRoute } from "@tanstack/react-router";
import ThirdShader from "../components/shaders/ThirdShader";

export const Route = createLazyFileRoute("/third")({
  component: ThirdShader,
});
