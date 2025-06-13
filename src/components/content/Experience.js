import { useState, useEffect } from "react";

function Experience() {
    const experiences = [
        {
            id: "ugr-driverless",
            title: "Head Software Engineer - UGRacing Driverless",
            shortDescription: "Leading the technical development of driverless software for UGRacing.",
            description: "..."
        },
        {
            id: "stable-matching-research",
            title: "Researcher - Stable Matching Problems",
            shortDescription: "Conducting research on various Stable Matching problems.",
            description: "..."
        },
        {
            id: "simple-game",
            title: "Simple Game - DYHTG24 Hackathon JPM Winner",
            shortDescription: "Developed a minimalist bullet hell style game using Godot Engine.",
            description: "...",
        },
        {
            id: "essays",
            title: "Essays on Various Maths and Computing Topics",
            shortDescription: "Researching and writing essays on various topics of interest in mathematics and computing.",
            description: "...",
        },
        {
            id: "word-equations",
            title: "Studying Word Equations in Free Monoids",
            shortDescription: "Studying word equations in free monoids and existence and uniqueness of their solutions.",
            description: "..."
        },
        {
            id: "finite-state-automata",
            title: "Studying Automata - The Theory of Computation by Michael Sipser",
            shortDescription: "Studying finite state automata and the theory of computation.",
            description: "..."
        },
    ]

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        window.history.replaceState(null, null, window.location.pathname);
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
            <h1 className="text-2xl font-bold mb-6">Experiences (click to expand)</h1>
            <ul className="space-y-4">
                {experiences.map((experience, index) => (
                    <li key={index} id={experience.id} className="border border-crimson rounded-md shadow-md">
                        <button
                            className="w-full text-left p-4 bg-crimson font-semibold text-white"
                            onClick={() => toggleDropdown(index)}
                        >
                            {experience.title}
                            <span className="block text-sm text-white">{experience.shortDescription}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 bg-crimson text-white">
                                {experience.description}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Experience;