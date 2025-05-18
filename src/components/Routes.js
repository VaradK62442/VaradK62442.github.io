import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./content/Home";
import About from "./content/About";
import Projects  from "./content/Projects";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>}/>
                <Route path="/about" element={<Layout><About /></Layout>}/>
                <Route path="/projects" element={<Layout><Projects /></Layout>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;