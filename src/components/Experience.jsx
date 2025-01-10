import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work"); // 'work' or 'education'

  const experiences = {
    work: [
      {
        role: "Senior Frontend Developer",
        company: "Tech Company",
        period: "2022 - Present",
        location: "Bangkok, Thailand",
        description: [
          "Led frontend development team of 5 developers",
          "Implemented new React.js architecture reducing load time by 40%",
          "Developed responsive web applications using React.js and TypeScript",
        ],
        tech: ["React", "TypeScript", "Redux", "Tailwind CSS"],
        color: "blue",
      },
      {
        role: "Frontend Developer",
        company: "Digital Agency",
        period: "2020 - 2022",
        location: "Bangkok, Thailand",
        description: [
          "Built 20+ client websites using modern JavaScript frameworks",
          "Optimized website performance and SEO",
          "Collaborated with UI/UX designers to implement responsive designs",
        ],
        tech: ["JavaScript", "React", "SCSS", "Git"],
        color: "red",
      },
      {
        role: "Junior Web Developer",
        company: "Startup Company",
        period: "2019 - 2020",
        location: "Bangkok, Thailand",
        description: [
          "Developed and maintained company website",
          "Created interactive UI components",
          "Worked with REST APIs and database integration",
        ],
        tech: ["HTML", "CSS", "JavaScript", "PHP"],
        color: "indigo",
      },
    ],
    education: [
      {
        institution: "University Name",
        degree: "Bachelor of Computer Science",
        period: "2015 - 2019",
        location: "Bangkok, Thailand",
        achievements: [
          "Graduated with First Class Honors",
          "Led University Programming Club",
          "Won Best Project Award for Final Year Project",
        ],
        relevantCourses: ["Web Development", "Algorithms", "Database Systems"],
        color: "green",
      },
    ],
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-red-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Experience & Education
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-md p-1">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all 
                ${
                  activeTab === "work"
                    ? "bg-blue-900 text-white shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all 
                ${
                  activeTab === "education"
                    ? "bg-blue-900 text-white shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences[activeTab].map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${item.color}-600 border-4 border-white shadow-sm`}
                ></div>

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow
                  ${index % 2 === 0 ? "md:mr-12" : ""}`}
                >
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3
                        className={`text-xl font-bold text-${item.color}-900`}
                      >
                        {item.role || item.institution}
                      </h3>
                      <p className={`text-${item.color}-600 font-medium`}>
                        {item.company || item.degree}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-600">
                        {item.period}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Description/Achievements */}
                  <ul className="space-y-2 mb-4">
                    {(item.description || item.achievements).map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-2 text-${item.color}-500 mt-1 flex-shrink-0`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies/Courses */}
                  <div className="flex flex-wrap gap-2">
                    {(item.tech || item.relevantCourses).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-${item.color}-100 text-${item.color}-700 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
