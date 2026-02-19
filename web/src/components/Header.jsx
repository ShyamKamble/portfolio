export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://www.createanything.com/images/homepage-v2/Anything_Logo.svg" 
              alt="Anything Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="/docs" className="text-gray-700 hover:text-gray-900 font-medium">
              Docs
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
              Blog
            </a>
            <a href="/careers" className="text-gray-700 hover:text-gray-900 font-medium">
              Careers
            </a>
            <a href="/login" className="text-gray-700 hover:text-gray-900 font-medium">
              Login
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="/signup" 
              className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}