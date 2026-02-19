export default function WebMobileSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-medium mb-2">Launch everywhere</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Web & Mobile
          </h2>
          <p className="text-xl text-gray-600">
            Just describe what you want, and Anything builds it. Everything you need built in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Help me build a fitness app
            </h3>
            <p className="text-sm text-blue-600 font-medium mb-4">Launch everywhere</p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Anything on your phone
                </h4>
                <p className="text-gray-600 mb-4">
                  Create iOS and Android apps in minutes.
                </p>
                <p className="text-gray-600">
                  Ship to the App Store in one click.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Anything on the web
                </h4>
                <p className="text-gray-600 mb-4">
                  Create websites and web apps in minutes.
                </p>
                <p className="text-gray-600">
                  Live with a free or custom domain in an instant.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Help me build an ecommerce website
            </h3>
          </div>
        </div>

        {/* Anything Anywhere Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Anything Anywhere
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Build mobile + web apps powered by the same backend.
          </p>
          <p className="text-xl text-gray-600">
            All in the same project.
          </p>
        </div>

        {/* Mobile/Web Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm font-medium text-gray-900">
              Mobile
            </button>
            <button className="px-6 py-2 rounded-full font-medium text-gray-600">
              Web
            </button>
          </div>
        </div>

        {/* Mobile App Preview */}
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-3xl p-8 max-w-sm">
            <img 
              src="https://www.createanything.com/images/homepage-v2/web-and-mobile/pawwalk-mobile.svg" 
              alt="Mobile App Preview" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}