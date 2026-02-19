export default function AllInOneSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All-In-One
          </h2>
          <p className="text-xl text-gray-600">
            Just describe what you want, and Anything builds it. Everything you need built in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Design */}
          <div className="text-center">
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/builder.svg" 
              alt="Design" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
            <p className="text-gray-600">Make the perfect UX in seconds.</p>
          </div>

          {/* Database */}
          <div className="text-center">
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/database-dashboard.png" 
              alt="Database" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Database</h3>
            <p className="text-gray-600">
              All apps come with an instant dev and production Postgres database. No set up needed and 1GB+ free per app.
            </p>
          </div>

          {/* Payments */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-xl p-4 mb-4 mx-auto w-fit">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 bg-white rounded-lg p-2">
                  <img 
                    src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fall-in-one%2Fstripe.png&w=256&q=75" 
                    alt="Stripe" 
                    className="w-6 h-6"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium">You received a new payment of $14.99</p>
                    <p className="text-xs text-gray-500">now</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-lg p-2">
                  <img 
                    src="https://www.createanything.com/_next/image?url=%2Fimages%2Fhomepage-v2%2Fall-in-one%2Fstripe.png&w=256&q=75" 
                    alt="Stripe" 
                    className="w-6 h-6"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium">You received a new payment of $23.99</p>
                    <p className="text-xs text-gray-500">5m ago</p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Payments</h3>
            <p className="text-gray-600">
              Collect subscription or one time payments in your app in minutes with Stripe. No keys or set up required.
            </p>
          </div>

          {/* Authentication */}
          <div className="text-center">
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/authentication.svg" 
              alt="Authentication" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Authentication</h3>
            <p className="text-gray-600">
              Let people securely sign up with email/password, Google, FB, X, and more. Save weeks getting it right.
            </p>
          </div>

          {/* AI */}
          <div className="text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <img 
                src="https://www.createanything.com/images/homepage-v2/all-in-one/claude.svg" 
                alt="Claude" 
                className="w-8 h-8"
              />
              <img 
                src="https://www.createanything.com/images/homepage-v2/all-in-one/gpt.svg" 
                alt="GPT" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI</h3>
            <p className="text-gray-600">
              Add GPT-4o, o3, Claude Sonnet 4, Gemini 2.5, and all the latest AI models in 1 prompt. No keys needed.
            </p>
          </div>

          {/* Integrations */}
          <div className="text-center">
            <div className="flex justify-center space-x-2 mb-4">
              <img 
                src="https://www.createanything.com/images/homepage-v2/all-in-one/translate.svg" 
                alt="Translate" 
                className="w-8 h-8"
              />
              <img 
                src="https://www.createanything.com/images/homepage-v2/all-in-one/maps.svg" 
                alt="Maps" 
                className="w-8 h-8"
              />
              <img 
                src="https://www.createanything.com/images/homepage-v2/all-in-one/google.svg" 
                alt="Google" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Integrations</h3>
            <p className="text-gray-600">
              100s of useful APIs and libraries, from Resend to Zapier to Google Maps, built in. No keys or set up needed.
            </p>
          </div>
        </div>

        {/* Storage Section */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6 max-w-2xl mx-auto">
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/storage/hills.png" 
              alt="Hills" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/storage/globe.png" 
              alt="Globe" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/storage/water.png" 
              alt="Water" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/storage/kite.png" 
              alt="Kite" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/storage/flower.png" 
              alt="Flower" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src="https://www.createanything.com/images/homepage-v2/all-in-one/storage/pond.png" 
              alt="Pond" 
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Storage</h3>
          <p className="text-gray-600">
            Let people upload images, video, audio, pdfs, and more to your app. No config need.
          </p>
        </div>
      </div>
    </section>
  );
}