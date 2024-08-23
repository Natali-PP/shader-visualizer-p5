import { createLazyFileRoute } from "@tanstack/react-router";
import FirstShader from "../components/FirstShader/FirstShader";

export const Route = createLazyFileRoute("/first")({
  component: FirstShader,
});
