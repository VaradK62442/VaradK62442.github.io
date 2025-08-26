const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About", description: "A little bit about me and my interests." },
    { path: "/education", name: "Education", description: "An overview of my education." },
    { path: "/experience", name: "Experience", description: "A summary of my experience." },
    { path: "/projects", name: "Projects", description: "A thorough showcase of my projects." },
]

const experiences = [
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
    }
]

export { routes, experiences };