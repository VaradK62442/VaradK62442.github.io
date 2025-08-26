import { useState, useRef, useEffect } from "react";
import ProjectTile from "./ProjectTile";
import { projects } from "../config";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const overlayRef = useRef(null);

    const handleTileClick = (project) => {
        setSelectedProject(project);
    };

    const closeOverlay = () => {
        setSelectedProject(null);
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
                        className="bg-purple-700 p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto relative"
                    >
                        <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
                        <p className="mb-16">{selectedProject.fullDescription}</p>
                        <div className="sticky bottom-0 left-0 w-full bg-purple-800 p-4 flex justify-end rounded-lg">
                            <button
                                className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600"
                                onClick={closeOverlay}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;