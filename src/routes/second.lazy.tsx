import { createLazyFileRoute } from "@tanstack/react-router";
import SecondShader from "../components/SecondShader/SecondShader";

export const Route = createLazyFileRoute("/second")({
  component: SecondShader,
});
