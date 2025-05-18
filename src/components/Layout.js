import NavBar from "./NavBar";

function Layout({ title, children }) {
    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;