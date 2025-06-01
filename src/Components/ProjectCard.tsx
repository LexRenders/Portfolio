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
        <Link to={projectLink} className="block max-w-sm mb-10 transition-transform transform hover:scale-105">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-blue-950 border border-indigo-950 text-white">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover"
                    onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-300 text-sm">{description}</p>
                    <span className="inline-block mt-4 text-purple-400 hover:underline font-medium">
                        View Project →
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
