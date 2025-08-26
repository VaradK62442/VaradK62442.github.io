import { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function Experience() {
    const experiences = useMemo(
        () => [
            {
                id: "ugr-driverless",
                title: "Head Software Engineer - UGRacing Driverless",
                shortDescription: "Leading the technical development of driverless software for UGRacing.",
            },
            {
                id: "stable-matching-research",
                title: "Researcher - Stable Matching Problems",
                shortDescription: "Conducting research on various Stable Matching problems.",
            },
            {
                id: "simple-game",
                title: "Simple Game - DYHTG24 Hackathon JPM Winner",
                shortDescription: "Developed a minimalist bullet hell style game using Godot Engine.",
            },
            {
                id: "individual-project",
                title: "Individual 4th year Project - Formal verification in LEAN",
                shortDescription: "Using the LEAN theorem prover to verify properties about finite automata.",
            },
            {
                id: "team-project",
                title: "Team Project - SUERC AMS Database",
                shortDescription: "Developed a web application to manage the SUERC AMS database using Django.",
            },
            {
                id: "essays",
                title: "Essays on Various Maths and Computing Topics",
                shortDescription: "Researching and writing essays on various topics of interest in mathematics and computing.",
            },
            {
                id: "word-equations",
                title: "Studying Word Equations in Free Monoids",
                shortDescription: "Studying word equations in free monoids and existence and uniqueness of their solutions.",
            },
            {
                id: "finite-state-automata",
                title: "Studying Automata - The Theory of Computation by Michael Sipser",
                shortDescription: "Studying finite state automata and the theory of computation.",
            },
        ],
        []
    );

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
    }, [experiences]);

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