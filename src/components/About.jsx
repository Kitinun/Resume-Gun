const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Satisfied Clients", value: "30+" },
    { label: "Technologies", value: "15+" },
  ];

  const interests = [
    { icon: "🚀", name: "New Technologies" },
    { icon: "🎨", name: "UI/UX Design" },
    { icon: "📱", name: "Mobile Development" },
    { icon: "🌐", name: "Web Performance" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-red-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I'm a passionate Frontend Developer with expertise in building
                modern web applications. My journey in web development started 5
                years ago, and I've been in love with creating beautiful user
                experiences ever since.
              </p>
              <p className="leading-relaxed">
                I specialize in React.js and modern JavaScript, with a strong
                focus on writing clean, maintainable code. I believe in
                continuous learning and staying up-to-date with the latest web
                technologies.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  Let's work together
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-6">
                What Interests Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-2xl mr-3">{interest.icon}</span>
                    <span className="text-gray-700">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education/Certification */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-6">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-medium text-gray-800">
                    Bachelor of Computer Science
                  </div>
                  <div className="text-sm text-gray-600">
                    University Name, 2015-2019
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-medium text-gray-800">
                    React Developer Certification
                  </div>
                  <div className="text-sm text-gray-600">
                    Meta (Facebook), 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
