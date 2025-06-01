import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";

function HomePage() {

    const homeProjects = projects.filter((p) => p.showOnHomePage);

    return (
        <div className="w-3/4 mx-auto text-center text-white">
            <div>
                <img src="/Foto_TM.jpg" alt="Photo Lex" className="mt-5 inline-block h-auto w-60 rounded-2xl" />
            </div>
            <div>
                <h1 className="font-semibold text-4xl mt-10">Hi, i am Lex, passionate software developer</h1>
                <p className="mt-5 text-lg font-semibold">In this online portfolio you can get to know all about me and my projects, feel free to have a look around and dont hesitate to contact me!</p>
                <div>
                    <Link to="/about-me">
                        <button type="button" className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-10">
                            Learn more about me
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-64 text-center p-4">
                <h1 className="text-4xl font-bold text-white-800 mb-4">Internship</h1>
            </div>
            <div className="lg:grid grid-cols-2 p-4">
                <div className="p-4 text-left">
                    <p>
                        At the beginning of february 2025 I started my internship at Kuubix BV. Here, they tasked me with making modules for the open-source ERP Dolibarr.
                    </p>
                    <br />
                    <p>
                        Thanks to the amazing help of Indy and Yentl I managed to learn so much during this period of time and I feel like I cant ever thank them enough.
                    </p>
                    <div className="text-center">
                        <Link to="/internship">
                            <button type="button" className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-15">
                                More info
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="p-4 text-center">
                    <img src="kuubix.png" alt="Kuubix logo" className="rounded-2xl" />
                </div>
            </div>
            <div className="mx-auto w-64 text-center p-4">
                <h1 className="text-4xl font-bold text-white-800 mb-4">Projects</h1>
            </div>
            <div className="lg:grid grid-cols-3">
                {homeProjects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectLink={`/project/${project.name}`}
                    />
                ))}
            </div>
            <div className="text-center">
                <Link to="/projects">
                    <button type="button" className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-15">
                        More projects
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;