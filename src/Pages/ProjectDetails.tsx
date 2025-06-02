import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";


const ProjectDetails = () => {
    const { name } = useParams<{ name: string }>();
    const project = projects.find((p) => p.name === name);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const navigate = useNavigate();
    const openImage = (src: string) => setSelectedImage(src);
    const closeImage = () => setSelectedImage(null);

    if (!project) return <div className="text-white p-8">Project not found.</div>;

    return (
        <div className="p-8 text-white max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-300 mb-6">{project.description}</p>

            <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
            <ul className="list-disc ml-6 text-gray-400 mb-6">
                {project.languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                ))}
            </ul>

            {project.gitHubLink !== "" ?
                <div>
                    <p className="text-gray-300 whitespace-pre-line"><b>View this project on Github: </b><a href={project.gitHubLink} target="blank" className="text-purple-500">{project.title}</a></p>
                </div> : ""}

            <div className="mb-10">
                <h2 className="text-xl font-semibold mt-8 mb-2">Explanation of project</h2>
                <p className="text-gray-300 whitespace-pre-line">{project.explanation}</p>
            </div>
            <h2 className="text-xl font-semibold mb-2">Screenshots (click to enlarge)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {project.screenshots.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Screenshot ${index + 1}`}
                        className="rounded-lg border border-[#2e2e5a] cursor-zoom-in transition duration-200 hover:opacity-90 w-full h-60 object-cover"
                        onClick={() => openImage(src)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeImage}
                >
                    <img
                        src={selectedImage}
                        alt="Enlarged Screenshot"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-xl border border-black"
                    />
                </div>
            )}
            <div className="w-full flex justify-center mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="cursor-pointer text-2xl text-purple-500 hover:underline flex items-center gap-2"
                >
                    ←Close Project
                </button>
            </div>
        </div>
    );
};

export default ProjectDetails;
