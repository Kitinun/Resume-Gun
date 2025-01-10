// Hero.jsx
const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Profile Image Section */}
          <div className="mb-8 md:mb-0 md:mr-12">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/api/placeholder/400/400"
                  alt="Your Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status Badge */}
              <div className="absolute -bottom-2 -right-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                Available for hire
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-red-400">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
              Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
              Passionate about creating beautiful and functional web
              experiences. Based in Bangkok, Thailand 🇹🇭
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition-all hover:transform hover:scale-105"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg transition-all"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6 justify-center md:justify-start">
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
