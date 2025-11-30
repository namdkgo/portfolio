import React from 'react';

function Skills() {
    const skillCategories = [
        {
            icon: '💻',
            name: 'Languages',
            skills: ['JavaScript', 'Python', 'Java', 'C#']
        },
        {
            icon: '🎨',
            name: 'Frontend',
            skills: ['React', 'React Query', 'Tailwind CSS', 'Chart.js', 'Vite']
        },
        {
            icon: '⚙️',
            name: 'Backend',
            skills: ['Spring Boot', 'FastAPI', 'Gradle']
        },
        {
            icon: '🧠',
            name: 'AI / ML Pipeline',
            skills: ['LangChain', 'ChromaDB', 'OpenAI GPT API', 'Vector Embedding', 'PDF Parsing (PyPDF)']
        },
        {
            icon: '🗄️',
            name: 'Database',
            skills: ['MariaDB', 'MySQL', 'Firebase']
        },
        {
            icon: '🎮',
            name: 'Game / 3D',
            skills: ['Unity']
        },
        {
            icon: '🚀',
            name: 'DevOps / Tools',
            skills: ['AWS ECS', 'Docker', 'Git', 'Jira']
        }
    ];

    return (
        <section
            id="skills"
            className="w-full flex items-center justify-center snap-start"
            style={{
                minHeight: '88vh',
                height: '88vh',
                scrollSnapAlign: 'start',
                backgroundColor: '#0A1F33'
            }}
        >
            <div className="w-full max-w-6xl px-6 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-7xl font-bold text-center underline decoration-4 underline-offset-8 text-[#FFFFFF]">
                        SKILLS
                    </h2>
                </div>

                <div className="bg-white rounded-3xl p-12 shadow-lg">
                    <div className="space-y-8">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="flex items-start gap-8">
                                <div className="flex items-center gap-4 min-w-max">
                                    <span className="text-4xl">{category.icon}</span>
                                    <h3 className="text-2xl font-bold text-[#222831]">{category.name}</h3>
                                </div>

                                <div className="flex flex-wrap gap-3 items-center">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-4 py-2 rounded-full text-white font-semibold text-sm whitespace-nowrap ${category.name === 'Language'
                                                    ? skillIndex === 0
                                                        ? 'bg-blue-500'
                                                        : skillIndex === 1
                                                            ? 'bg-yellow-500'
                                                            : skillIndex === 2
                                                                ? 'bg-blue-700'
                                                                : skillIndex === 3
                                                                    ? 'bg-red-600'
                                                                    : 'bg-purple-600'
                                                    : category.name === 'Frontend'
                                                        ? skillIndex === 0
                                                            ? 'bg-black'
                                                            : skillIndex === 1
                                                                ? 'bg-blue-600'
                                                                : skillIndex === 2
                                                                    ? 'bg-blue-400'
                                                                    : skillIndex === 3
                                                                        ? 'bg-red-500'
                                                                        : skillIndex === 4
                                                                            ? 'bg-purple-700'
                                                                            : skillIndex === 5
                                                                                ? 'bg-black'
                                                                                : skillIndex === 6
                                                                                    ? 'bg-purple-500'
                                                                                    : skillIndex === 7
                                                                                        ? 'bg-cyan-400'
                                                                                        : skillIndex === 8
                                                                                            ? 'bg-pink-500'
                                                                                            : 'bg-blue-500'
                                                        : category.name === 'Backend'
                                                            ? skillIndex === 0
                                                                ? 'bg-green-700'
                                                                : skillIndex === 1
                                                                    ? 'bg-green-500'
                                                                    : skillIndex === 2
                                                                        ? 'bg-blue-900'
                                                                        : skillIndex === 3
                                                                            ? 'bg-orange-400'
                                                                            : 'bg-teal-500'
                                                            : skillIndex === 0
                                                                ? 'bg-blue-500'
                                                                : skillIndex === 1
                                                                    ? 'bg-orange-500'
                                                                    : skillIndex === 2
                                                                        ? 'bg-blue-900'
                                                                        : skillIndex === 3
                                                                            ? 'bg-red-600'
                                                                            : skillIndex === 4
                                                                                ? 'bg-teal-500'
                                                                                : 'bg-black'
                                                }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
