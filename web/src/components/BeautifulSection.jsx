export default function BeautifulSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 mb-2">Scroll down</p>
          <p className="text-sm text-gray-500 mb-8">Look Human</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Build Beautiful by default
          </h2>
          <p className="text-xl text-gray-600">
            Yes, AI. No, not slop. Anything is trained to make apps that look and feel great, without 50 prompts.
          </p>
        </div>

        {/* App Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <img 
              src="https://www.createanything.com/images/homepage-v2/beautiful-by-default/luxurydefault.png" 
              alt="Luxury Default" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <img 
              src="https://www.createanything.com/images/homepage-v2/beautiful-by-default/smart-tracker.png" 
              alt="Smart Tracker" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <img 
              src="https://www.createanything.com/images/homepage-v2/beautiful-by-default/mobile-subscription.png" 
              alt="Mobile Subscription" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <img 
              src="https://www.createanything.com/images/homepage-v2/beautiful-by-default/nurvana.png" 
              alt="Nurvana" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Featured Apps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img 
              src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fbeautiful-by-default%2Fnurvana.png&w=750&q=75" 
              alt="Nurvana App" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img 
              src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fbeautiful-by-default%2Fluxurydefault.png&w=750&q=75" 
              alt="Luxury Default App" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex justify-center">
            <img 
              src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fbeautiful-by-default%2Fmobile-subscription.png&w=384&q=75" 
              alt="Mobile Subscription App" 
              className="h-96 w-auto rounded-xl"
            />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg flex justify-center">
            <img 
              src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fbeautiful-by-default%2Fsmart-tracker.png&w=384&q=75" 
              alt="Smart Tracker App" 
              className="h-96 w-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}