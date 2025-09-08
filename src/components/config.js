const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About", description: "An overall summary about me, my interests, and my experiences." },
    { path: "/education", name: "Education", description: "An overview of my University education." },
    { path: "/experience", name: "Experience", description: "A summary of my professional and personal experiences." },
    { path: "/projects", name: "Projects", description: "A showcase of my personal projects." },
]

const experiences = [
    {
        id: "ugr-driverless",
        title: "Head Software Engineer - UGRacing Driverless",
        shortDescription: "Lead the technical development of an autonomous driverless system for UGRacing.",
    },
    {
        id: "sas-internship",
        title: "Associate Software Engineer - SAS",
        shortDescription: "Full-stack developer on developing a live dashboard component at SAS.",
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
        {"name": "Intro to Object Oriented Programming", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI2001", "details": "Program using a strongly typed language, learn ideas that underpin object-oriented programming and apply these concepts to develop small and medium sized software systems."},
        {"name": "Algorithmic Foundations", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI2003", "details": "Provide a comprehensive overview of web application development, training skills to design and develop distributed web applications as well as strengthening understanding of context and rationale of distributed systems."},
        {"name": "Networks and Operating Systems", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI2024", "details": "Introduce essential concepts in computer networks and operating systems focusing on the underlying concepts, design, and operation of the Internet."},
        {"name": "Object Oriented Software Engineering", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI2008", "details": "Learn methods for the design, implementation, testing, and documentation of larger object-oriented programs."},
        {"name": "Algorithms and Data Structures", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI2007", "details": "Study fundamental data types and data structures, with design and analysis of algorithms for the manipulation of these structures, and practice implementation and use of these structures and algorithms."},
        {"name": "Web App Development", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI2021", "details": "Introduce foundational mathematics required for computer science, train proficiency in their use, and show how they can be applied."},
    ],
    3: [
        {"name": "Algorithmics I", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4009", "details": "Involves the study of basic sorting algorithms; the tries data structure; graph basics; graph search and traversal algorithms; basic graph properties; string and text algorithms such as comparison, compression, and searching; problem classes and the P = NP problem; and computability, including the Halting problem, finite state automata, and Turing machines."},
        {"name": "Programming Languages", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4016", "details": "Involves the study of programming paradigms; operational semantics; binding; recursion; types and typechecking; imperative programming; syntactic analysis; variables and lifetime; abstraction; and native code generation."},
        {"name": "Robotics Foundations", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4076", "details": "Involves learning about the Robotics Operating System (ROS2); forward and inverse kinematics; behaviour-based control; vision systems and depth perception; various different perception modalities; and advanced robotics techniques such as SLAM and DeepSLAM."},
        {"name": "Data Fundamentals", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4073", "details": "Involves arrays; tensors; scientific visualisation; computational linear algebra; linear and non-linear optimisation methods; probability and basic statistics; sampling and inference; and time series analysis."},
        {"name": "Professional Software Development", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4015", "details": "Involves the study of agile team organisation; requirements management; change management; software licensing; build, release, and dependency management; continuous integration; behaviour driven development; software architecture; development operations; sustainability; and startup growth engineering."},
        {"name": "Team Project", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4047", "details": "Provides the experience of working on a substantial team based software project, following and applying the tools learned in the Professional Software Development course."},
    ],
    4: [
        {"name": "Individual Project", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4024P", "details": "Provide the experience of undertaking a substantial piece of individual work, involving planning, specification, design, execution, evaluation, presentation, and report-writing."},
        {"name": "Functional Programming", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4021", "details": "Presents the concepts of functional programming using Haskell, applying techniques such as monads, parallelism, metaprogramming, and formal methods."},
        {"name": "Theory of Computation", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI4072", "details": "Covers the theory of sequential and concurrent computation, topics including lambda calculus, the pi calculus, the theory of operational semantics, and type systems for both these calculi."},
        {"name": "Trustworthy Systems", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI5123", "details": "Covers designing trustworthy systems through formal modelling, verification, and synthesis. Experience modelling systems such as Kripke structures, discrete-time Markov chains, Markov decision processes, and stochastic multiplayer games using the PRISM modelling language."},
        {"name": "Computational Game Theory", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI5116", "details": "Investigate mathematical concepts that model strategic interactions, use algorithmic theory to analyse equilibrium solutions, study computational hardness, design mechanisms to incentivise desirable behaviour."},
        {"name": "Constraint Programming", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=COMPSCI5006", "details": "Implement constraint programming solutions to a number of combinatorial problems, using a state of the art constraint programming toolkit, as well as cover the fundamental concepts of constraint satisfaction and constraint programming."},
    ],
}

const maths_courses = {
    2: [
        {"name": "Multivariable Calculus", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS2001", "details": "Introduces differentiating and integrating in multiple dimensions and fundamental concepts found in diverse fields such as geometry and physics."},
        {"name": "Linear Algebra", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS2004", "details": "Covers the fundamentals of linear algebra that are applicable throughout science and engineering."},
        {"name": "Introduction to Real Analysis", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS2032", "details": "Provides a first introduction to real analysis, the common thread being the notion of limits."},
        {"name": "Mathematical Methods & Modelling", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS2033", "details": "Introduce aspects of the theory and methods used in mathematical modelling."},
        {"name": "Mechanics", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS2034", "details": "Introduces the mathematical modelling of mechanical phenomena."},
        {"name": "Groups, Transformations, and Symmetries", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS2035", "details": "Covers fundamental concepts in mathematics, such as groups, vector spaces, linear transformations, and symmetries."},
    ],
    3: [
        {"name": "Analysis of Differentiation and Integration", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4073", "details": "Invovles the study of continuity; differentiability from first principles; power series, Taylor series, and the Maclaurin expansion; and Riemann integrability."},
        {"name": "Dynamical Systems", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4074", "details": "Involves the study of first and second order dynamical systems; analysing linear and non-linear systems; analysing discrete systems and periodict orbits; and different types of bifurcations."},
        {"name": "Abstract Algebra", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4072", "details": "Involves the study of groups, subgroups, cosets, normal subgroups, quotient groups, homomorphisms, isomorphisms; group actions, the Orbit-Stabiliser theorem; and rings, ideals, fields, polynomial rings, maximal and prime ideals, and Eisentein's criterion."},
        {"name": "Metric Spaces and Basic Topology", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4077", "details": "Involves the study of metric spaces, continuity, compactness, and the Contraction Mapping theorem; open and closed sets; topological spaces and homeomorphisms; connectedness and path-connectedness; Hausdorff spaces and compactness; and the Heine-Borel theorem."},
    ],
    4: [
        {"name": "Differential Geometry", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4101", "details": "Introduces the idea of curvature and the famous Gauss-Bonnet Theorem from a differential point of view, using techniques from calculus and geometry."},
        {"name": "Galois Theory", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4105", "details": "Centres on Galois Theory, mainly focusing on the Galois Correspondence Theorem, relating the structure of fields to the structure of groups, and its applications to polynomials. Covers field extensions, algebraic closure, finite fields, and more."},
        {"name": "Topics in Algebra", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4111", "details": "Primarily focuses on building tools for classifying certain families of groups, with a highlight on Sylow Theorems for finite groups, free groups, and free abelian groups."},
        {"name": "Algebraic and Geometric Topology", "link": "https://www.gla.ac.uk/coursecatalogue/course/?code=MATHS4112", "details": "Studies properties of topological spaces preserved under continuous deformations, such as homotopies, in particular the fundamental group used to classify surfaces up to homeomorphism. Also briefly covers the mathematics of knots and braids."},
    ],
}

const projects = [
    {
        title: "algmatch",
        shortDescription: "PyPI package for several matching algorithms",
        fullDescription: "As part of my research on Stable Matching and Matching problems generally, I worked on implementing several matching algorithms and related utilities to release as a Python package. Our aim was to make using these algorithms as easy as possible since existing libraries provided a difficult interface to work with. The package includes implementations of several matching algorithms, including ones using Integer Linear Programming using the Gurobi solver.",
        tools: ["Python", "Gurobi"],
        github: "https://github.com/VaradK62442/algmatch"
    },
    {
        title: "Simple Game",
        shortDescription: "A minimalist bullet hell style game",
        fullDescription: "",
        tools: ["Godot", "GDScript"],
        github: "https://github.com/VaradK62442/simplegame"
    },
    {
        title: "Coaster",
        shortDescription: "A simple Rust-based text editor",
        fullDescription: "",
        tools: ["Rust"],
        github: "https://github.com/VaradK62442/simplegame"
    },
    {
        title: "lean",
        shortDescription: "LEAN programming language practice",
        fullDescription: "",
        tools: ["LEAN"],
        github: "https://github.com/VaradK62442/lean"
    },
    {
        title: "Quizzer",
        shortDescription: "Command line flashcard-like quiz application",
        fullDescription: "",
        tools: ["Python"],
        github: "https://github.com/VaradK62442/quizzer"
    },
    {
        title: "makanin",
        shortDescription: "Several programs for word equations",
        fullDescription: "",
        tools: ["Python"],
        github: "https://github.com/VaradK62442/makanin"
    },
    {
        title: "Portfolio Website",
        shortDescription: "This website!",
        fullDescription: "",
        tools: ["React", "JavaScript"],
        github: "https://github.com/VaradK62442/VaradK62442.github.io"
    },
    {
        title: "Image Processing",
        shortDescription: "Scripts for processing images in different ways",
        fullDescription: "",
        tools: ["Python", "OpenCV"],
        github: "https://github.com/VaradK62442/imageProcessing"
    },
    {
        title: "CatanSim",
        shortDescription: "A simulator for the board game Catan",
        fullDescription: "",
        tools: ["Python", "tkinter"],
        github: "https://github.com/VaradK62442/catanSim"
    },
    {
        title: "Maths Approximations",
        shortDescription: "Various methods of approximating pi and other values",
        fullDescription: "",
        tools: ["Python"],
        github: "https://github.com/VaradK62442/mathsApproximations"
    },
    {
        title: "CaptainPinkie",
        shortDescription: "A Java game created as part of the second year IOOP course",
        fullDescription: "",
        tools: ["Java"],
        github: "https://github.com/VaradK62442/CaptainPinkie"
    },
    {
        title: "Exam Analysis",
        shortDescription: "Scripts to analyse dates and times of exam timetables",
        fullDescription: "",
        tools: ["Python", "Bash"],
        github: "https://github.com/VaradK62442/examAnalysis"
    },
    {
        title: "Statistics Programs",
        shortDescription: "Python programs for calculating processes for various statistical tests",
        fullDescription: "",
        tools: ["Python", "tkinter"],
        github: "https://github.com/VaradK62442/S1YZPrograms"
    },
    {
        title: "collatz",
        shortDescription: "A program to explore the Collatz conjecture",
        fullDescription: "",
        tools: ["Python"],
        github: "https://github.com/VaradK62442/collatz"
    },
    {
        title: "Notion Automation",
        shortDescription: "JS scripts to automate tasks in Notion",
        fullDescription: "",
        tools: ["JavaScript", "Notion API"],
        github: "https://github.com/VaradK62442/notionAutomation"
    },
    {
        title: "Daily Email Brief",
        shortDescription: "A program to send me a daily email brief",
        fullDescription: "",
        tools: ["Python", "SMTP"],
        github: "https://github.com/VaradK62442/emailBrief"
    },
    {
        title: "bfCompiler",
        shortDescription: "A Brainf**k compiler written in Python",
        fullDescription: "",
        tools: ["Python"],
        github: "https://github.com/VaradK62442/bfCompiler"
    }
];

const tools = [
    {name: "Python", link: "https://www.python.org/"},
    {name: "Git", link: "https://git-scm.com/"},
    {name: "ROS2", link: "https://www.ros.org/"},
    {name: "Ubuntu", link: "https://ubuntu.com/"},
    {name: "JavaScript", link: "https://en.wikipedia.org/wiki/JavaScript"},
    {name: "Java", link: "https://www.java.com/en/"},
    {name: "numpy", link: "https://numpy.org/"},
    {name: "OpenCV", link: "https://opencv.org/"},
    {name: "LEAN", link: "https://lean-lang.org/"},
    {name: "Gurobi", link: "https://www.gurobi.com/"},
    {name: "vim", link:"https://www.vim.org/"},
    {name: "React", link: "https://react.dev/"},
    {name: "Playwright", link: "https://playwright.dev/python"},
    {name: "Godot", link: "https://godotengine.org/"},
    {name: "ANTLR", link: "https://www.antlr.org/"},
    {name: "Ultralytics", link: "https://docs.ultralytics.com/"},
    {name: "ZED SDK", link: "https://www.stereolabs.com/en-gb/developers/release"},
    {name: "RViz", link: "https://github.com/ros-visualization/rviz"},
    {name: "Foxglove", link: "https://docs.foxglove.dev/docs"},
    {name: "Django", link: "https://www.djangoproject.com/"},
];

const awards = [
    {title: "3rd place at FSUK", description: "Achieved 3rd place overall at the FS-AI competition as part of the UGRacing Driverless team."},
    {title: "MacDougall Class Prize", description: "Awarded to the most distinguished student in the Ordinary class of Mathematics at Level 2 on the recommendation of the Head of Subject."},
    {title: "Lorimer Bursary", description: "Awarded for being one of the top students in Level 1 Mathematics."},
]

export { routes, experiences, cs_courses, maths_courses, projects, tools, awards };