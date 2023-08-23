import tailwindStyles from "~/tailwind.css";
import MainNavigation from "~/components/MainNavigation";
import { cssBundleHref } from "@remix-run/css-bundle";
import { Link, useRouteError, isRouteErrorResponse } from "@remix-run/react";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// export const links = () => [
//   ...(cssBundleHref
//     ? [
//         { rel: "stylesheet", href: cssBundleHref },
//         { rel: "stylesheet", href: stylesheet },
//       ]
//     : [{ rel: "stylesheet", href: stylesheet }]),
// ];
export const links = () => [...[{ rel: "stylesheet", href: tailwindStyles }]];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundry() {
  const error = useRouteError();
  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>An Error acurred!</title>
          <Links />
        </head>
        <body>
          <header>
            <MainNavigation />
          </header>
          <main className="error">
            <h1>Oops</h1>
            <p>Status: {error.status}</p>
            <p>{error.data?.message}</p>
            <p>
              Back to <Link to="/">Home</Link>
            </p>
          </main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>An Error acurred!</title>
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="error">
          <h1>An Error acurred!</h1>
          <p>{error.message}</p>
          <p>
            Back to <Link to="/">Home</Link>
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
