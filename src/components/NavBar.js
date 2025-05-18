import { NavLink } from "react-router-dom";

const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About", description: "A little bit about me, my background, and my interests." },
    { path: "/education", name: "Education", description: "An overview of my education." },
    { path: "/experience", name: "Experience", description: "A brief summary of my experience." },
    { path: "/projects", name: "Projects", description: "A thorough showcase of my projects." },
]

function NavBar() {
    return (
        <nav class="bg-blue-400 text-white py-2 shadow">
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
export { routes };