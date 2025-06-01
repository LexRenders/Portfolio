import type { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
    const { title, description, imageUrl, projectLink } = props;

    return (
        <div className="mb-10">
            <Link
                to={projectLink}
                className="block max-w-md transition-transform transform hover:scale-105 h-full">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-blue-950 border border-indigo-950 text-white h-full flex flex-col">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-48 object-cover"
                        onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-300 text-sm">{description}</p>
                        <span className="inline-block text-purple-400 hover:underline font-medium mt-auto">
                            View Project →
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
