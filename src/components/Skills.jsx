import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: "💻",
      skills: [
        { name: "React", level: "Advanced", years: 3, icon: "⚛️" },
        { name: "JavaScript", level: "Expert", years: 4, icon: "🟨" },
        { name: "TypeScript", level: "Intermediate", years: 2, icon: "🔷" },
        { name: "HTML/CSS", level: "Expert", years: 4, icon: "🎨" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: "Intermediate", years: 2, icon: "🟩" },
        { name: "Express", level: "Intermediate", years: 2, icon: "🚂" },
        { name: "MongoDB", level: "Basic", years: 1, icon: "🍃" },
      ],
    },
    {
      id: "tools",
      name: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "Advanced", years: 3, icon: "📊" },
        { name: "Docker", level: "Basic", years: 1, icon: "🐳" },
        { name: "AWS", level: "Basic", years: 1, icon: "☁️" },
      ],
    },
  ];

  const getLevelColor = (level) => {
    const colors = {
      Expert: "bg-red-600",
      Advanced: "bg-blue-600",
      Intermediate: "bg-indigo-600",
      Basic: "bg-purple-600",
    };
    return colors[level] || "bg-gray-600";
  };

  const getYearsText = (years) => {
    return `${years} ${years === 1 ? "year" : "years"} experience`;
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 to-red-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Skills & Expertise
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
              ${
                activeCategory === "all"
                  ? "bg-blue-900 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
                ${
                  activeCategory === category.id
                    ? "bg-blue-900 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories
            .filter(
              (category) =>
                activeCategory === "all" || category.id === activeCategory
            )
            .map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-blue-800">
                    {category.name}
                  </h3>
                </div>
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all hover:shadow-xl"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {getYearsText(skill.years)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* Learning Next */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-blue-800 text-center mb-8">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "GraphQL", "React Native"].map((tech, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full text-gray-700 flex items-center gap-2"
              >
                <span className="text-blue-500">🎯</span>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
