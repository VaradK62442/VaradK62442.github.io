import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ProjectTile from "./ProjectTile";
import { projects } from "../config";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [markdownContent, setMarkdownContent] = useState("");
    const overlayRef = useRef(null);

    const handleTileClick = async (project) => {
        setSelectedProject(project);

        try {
            const response = await fetch("/projects/" + project.title + ".md");
            const text = await response.text();
            setMarkdownContent(text);
        } catch (error) {
            console.error("Error fetching Markdown file:", error);
            setMarkdownContent("Failed to load project description.");
        }
    };

    const closeOverlay = () => {
        setSelectedProject(null);
        setMarkdownContent("");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                closeOverlay();
            }
        };

        if (selectedProject) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedProject]);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <ProjectTile
                        project={project}
                        onClick={handleTileClick}
                    />
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        ref={overlayRef}
                        className="bg-purple-800 p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto relative"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold bg-purple-700 rounded px-2 py-1">
                                {selectedProject.title}
                            </h2>
                            <ul className="flex flex-wrap gap-2">
                                {selectedProject.tools?.map((tool, index) => (
                                    <li
                                        key={index}
                                        className="px-2 py-1 bg-purple-700 text-white text-sm rounded"
                                    >
                                        <b>{tool}</b>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-6 text-purple-600">
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
                        </div>
                        <div className="sticky bottom-0 left-0 w-full bg-purple-700 p-4 flex items-center justify-between rounded-lg">
                            {selectedProject.github && (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 bg-purple-800 text-white rounded hover:bg-purple-900 transition"
                                >
                                    <img
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                        alt="GitHub"
                                        className="w-6 h-6"
                                    />
                                </a>
                            )}
                            <button
                                className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900 ml-auto"
                                onClick={closeOverlay}
                            >
                                <b>Close</b>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;