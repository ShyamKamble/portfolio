export default function JoinSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join 500,000 Builders
          </h2>
          <p className="text-xl text-gray-600">
            Create with Anything
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vibe Task */}
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-4 flex items-center justify-center">
              <img 
                src="https://www.createanything.com/images/homepage-v2/join-us/vibetask.png" 
                alt="Vibe Task" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fjoin-us%2Fmeimakes.jpg&w=128&q=75" 
                alt="User" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Vibe Task</h3>
                <p className="text-sm text-gray-600">Web App</p>
              </div>
            </div>
          </div>

          {/* Job Search */}
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl mb-4 flex items-center justify-center">
              <img 
                src="https://www.createanything.com/images/homepage-v2/join-us/app.png" 
                alt="Job Search App" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fjoin-us%2Fuser2.png&w=128&q=75" 
                alt="Henry" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Job Search</h3>
                <p className="text-sm text-gray-600">Mobile App</p>
              </div>
            </div>
          </div>

          {/* Pronoia */}
          <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl mb-4 flex items-center justify-center">
              <img 
                src="https://www.createanything.com/images/homepage-v2/join-us/pronoia.png" 
                alt="Pronoia" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fjoin-us%2Fstryde.jpg&w=128&q=75" 
                alt="User" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Pronoia</h3>
                <p className="text-sm text-gray-600">Web App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}