import NavBar from "./NavBar";

function Layout({ title, children }) {
    return (
        <div class="bg-blue-500 text-white min-h-screen">
            <header class="bg-blue-600 text-white py-4 shadow-md">
                <div class="container mx-auto px-4">
                    <h1 class="text-2xl font-bold">{title}</h1>
                </div>
            </header>
            <NavBar />
            <main class="flex-grow container mx-auto px-4 py-6">
                {children}
            </main>
        </div>
    )
}

export default Layout;