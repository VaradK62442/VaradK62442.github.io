import { NavLink } from "react-router-dom";
import AboutPara from "./AboutPara";
import { routes } from "../config";

function Home() {
    return (
        <div>
            <AboutPara
                paragraph = {
                    "Hi, I'm Varad Kulkarni, currently an undergraduate student at the University of Glasgow, studying Computer Science and Mathematics.\n" +
                    "This website is a personal portfolio to show off things I've done, things I'm working on, and generally things that I'm passionate about!\n"
                }
                image = "pfp.JPG"
                position = "left"
            />
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