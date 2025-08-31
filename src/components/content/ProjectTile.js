function ProjectTile({ project, onClick }) {
    return (
        <button
            className="p-4 bg-crimson rounded-lg shadow-md hover:shadow-lg hover:bg-crimson-600 transition cursor-pointer aspect-square flex flex-col justify-center items-center"
            onClick={() => onClick(project)}
        >
            <h3 className="text-xl font-bold text-center">{project.title}</h3>
            <p className="text-center">{project.shortDescription}</p>
        </button>
    );
}

export default ProjectTile;