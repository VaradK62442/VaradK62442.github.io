import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { experiences } from "../config";

function Experience() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [markdownContent, setMarkdownContent] = useState("");

    const toggleDropdown = async (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
            setMarkdownContent("");
            window.history.replaceState(null, null, window.location.pathname);
        } else {
            setActiveIndex(index);
            if (experiences[index].description === "") {
                setMarkdownContent("...");
            } else {
                const response = await fetch("/experience/" + experiences[index].id + ".md");
                const text = await response.text();
                setMarkdownContent(text);
            }
            window.history.replaceState(null, null, `#${experiences[index].id}`);
        }
    }

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const index = experiences.findIndex(exp => exp.id === hash);
            if (index !== -1) {
                setActiveIndex(index);
            }
        }
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold">Experiences</h1>
            <h4 className="mb-6">(click to expand)</h4>
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