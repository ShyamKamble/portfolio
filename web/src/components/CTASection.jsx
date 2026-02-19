export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Use Anything to create everything
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Your app starts right here
        </p>

        {/* Input */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Describe your next big idea..."
              className="w-full px-6 py-4 text-lg rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
            />
            <button className="absolute right-2 top-2 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Create
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center">
          <img 
            src="https://www.createanything.com/images/homepage-v2/banner/Property%201=Default.png" 
            alt="Anything Banner" 
            className="max-w-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}