function Courses({ year, cs, maths }) {
    return (
        <div>
            <br />
            <h3 className="text-1xl font-semibold mb-4 text-center">Year {year}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {/* Computer Science List */}
                <div>
                    <h4 className="mb-2 text-center">Computer Science:</h4>
                    <ul className="list-disc pl-5">
                        {cs.map((course) => (
                            <li className="relative group" key={course.name}>
                                {course.name}
                                {course.details && (
                                    <div className="absolute top-1/2 right-[110%] transform -translate-y-1/2 mr-4 w-64 p-2 bg-purple-600 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        {course.details}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mathematics List */}
                <div>
                    <h4 className="mb-2 text-center">Mathematics:</h4>
                    <ul className="list-disc pl-5">
                        {maths.map((course) => (
                            <li className="relative group" key={course.name}>
                                {course.name}
                                {course.details && (
                                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 w-64 p-2 bg-purple-600 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        {course.details}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Courses;