import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Social from "./content/Social"

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
            <main class="flex-grow container mx-auto px-4 py-6 max-w-5xl flex flex-col justify-between">
                {children}
                <div class="mt-6 grid grid-cols-4 gap-4">
                    <Social
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        link="https://www.linkedin.com/in/varad-kulkarni-344b39206/"
                        title="LinkedIn"
                        description="Connect with me on LinkedIn."
                    />
                    <Social
                        icon="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        link="https://github.com/VaradK62442"
                        title="GitHub"
                        description="Check out my projects and contributions."
                    />
                    <Social
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                        link="mailto:varadkulk123@gmail.com"
                        title="Email"
                        description="Get in touch with me via email."
                    />
                    <Social
                        icon="https://images.icon-icons.com/2389/PNG/512/medium_logo_icon_145071.png"
                        link="https://medium.com/@varadkulk123"
                        title="Medium Blog"
                        description="Check out my Medium blog for essays on various topics."
                    />
                </div>
            </main>
            <footer class="bg-crimson py-4 text-center">
                <p>&copy; 2025 Varad Kulkarni. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout;