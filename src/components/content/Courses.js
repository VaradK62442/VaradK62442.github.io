function Courses({ year, cs, maths }) {
    return (
        <div>
            <br />
            <h3 className="text-1xl font-semibold mb-4 text-center">Year {year}</h3>
            <div className="grid grid-cols-2 gap-x-4 justify-items-center">
                <div className="bg-crimson text-white p-4 rounded-lg shadow-md flex flex-col w-full">
                    <h4 className="mb-4 text-center font-bold self-center">Computer Science:</h4>
                    <div className="flex-grow flex items-center">
                        <ul className="list-disc pl-5">
                            {cs.map((course) => (
                                <li className="relative group" key={course.name}>
                                    {course.link ? (
                                        <a
                                            href={course.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group-hover:underline text-white"
                                        >
                                            {course.name}
                                        </a>
                                    ) : (
                                        <span className="group-hover:underline">{course.name}</span>
                                    )}
                                    {course.details && (
                                        <div className="absolute top-1/2 right-[105%] transform -translate-y-1/2 mr-4 w-64 p-2 bg-purple-600 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                            {course.details}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-crimson text-white p-4 rounded-lg shadow-md flex flex-col w-full">
                    <h4 className="mb-4 text-center font-bold self-center">Mathematics:</h4>
                    <div className="flex-grow flex items-center">
                        <ul className="list-disc pl-5">
                            {maths.map((course) => (
                                <li className="relative group" key={course.name}>
                                    {course.link ? (
                                        <a
                                            href={course.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group-hover:underline text-white"
                                        >
                                            {course.name}
                                        </a>
                                    ) : (
                                        <span className="group-hover:underline">{course.name}</span>
                                    )}
                                    {course.details && (
                                        <div className="absolute top-1/2 left-[100%] transform -translate-y-1/2 ml-6 w-64 p-2 bg-purple-600 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                            {course.details}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;