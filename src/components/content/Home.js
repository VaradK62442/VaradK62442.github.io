import { NavLink } from "react-router-dom";
import ParagraphSection from "./ParagraphSection";
import { routes } from "../config";

function Home() {
    return (
        <div>
            <ParagraphSection
                paragraph = {
                    "Hi, I'm Varad Kulkarni, currently an undergraduate student at the University of Glasgow, studying Computer Science and Mathematics.\n" +
                    "This website is a personal portfolio to show off things I've done, things I'm working on, and generally things that I'm passionate about!\n"
                }
                image = "pfp.JPG"
                position = "left"
            />
            <br />
            <div className="flex justify-between items-center">
                <ul className="list-disc pl-5 flex-1">
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
                <div className="bg-purple-600 border-4 border-purple-300 border-dashed rounded-md p-4 text-purple-900 text-center w-64">
                    Try <span className="font-bold">h</span>, <span className="font-bold">j</span>, <span className="font-bold">k</span>, and <span className="font-bold">l</span> keys to navigate around the site!
                </div>
            </div>
        </div>
    );
}

export default Home;