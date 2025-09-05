import ParagraphSection from "./ParagraphSection";
import { NavLink } from "react-router-dom";

function About() {
    return (
        <div class="flex flex-col justify-center items-center">
            <ParagraphSection
                paragraph = {
                    "I am a highly organised and motivated student, with a passion in learning new skills and academic topics. " +
                    "I am currently in my fourth year of a BSc (Hons) Computer Science and Mathematics degree at the University of Glasgow, graduating in 2026. " +
                    "I love problem solving and enjoy teaching and leading others."
                }
                image = "pfp.JPG"
                position = "left"
            />
            <NavLink to="/experience#ugr-driverless">
                <ParagraphSection
                    paragraph = {
                        "I was the Head Software Engineer for the University of Glasgow Racing's Driverless sub-team. " +
                        "This involved managing and leading the technical side of the development of driverless software, " +
                        "which we compete with at the Formula Student UK competition, and achieved 3rd place overall at FSUK 2025. " +
                        "Working on and contributing to this project is what sparked my interest in robotics, " +
                        "since we use the Robotics Operating System (ROS2) as our main framework."
                    }
                    image = "ugr.jpeg"
                    position = "right"
                />
            </NavLink>
            <ParagraphSection
                paragraph={
                    "The areas of computing I'm most interested in are automata, theoretical computing, and robotics. " +
                    "I love the theory behind computer systems and enjoyed learning about finite state automata, and formal specification of programming languages. " +
                    "As for maths, I love the pure side - algebra, topology, formal logic, etc."
                }
                image = "turingMachine.png"
                position = "left"
            />
            <NavLink to="/experience#stable-matching-research">
                <ParagraphSection
                    paragraph = {
                        "I have also worked on researching into various Stable Matching problems. This has grown my " +
                        "interest in the theoretical side of computer science, since this research involved designing and analysing algorithms, " +
                        "proving properties about algorithms, implementing and analysing Integer Programming models, and more."
                    }
                    image = "spapIP.png"
                    position = "right"
                />
            </NavLink>
            <NavLink to="/experience#essays">
                <ParagraphSection
                    paragraph = {
                        "I have previously written essays on various topics of interest in mathematics and computing. " +
                        "These essays cover a range of topics, including Ability Score generation in Dungeons and Dragons, " +
                        "methods of approximating pi, and analysing resource distribution in Catan. " +
                        "These essays can be found on my Medium page, linked below."
                    }
                    image = "Mlogo.png"
                    position = "left"
                />
            </NavLink>
        </div>
    );
}

export default About;