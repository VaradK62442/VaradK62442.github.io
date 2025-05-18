import { NavLink } from "react-router-dom";

const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
]

function NavBar() {
    return (
        <nav class="bg-blue-500 text-white py-2 shadow">
            <ul class="flex space-x-4 justify-center">
                {routes.map((route) => (
                        <li key={route.path} class="hover:text-gray-200">
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