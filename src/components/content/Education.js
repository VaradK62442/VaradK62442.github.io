import Courses from "./Courses";
import { cs_courses, maths_courses } from "../config";

function Education() {
  return (
    <div>
      {/* <div className="bg-purple-600 border-4 border-purple-300 border-dashed rounded-md p-4 text-purple-900 text-center w-128">
        <span className="font-bold">Hover</span> over a subject to find out
        more!
      </div>*/}
      <h2 className="text-2xl font-bold mb-4">
        MSc: Mathematics and Foundations of Computer Science (Oxford)
      </h2>
      <div className="flex justify-between items-center">
        <p>
          In this degree I am focusing on formal verification and game theory,
          as well as surrounding topics to support theoretical computer science such as
          category theory, logic, and set theory.
          <br />
        </p>
      </div>
      <Courses year={"5"} cs={cs_courses[5]} maths={maths_courses[5]} />
      <br />
      <h2 className="text-2xl font-bold mb-4">
        BSc (Hons): Computer Science and Mathematics (Glasgow)
      </h2>
      <div className="flex justify-between items-center">
        <p>
          In this degree, I have gained a solid foundation
          in computer science and mathematics, with a focus on algorithms, data
          structures, algebra, and various other theoretical computing and pure
          maths topics.
          <br />
        </p>
      </div>
      <Courses year={"4"} cs={cs_courses[4]} maths={maths_courses[4]} />
      <Courses year={"3"} cs={cs_courses[3]} maths={maths_courses[3]} />
      <Courses year={"2"} cs={cs_courses[2]} maths={maths_courses[2]} />
    </div>
  );
}

export default Education;
