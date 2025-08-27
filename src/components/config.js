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
        id: "sas-internship",
        title: "Associate Software Engineer - SAS",
        shortDescription: "Worked as a full-stack developer on developing a live dashboard component at SAS.",
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

const cs_courses = {
    2: [
        {"name": "Intro to Object Oriented Programming", "details": ""},
        {"name": "Algorithmic Foundations", "details": ""},
        {"name": "Networks and Operating Systems", "details": ""},
        {"name": "Object Oriented Software Engineering", "details": ""},
        {"name": "Algorithms and Data Structures", "details": ""},
        {"name": "Web App Development", "details": ""},
    ],
    3: [
        {"name": "Algorithmics I", "details": "Involves the study of basic sorting algorithms; the tries data structure; graph basics; graph search and traversal algorithms; basic graph properties; string and text algorithms such as comparison, compression, and searching; problem classes and the P = NP problem; and computability, including the Halting problem, finite state automata, and Turing machines."},
        {"name": "Programming Languages", "details": "Involves the study of programming paradigms; operational semantics; binding; recursion; types and typechecking; imperative programming; syntactic analysis; variables and lifetime; abstraction; and native code generation."},
        {"name": "Robotics Foundations", "details": "Involves learning about the Robotics Operating System (ROS2); forward and inverse kinematics; behaviour-based control; vision systems and depth perception; various different perception modalities; and advanced robotics techniques such as SLAM and DeepSLAM."},
        {"name": "Data Fundamentals", "details": "Involves arrays; tensors; scientific visualisation; computational linear algebra; linear and non-linear optimisation methods; probability and basic statistics; sampling and inference; and time series analysis."},
        {"name": "Professional Software Development", "details": "Involves the study of agile team organisation; requirements management; change management; software licensing; build, release, and dependency management; continuous integration; behaviour driven development; software architecture; development operations; sustainability; and startup growth engineering."},
        {"name": "Team Project", "details": "Provides the experience of working on a substantial team based software project, following and applying the tools learned in the Professional Software Development course."},
    ],
    4: [
        {"name": "Individual Project", "details": "Provide the experience of undertaking a substantial piece of individual work, involving planning, specification, design, execution, evaluation, presentation, and report-writing."},
        {"name": "Functional Programming", "details": "Presents the concepts of functional programming using Haskell, applying techniques such as monads, parallelism, metaprogramming, and formal methods."},
        {"name": "Theory of Computation", "details": "Covers the theory of sequential and concurrent computation, topics including lambda calculus, the pi calculus, the theory of operational semantics, and type systems for both these calculi."},
        {"name": "Trustworthy Systems", "details": "Covers designing trustworthy systems through formal modelling, verification, and synthesis. Experience modelling systems such as Kripke structures, discrete-time Markov chains, Markov decision processes, and stochastic multiplayer games using the PRISM modelling language."},
        {"name": "Computational Game Theory", "details": "Investigate mathematical concepts that model strategic interactions, use algorithmic theory to analyse equilibrium solutions, study computational hardness, design mechanisms to incentivise desirable behaviour."},
        {"name": "Constraint Programming", "details": "Implement constraint programming solutions to a number of combinatorial problems, using a state of the art constraint programming toolkit, as well as cover the fundamental concepts of constraint satisfaction and constraint programming."},
    ],
}

const maths_courses = {
    2: [
        {"name": "Multivariable Calculus", "details": ""},
        {"name": "Linear Algebra", "details": ""},
        {"name": "Introduction to Real Analysis", "details": ""},
        {"name": "Mathematical Methods & Modelling", "details": ""},
        {"name": "Mechanics", "details": ""},
        {"name": "Groups, Transformations, and Symmetries", "details": ""},
    ],
    3: [
        {"name": "Abstract Algebra", "details": "Involves the study of groups, subgroups, cosets, normal subgroups, quotient groups, homomorphisms, isomorphisms; group actions, the Orbit-Stabiliser theorem; and rings, ideals, fields, polynomial rings, maximal and prime ideals, and Eisentein's criterion."},
        {"name": "Metric Spaces and Basic Topology", "details": "Involves the study of metric spaces, continuity, compactness, and the Contraction Mapping theorem; open and closed sets; topological spaces and homeomorphisms; connectedness and path-connectedness; Hausdorff spaces and compactness; and the Heine-Borel theorem."},
        {"name": "Dynamical Systems", "details": "Involves the study of first and second order dynamical systems; analysing linear and non-linear systems; analysing discrete systems and periodict orbits; and different types of bifurcations."},
        {"name": "Analysis of Differentiation and Integration", "details": "Invovles the study of continuity; differentiability from first principles; power series, Taylor series, and the Maclaurin expansion; and Riemann integrability."},
    ],
    4: [
        {"name": "Galois Theory", "details": "Centres on Galois Theory, mainly focusing on the Galois Correspondence Theorem, relating the structure of fields to the structure of groups, and its applications to polynomials. Covers field extensions, algebraic closure, finite fields, and more."},
        {"name": "Algebraic and Geometric Topology", "details": "Studies properties of topological spaces preserved under continuous deformations, such as homotopies, in particular the fundamental group used to classify surfaces up to homeomorphism. Also briefly covers the mathematics of knots and braids."},
        {"name": "Differential Geometry", "details": "Introduces the idea of curvature and the famous Gauss-Bonnet Theorem from a differential point of view, using techniques from calculus and geometry."},
        {"name": "Topics in Algebra", "details": "Primarily focuses on building tools for classifying certain families of groups, with a highlight on Sylow Theorems for finite groups, free groups, and free abelian groups."},
    ],
}

const projects = [
    {
        title: "algmatch",
        shortDescription: "PyPi package for several matching algorithms",
        fullDescription: "",
        tools: ["Python", "Gurobi"]
    },
    {
        title: "Simple Game",
        shortDescription: "A minimalist bullet hell style game",
        fullDescription: "",
        tools: ["Godot", "GDScript"]
    },
    {
        title: "Coaster",
        shortDescription: "A simple Rust-based text editor",
        fullDescription: "",
        tools: ["Rust"]
    },
    {
        title: "lean",
        shortDescription: "LEAN programming language practice",
        fullDescription: "",
        tools: ["LEAN"]
    },
    {
        title: "Quizzer",
        shortDescription: "Command line flashcard-like quiz application",
        fullDescription: "",
        tools: ["Python"]
    },
    {
        title: "makanin",
        shortDescription: "Several programs for word equations",
        fullDescription: "",
        tools: ["Python"]
    },
    {
        title: "Portfolio Website",
        shortDescription: "This website!",
        fullDescription: "",
        tools: ["React", "JavaScript", "TailwindCSS"]
    },
    {
        title: "Image Processing",
        shortDescription: "Scripts for processing images in different ways",
        fullDescription: "",
        tools: ["Python", "OpenCV"]
    },
    {
        title: "CatanSim",
        shortDescription: "A simulator for the board game Catan",
        fullDescription: "",
        tools: ["Python", "tkinter"]
    },
    {
        title: "CaptainPinkie",
        shortDescription: "A Java game created as part of the second year IOOP course",
        fullDescription: "",
        tools: ["Java"]
    },
    {
        title: "examAnalysis",
        shortDescription: "Scripts to analyse dates and times of exam timetables",
        fullDescription: "",
        tools: ["Python", "Bash"]
    },
    {
        title: "Notion Automation",
        shortDescription: "JS scripts to automate tasks in Notion",
        fullDescription: "",
        tools: ["JavaScript", "Notion API"]
    },
    {
        title: "emailBrief",
        shortDescription: "A program to send me a daily email brief",
        fullDescription: "",
        tools: ["Python", "SMTP"]
    },
    {
        title: "Maths Approximations",
        shortDescription: "Various methods of approximating pi and other values",
        fullDescription: "",
        tools: ["Python"]
    },
    {
        title: "S1YZPrograms",
        shortDescription: "Python programs for calculating processes for various statistical tests",
        fullDescription: "",
        tools: ["Python", "tkinter"]
    },
    {
        title: "collatz",
        shortDescription: "A program to explore the Collatz conjecture",
        fullDescription: "",
        tools: ["Python"]
    },
    {
        title: "bfCompiler",
        shortDescription: "A Brainf**k compiler written in Python",
        fullDescription: "",
        tools: ["Python"]
    },
    {
        title: "ZariiBot",
        shortDescription: "A simple discord bot",
        fullDescription: "",
        tools: ["Python", "Discord.py"]
    },
];

export { routes, experiences, cs_courses, maths_courses, projects };