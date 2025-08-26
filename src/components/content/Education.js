import Courses from "./Courses";

function Education() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">BSc (Hons): Computer Science and Mathematics</h2>
            <p>
                In the past three years of my degree, I have gained a solid foundation in computer science and mathematics, with a focus on algorithms, data structures, algebra, and various other theoretical computing and pure maths topics.<br />
            </p>
            <Courses
                year={"4 (in progress)"}
                cs={[
                    {"name": "Individual Project", "details": "Provide the experience of undertaking a substantial piece of individual work, involving planning, specification, design, execution, evaluation, presentation, and report-writing."},
                    {"name": "Functional Programming", "details": "Presents the concepts of functional programming using Haskell, applying techniques such as monads, parallelism, metaprogramming, and formal methods."},
                    {"name": "Theory of Computation", "details": "Covers the theory of sequential and concurrent computation, topics including lambda calculus, the pi calculus, the theory of operational semantics, and type systems for both these calculi."},
                    {"name": "Trustworthy Systems", "details": "Covers designing trustworthy systems through formal modelling, verification, and synthesis. Experience modelling systems such as Kripke structures, discrete-time Markov chains, Markov decision processes, and stochastic multiplayer games using the PRISM modelling language."},
                    {"name": "Computational Game Theory", "details": "Investigate mathematical concepts that model strategic interactions, use algorithmic theory to analyse equilibrium solutions, study computational hardness, design mechanisms to incentivise desirable behaviour."},
                    {"name": "Constraint Programming", "details": "Implement constraint programming solutions to a number of combinatorial problems, using a state of the art constraint programming toolkit, as well as cover the fundamental concepts of constraint satisfaction and constraint programming."},
                ]}
                maths={[
                    {"name": "Galois Theory", "details": "Centres on Galois Theory, mainly focusing on the Galois Correspondence Theorem, relating the structure of fields to the structure of groups, and its applications to polynomials. Covers field extensions, algebraic closure, finite fields, and more."},
                    {"name": "Algebraic and Geometric Topology", "details": "Studies properties of topological spaces preserved under continuous deformations, such as homotopies, in particular the fundamental group used to classify surfaces up to homeomorphism. Also briefly covers the mathematics of knots and braids."},
                    {"name": "Differential Geometry", "details": "Introduces the idea of curvature and the famous Gauss-Bonnet Theorem from a differential point of view, using techniques from calculus and geometry."},
                    {"name": "Topics in Algebra", "details": "Primarily focuses on building tools for classifying certain families of groups, with a highlight on Sylow Theorems for finite groups, free groups, and free abelian groups."},
                ]}
            />
            <Courses
                year={"3"}
                cs={[
                    {"name": "Algorithmics I", "details": "Involves the study of basic sorting algorithms; the tries data structure; graph basics; graph search and traversal algorithms; basic graph properties; string and text algorithms such as comparison, compression, and searching; problem classes and the P = NP problem; and computability, including the Halting problem, finite state automata, and Turing machines."},
                    {"name": "Programming Languages", "details": "Involves the study of programming paradigms; operational semantics; binding; recursion; types and typechecking; imperative programming; syntactic analysis; variables and lifetime; abstraction; and native code generation."},
                    {"name": "Robotics Foundations", "details": "Involves learning about the Robotics Operating System (ROS2); forward and inverse kinematics; behaviour-based control; vision systems and depth perception; various different perception modalities; and advanced robotics techniques such as SLAM and DeepSLAM."},
                    {"name": "Data Fundamentals", "details": "Involves arrays; tensors; scientific visualisation; computational linear algebra; linear and non-linear optimisation methods; probability and basic statistics; sampling and inference; and time series analysis."},
                    {"name": "Professional Software Development", "details": "Involves the study of agile team organisation; requirements management; change management; software licensing; build, release, and dependency management; continuous integration; behaviour driven development; software architecture; development operations; sustainability; and startup growth engineering."},
                    {"name": "Team Project", "details": "Provides the experience of working on a substantial team based software project, following and applying the tools learned in the Professional Software Development course."},
                ]}
                maths={[
                    {"name": "Abstract Algebra", "details": "Involves the study of groups, subgroups, cosets, normal subgroups, quotient groups, homomorphisms, isomorphisms; group actions, the Orbit-Stabiliser theorem; and rings, ideals, fields, polynomial rings, maximal and prime ideals, and Eisentein's criterion."},
                    {"name": "Metric Spaces and Basic Topology", "details": "Involves the study of metric spaces, continuity, compactness, and the Contraction Mapping theorem; open and closed sets; topological spaces and homeomorphisms; connectedness and path-connectedness; Hausdorff spaces and compactness; and the Heine-Borel theorem."},
                    {"name": "Dynamical Systems", "details": "Involves the study of first and second order dynamical systems; analysing linear and non-linear systems; analysing discrete systems and periodict orbits; and different types of bifurcations."},
                    {"name": "Analysis of Differentiation and Integration", "details": "Invovles the study of continuity; differentiability from first principles; power series, Taylor series, and the Maclaurin expansion; and Riemann integrability."},
                ]}
            />
            <Courses
                year={"2"}
                cs={[
                    {"name": "Intro to Object Oriented Programming", "details": ""},
                    {"name": "Algorithmic Foundations", "details": ""},
                    {"name": "Networks and Operating Systems", "details": ""},
                    {"name": "Object Oriented Software Engineering", "details": ""},
                    {"name": "Algorithms and Data Structures", "details": ""},
                    {"name": "Web App Development", "details": ""},
                ]}
                maths={[
                    {"name": "Multivariable Calculus", "details": ""},
                    {"name": "Linear Algebra", "details": ""},
                    {"name": "Introduction to Real Analysis", "details": ""},
                    {"name": "Mathematical Methods & Modelling", "details": ""},
                    {"name": "Mechanics", "details": ""},
                    {"name": "Groups, Transformations, and Symmetries", "details": ""},
                ]}
            />
        </div>
    );
}

export default Education;