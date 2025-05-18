import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

function Layout({ children }) {
    return (
        <div class="bg-blue text-white min-h-screen flex flex-col">
            <header class="bg-crimson text-white py-4 shadow-md sticky top-0 z-50">
                <div class="container mx-auto px-4">
                    <NavLink
                        to="/"
                        className="text-2xl font-bold"
                    >
                        Varad Kulkarni
                    </NavLink>
                </div>
            </header>
            <NavBar />
            <main class="flex-grow container mx-auto px-4 py-6">
                {children}
            </main>
            <footer class="bg-crimson text- py-4 text-center">
                <p>&copy; 2025 Varad Kulkarni. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout;