import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../App.css";
import "../index.css";
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex flex-col gap-2 bg-slate-900 text-cyan-50 relative z-30 w-32 h-[100vh]">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/fifth" className="[&.active]:font-bold">
          5rd
        </Link>
        <Link to="/sixth" className="[&.active]:font-bold">
          6th
        </Link>
        <Link to="/squares-1" className="[&.active]:font-bold">
          Squares 1
        </Link>
        <Link to="/grid-1" className="[&.active]:font-bold">
          Grid 1
        </Link>
        <Link to="/diamond-1" className="[&.active]:font-bold">
          Diamond 1
        </Link>
        <Link to="/first" className="[&.active]:font-bold">
          First
        </Link>
        <Link to="/second" className="[&.active]:font-bold">
          Second
        </Link>
        <Link to="/third" className="[&.active]:font-bold">
          3rd
        </Link>
        <Link to="/forth" className="[&.active]:font-bold">
          4rd
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
