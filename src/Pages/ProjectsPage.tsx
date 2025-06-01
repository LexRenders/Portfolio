import ProjectCard from "../Components/ProjectCard";
import { projects } from "../data/projects";

function ProjectsPage() {
    return (
        <div className="text-white w-3/4 mx-auto text-center">
            <h1 className="text-4xl font-bold text-white-800 mb-10 mt-10">My Projects</h1>
            <div className="lg:grid grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectLink={`/project/${project.name}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;