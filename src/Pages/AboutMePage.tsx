import SkillGrid from "../Components/SkillGrid";

function AboutMePage() {
    return (
        <div className="text-white">
            <div className="mx-auto w-64 text-center p-4">
                <h1 className="text-4xl font-bold text-white-800 mb-4 mt-10">About Lex</h1>
            </div>
            <div className="w-3/4 mx-auto">
                <div className="lg:grid grid-cols-2 p-4">
                    <div className="p-4 text-center">
                        <img src="Strong-viking.jpg" alt="Group picture with lex after obstacle run" className="rounded-2xl" />
                    </div>
                    <div className="p-4 text-left">
                        <p>
                            Hi! my name is Lex, I am 20 years old and I live in Geel.
                            I have a true passion for programming and aim to work on as many intriguing projects as possible.
                            I try to continously challenge myself and learn new skills.
                        </p>
                        <br />
                        <p>
                            What I love most about programming is the ability to turn ideas into real, working solutions.
                            I enjoy the process of debugging, iterating, and seeing things finally click.
                            My goal is to grow into a versatile developer who can contribute to meaningful, innovative projects, whether that's in web, game, or app development.
                        </p>
                        <br />
                        <p>
                            In my free time i like to hang out with my friends, play video games and do obstacle runs.
                        </p>
                    </div>
                </div>
            </div>
            <SkillGrid title="Hard skills" skills={HardSkills} />
            <SkillGrid title="Soft skills" skills={SoftSkills} />
            <SkillGrid title="Languages" skills={Languages} />
        </div>
    );
}

const HardSkills = [
    {
        name: "React",
        level: 70,
    },
    {
        name: "Tailwind CSS",
        level: 70,
    },
    {
        name: "JavaScript",
        level: 85,
    },
    {
        name: "TypeScript",
        level: 85,
    },
    {
        name: "Git",
        level: 80,
    },
    {
        name: "C#",
        level: 60,
    },
    {
        name: "PHP",
        level: 70,
    },
    {
        name: "SQL",
        level: 80,
    },
    {
        name: "MVC",
        level: 75,
    },
];

const SoftSkills = [
    {
        name: "Communication",
        level: 90,
    },
    {
        name: "Problem solving",
        level: 75,
    },
    {
        name: "Critical thinking",
        level: 85,
    },
];

const Languages = [
    {
        name: "English",
        level: 95,
    },
    {
        name: "Dutch",
        level: 95,
    },
    {
        name: "French",
        level: 60,
    },
];

export default AboutMePage;