export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="/login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Start building
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/docs" className="text-gray-300 hover:text-white transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/integrations" className="text-gray-300 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="/affiliates" className="text-gray-300 hover:text-white transition-colors">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/tos" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:hello@createanything.com" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div></div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="https://www.createanything.com/images/homepage-v2/Anything_Logo_White.svg" 
                alt="Anything Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Anything. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}