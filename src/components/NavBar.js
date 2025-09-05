import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "./config";
import { useEffect } from "react";

function NavBar() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            const currentPath = window.location.pathname;
            const currentIndex = routes.findIndex(route => route.path === currentPath);

            if (event.key === "ArrowRight" || event.key === "l") {
                const nextIndex = (currentIndex + 1) % routes.length;
                navigate(routes[nextIndex].path);
            } else if (event.key === "ArrowLeft" || event.key === "h") {
                const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
                navigate(routes[prevIndex].path);
            } else if (event.key === "j") {
                window.scrollBy({ top: 75, behavior: "smooth" });
            } else if (event.key === "k") {
                window.scrollBy({ top: -75, behavior: "smooth" });
            } else if (event.key === "g" && event.repeat) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (event.key === "G") {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [navigate]);

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