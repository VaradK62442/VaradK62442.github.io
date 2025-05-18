import { NavLink } from "react-router-dom";

const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
]

function NavBar() {
    return (
        <nav class="bg-blue text-white py-2 shadow">
            <ul class="flex space-x-4 justify-center">
                {routes.map((route) => (
                        <li key={route.path} class="hover:text-crimson">
                            <NavLink
                                to={route.path}
                                className={({ isActive }) =>
                                    `inline-block px-2 py-1 ${
                                        isActive
                                            ? "text-white border-b-2 border-crimson"
                                            : "text-white border-b-2 border-transparent"
                                    }`
                                }
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