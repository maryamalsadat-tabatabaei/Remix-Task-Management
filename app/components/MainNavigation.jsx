import { NavLink } from "@remix-run/react";
import MainNavigationStyles from "./MainNavigation.css";

function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notes">My Notes</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;

export function links() {
  return [{ rel: "stylesheet", href: MainNavigationStyles }];
}
