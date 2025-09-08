import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { experiences } from "../config";

function Experience() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [markdownContent, setMarkdownContent] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = useCallback(
        async (index) => {
            if (activeIndex === index) {
                setActiveIndex(null);
                setMarkdownContent("");
            } else {
                setActiveIndex(index);
                if (experiences[index].description === "") {
                    setMarkdownContent("...");
                } else {
                    try {
                        const response = await fetch("/experience/" + experiences[index].id + ".md");
                        const text = await response.text();
                        setMarkdownContent(text);
                    } catch (error) {
                        console.error("Error fetching markdown content:", error);
                        setMarkdownContent("Error loading content.");
                    }
                }
            }
        },
        [activeIndex]
    );

    useEffect(() => {
        const selectedIndex = location.state?.selectedIndex;
        if (selectedIndex !== undefined && selectedIndex !== activeIndex) {
            toggleDropdown(selectedIndex);
            navigate(location.pathname, { replace: true });
        }
    }, [location, toggleDropdown, activeIndex, navigate]);

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Experience</h1>
                <div className="bg-purple-600 border-4 border-purple-300 border-dashed rounded-md p-2 text-purple-900 text-center">
                    <span className="font-bold text-sm">Click to read more!</span>
                </div>
            </div>
            <ul className="space-y-4">
                {experiences.map((experience, index) => (
                    <li key={index} id={experience.id} className="border border-crimson rounded-md shadow-md">
                        <button
                            className="w-full text-left p-4 bg-crimson font-semibold text-white hover:bg-crimson-600 transition shadow"
                            onClick={() => toggleDropdown(index)}
                        >
                            {experience.title}
                            <span className="block text-sm text-white">{experience.shortDescription}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 bg-crimson text-white">
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {markdownContent}
                                </ReactMarkdown>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Experience;