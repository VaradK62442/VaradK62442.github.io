import Courses from "./Courses";
import { cs_courses, maths_courses  } from "../config";

function Education() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">BSc (Hons): Computer Science and Mathematics</h2>
            <p>
                In the past three years of my degree, I have gained a solid foundation in computer science and mathematics,
                with a focus on algorithms, data structures, algebra, and various other theoretical computing and pure maths topics.<br />
                Hover over a subject to find out more.<br />
            </p>
            <Courses
                year={"4 (in progress)"}
                cs={cs_courses[4]}
                maths={maths_courses[4]}
            />
            <Courses
                year={"3"}
                cs={cs_courses[3]}
                maths={maths_courses[3]}
            />
            <Courses
                year={"2"}
                cs={cs_courses[2]}
                maths={maths_courses[2]}
            />
        </div>
    );
}

export default Education;