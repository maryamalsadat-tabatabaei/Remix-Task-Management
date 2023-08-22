import tailwindStyles from "~/tailwind.css";
import MainNavigation from "~/components/MainNavigation";
import { cssBundleHref } from "@remix-run/css-bundle";
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
