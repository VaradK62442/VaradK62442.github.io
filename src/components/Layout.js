import NavBar from "./NavBar";

function Layout({ title, children }) {
    return (
        <div class="bg-blue text-white min-h-screen flex flex-col">
            <header class="bg-crimson text-white py-4 shadow-md sticky top-0 z-50">
                <div class="container mx-auto px-4">
                    <h1 class="text-2xl font-bold">{title}</h1>
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