import ProjectCard from "../Components/ProjectCard";
import { projects } from "../data/projects";

function InternshipPage() {

    const internshipProjects = projects.filter((p) => p.showOnInternshipPage);

    return (
        <div className="text-white w-3/4 mx-auto text-left">
            <div>
                <div className="text-center">
                    <img src="/kuubix.png" alt="Logo Kuubix" className="mt-5 mb-10 inline-block" />
                </div>
                <p>I got the opportunity to do my internship at Kuubix BV.
                    Kuubix was founded by Indy Hendrickx and Goele Vermeeren in 2020. Goele has her own companies: “Master Interior”, Vitra Partner Store and Espoo.
                    Kuubix is located in Antwerp, Dorpelei 16 2640 Mortsel. However, I did my workplace learning in a pop-up office within Master Interior (Steenweg op Diest 111 2300 Turnhout).
                    Indy's brother, Yentl Hendrickx is co-owner of Kuubix. Together they are the heart of the company.
                    Kuubix provides customized software for companies that allows them to improve their business processes.
                    They also have a number of other services such as consulting, VR, Hardware, IoT and they also provide training.

                </p>
                <br />
                <p>I worked with my two colleagues who were also doing their internship at Kuubix, as well as Indy and Yentl, in the small but cozy pop-up office.
                    Since the company only consists of a team of two, I did not have my own department and I felt like I was part of this heart of the company.
                    What I really appreciated, was that both Indy and Yentl were very familiar with almost all the programming languages I was using.
                    As a result, I could always count on good help whenever I needed it.
                    Thanks to the their amazing help I managed to learn so much during this period and I feel like I cant ever thank them enough.
                    If you are interested, you can find the projects that I made during my internship below.</p>
                <br />
            </div>
            <div className="grid grid-cols-3">
                {internshipProjects.map((project) => (
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

export default InternshipPage;