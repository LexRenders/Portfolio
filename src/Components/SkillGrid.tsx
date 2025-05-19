import { type FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";

interface Skill {
    name: string;
    level: number;
}

interface SkillGridProps {
    title: string;
    skills: Skill[];
}

const SkillGrid: FunctionComponent<SkillGridProps> = ({ title, skills }) => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.7,
    });

    return (
        <div
            ref={ref}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
            <div className="text-xl font-semibold text-gray-800 dark:text-white">
                {skill.name}
            </div>
            <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${skill.level}%` : "0%" }}
                />
            </div>
            <div className="text-sm text-right mt-1 text-gray-500">{skill.level}%</div>
        </div>
    );
};

export default SkillGrid;
