import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
//import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <p>Not Found (on root route)</p>;
  },
});


function RootComponent() {

  return (
    <Fragment>
      <div className="fixed right-0 left-0 bottom-0 p-5 w-full bg-green-700 text-white rounded-xl z-20 opacity-90">
        <nav className="flex flex-row justify-between">
          <Link to="/" activeOptions={{ exact: true }} >
            Home
          </Link>{" "}
          <Link to={"/aboutme"}>About Me</Link>
          <Link to={"/mission"}>Mission</Link>
          <Link to={"/skills"} activeOptions={{ exact: true }}>
            Skills
          </Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
      </div>
      <Outlet />
      </Fragment>
  );
}
