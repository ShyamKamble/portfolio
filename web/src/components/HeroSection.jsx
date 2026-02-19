export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.createanything.com/images/homepage-v2/anything-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Product Hunt Banner */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
        <a 
          href="https://www.producthunt.com/products/anything-2" 
          className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          We're live on Product Hunt!
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://www.createanything.com/images/homepage-v2/Anything_Logo_White.svg" 
            alt="Anything Logo" 
            className="h-16 w-auto mx-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Turn your words into mobile apps, sites, tools, and products - built with code. Add GPT-5 and 40+ integrations in an instant.
        </h1>

        {/* Input */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Describe your next big idea..."
              className="w-full px-6 py-4 text-lg rounded-full border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="absolute right-2 top-2 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}