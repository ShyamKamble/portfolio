export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Anything codes for you
          </h2>
          <p className="text-xl text-gray-600">
            So you can build projects without looking at the code once.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Make a playful habit tracker app
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Make updates in English
              </p>
              <p className="text-gray-600">
                Anything turns your prompts into code, explores your app, and
                makes updates fast.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://www.createanything.com/images/homepage-v2/webSearch.svg"
                alt="Web Search"
                className="w-12 h-12"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Search the web</h4>
                <p className="text-gray-600">
                  Find API docs, references and examples so you can make
                  anything.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Make a beautiful homepage for my app
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Intelligence, simplified
              </p>
              <p className="text-gray-600">
                Anything reasons and plans actions using a mix of frontier and
                custom AI models.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div className="flex items-center space-x-4">
              <img
                src="https://www.createanything.com/images/homepage-v2/assetgen.png"
                alt="Asset Generation"
                className="w-12 h-12"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Generate images</h4>
                <p className="text-gray-600">
                  Makes the perfect asset to make your app shine.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                What errors?
              </h4>
              <p className="text-gray-600">
                Anything automatically detects and fixes errors on its own. So
                you stay in flow.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Build large
              </h4>
              <p className="text-gray-600">
                Anything automatically refactors your project so you can build
                projects &gt;100k lines of code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
