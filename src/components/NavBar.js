import { NavLink } from "react-router-dom";
import "../styling/NavBar.css";

const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
]

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                {routes.map((route) => (
                        <li key={route.path}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                {route.name}
                            </NavLink>
                        </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;