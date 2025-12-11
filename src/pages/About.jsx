const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About SNR Agriculture Project
          </h1>
          <p className="text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Pioneering clean energy solutions for sustainable agriculture in Myanmar
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  We are pioneering the use of Small Nuclear Reactor technology to
                  transform agriculture in Chin State, Myanmar. Our project combines
                  cutting-edge nuclear technology with sustainable agricultural practices
                  to create a brighter future for local communities.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  Project Goals
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Provide reliable clean energy for agricultural development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Support local farmers with modern technology
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Create sustainable economic opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Ensure environmental protection
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-semibold">
                      5
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">
                      Promote food security in the region
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop"
                alt="About Our Project"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/1e3a8a/ffffff?text=About+Our+Project';
                }}
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-blue-900 text-white p-4 md:p-6 rounded-lg shadow-lg hidden sm:block">
                <p className="text-2xl md:text-3xl font-bold">2025</p>
                <p className="text-xs md:text-sm text-blue-100">Project Launch</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">50+</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">MW Capacity</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">1000+</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Farms Supported</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">24/7</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Reliable Power</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">0</p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">Carbon Emissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
