export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "As a non technical founder, it has been immensely helpful in validating both design & product but also has helped me save time and money",
      name: "Alisha",
      project: "Building Kiro",
      avatar: "https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Ftestimonials%2Falisha.png&w=256&q=75"
    },
    {
      text: "I was able to go from idea to App Store in 2 months! It's so empowering now that creativity is the limiting factor, rather than tech knowledge.",
      name: "William",
      project: "Building Takeaways",
      avatar: "https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Ftestimonials%2Fwilliam.png&w=256&q=75"
    },
    {
      text: "Honestly I've got no coding or real tech experience and this wouldn't been possible without what you guys have made.",
      name: "Zach",
      project: "Building PicSEO",
      avatar: "https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Ftestimonials%2Fzach.png&w=256&q=75"
    },
    {
      text: "Anything gave my wildest idea a home — now it's real, alive, and launching. No gatekeepers, just builders. I'm all in.",
      name: "Jesse",
      project: "Building TimTalk.xyz",
      avatar: "https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Ftestimonials%2Fjesse.png&w=256&q=75"
    },
    {
      text: "I cannot thank you and the team enough!! I'm amazed at what we can build your app. It's so impressive (and scary) but nonetheless inspiring.",
      name: "Carolina",
      project: "Building ModernAgent",
      avatar: "https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Ftestimonials%2Fcarolina.png&w=256&q=75"
    },
    {
      text: "Anything feels like stepping into a full Lamborghini. It makes building feel like playing a video game, yet it handles real-world tasks with ease.",
      name: "Aidan",
      project: "Building TechTorch",
      avatar: "https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Ftestimonials%2Faidan.png&w=256&q=75"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling testimonials */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll">
            {/* First set */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}