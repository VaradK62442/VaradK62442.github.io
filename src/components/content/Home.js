import { NavLink } from "react-router-dom";
import { routes } from "../NavBar";

function Home() {
    return (
        <div>
            <p>Hi, I'm Varad Kulkarni, currently an undergraduate student at the University of Glasgow, studying Computer Science and Mathematics.</p>
            <p>This website is a personal portfolio to show off things I've done, things I'm working on, and generally things that I'm passionate about!</p>
            <br />
            <ul className="list-disc pl-5">
                {routes
                    .filter((route) => route.description)
                    .map((route) => (
                        <li key={route.path}>
                            <NavLink to={route.path}>
                                <span class="font-bold">{route.name}</span>
                            </NavLink>
                            : {route.description}
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;