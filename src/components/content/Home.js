import { NavLink } from "react-router-dom";
import ParagraphSection from "./ParagraphSection";
import { routes, tools } from "../config";

function Home() {
    return (
        <div>
            <NavLink to="/about">
                <ParagraphSection
                    paragraph = {
                        "Hi, I'm Varad Kulkarni, currently an undergraduate student at the University of Glasgow, studying Computer Science and Mathematics.\n" +
                        "This website is a personal portfolio to show off things I've done, things I'm working on, and generally things that I'm passionate about!\n"
                    }
                    image = "pfp.JPG"
                    position = "left"
                />
            </NavLink>
            <br />
            <div className="flex justify-between items-center">
                <ul className="list-disc pl-5 flex-1">
                    {routes
                        .filter((route) => route.description)
                        .map((route) => (
                            <li key={route.path}>
                                <NavLink to={route.path}>
                                    <span className="font-bold">{route.name}</span>
                                </NavLink>
                                : {route.description}
                            </li>
                    ))}
                </ul>
                <div className="bg-purple-600 border-4 border-purple-300 border-dashed rounded-md p-4 text-purple-900 text-center w-64">
                    Try using arrow keys or <span className="font-bold">h</span>, <span className="font-bold">j</span>, <span className="font-bold">k</span>, and <span className="font-bold">l</span> keys to navigate around the site!
                </div>
            </div>
            <br />
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2 text-center">Tools, Languages, and Frameworks</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {tools.map((tool) => (
                        <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center bg-purple-600 p-2 rounded-md shadow-md hover:shadow-lg transition"
                        >
                            <span className="text-sm font-medium">{tool.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;