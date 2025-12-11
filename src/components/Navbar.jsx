import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // desktop hover dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // mobile menu toggle
  const [isAggOpen, setIsAggOpen] = useState(false); // mobile Agricultural dropdown
  const [isElecOpen, setIsElecOpen] = useState(false); // mobile Electricity dropdown
  const [isRadOpen, setIsRadOpen] = useState(false); // mobile Radiation dropdown

  const dropdownTimeout = useRef(null);

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
  <img
    src="/images/viber_image_2025-11-28_02-57-25-610.jpg"
    alt="UF6 Logo"
    className="h-15 w-15 rounded-full border-2 border-blue-500" // border example
  />
  <span className="text-xl md:text-2xl font-bold text-blue-900">
    UF<sub>6</sub>
  </span>
</Link>


          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            <li>
              <Link
                to="/"
                className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Location"
                className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors"
              >
                Location
              </Link>
            </li>

            {/* Desktop Dropdowns */}
            {/* Agricultural */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('agricultural')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Agricultural
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === 'agricultural' ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'agricultural' && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] py-2 border border-gray-100">
                  <Link to="/agriculture/data-center" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Hakka</Link>
                  <Link to="/agriculture/farms" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Falam</Link>
                  <Link to="/agriculture/thantlang" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Thantlang</Link>
                  <Link to="/agriculture/tedim" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Tedim</Link>
                  <Link to="/agriculture/kalay" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Kalay</Link>
                </div>
              )}
            </li>

            {/* Electricity */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('electricity')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Electricity
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === 'electricity' ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'electricity' && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] py-2 border border-gray-100">
                  <Link to="/grid" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Grid</Link>
                  <Link to="/data-center" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Data Center</Link>
                </div>
              )}
            </li>

            {/* Radiation */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter('radiation')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1">
                Radiation
                <svg
                  className={`w-4 h-4 transition-transform ${openDropdown === 'radiation' ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'radiation' && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md min-w-[200px] py-2 border border-gray-100">
                  <Link to="/radiation/mutation" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Mutation</Link>
                  <Link to="/radiation/soil-erosion" className="block px-4 py-2 text-blue-900 hover:bg-blue-100">Soil Erosion</Link>
                </div>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                className="px-3 py-2 lg:px-4 rounded-md text-blue-900 font-medium hover:bg-blue-100 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col pt-4 space-y-1">

              <Link to="/" className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/Location" className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Location</Link>

              {/* Agricultural Mobile Dropdown */}
              <div>
                <button
                  className="w-full px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md flex justify-between items-center"
                  onClick={() => setIsAggOpen(!isAggOpen)}
                >
                  Agricultural
                  <span className={`transform transition ${isAggOpen ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {isAggOpen && (
                  <div className="pl-6">
                    <Link to="/agriculture/data-center" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Hakka</Link>
                    <Link to="/agriculture/farms" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Falam</Link>
                    <Link to="/agriculture/thantlang" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Thantlang</Link>
                    <Link to="/agriculture/tedim" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Tedim</Link>
                    <Link to="/agriculture/operators" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Kalay</Link>
                  </div>
                )}
              </div>

              {/* Electricity Mobile Dropdown */}
              <div>
                <button
                  className="w-full px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md flex justify-between items-center"
                  onClick={() => setIsElecOpen(!isElecOpen)}
                >
                  Electricity
                  <span className={`transform transition ${isElecOpen ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {isElecOpen && (
                  <div className="pl-6">
                    <Link to="/grid" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Grid</Link>
                    <Link to="/data-center" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Data Center</Link>
                  </div>
                )}
              </div>

              {/* Radiation Mobile Dropdown */}
              <div>
                <button
                  className="w-full px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md flex justify-between items-center"
                  onClick={() => setIsRadOpen(!isRadOpen)}
                >
                  Radiation
                  <span className={`transform transition ${isRadOpen ? "rotate-180" : ""}`}>⌄</span>
                </button>
                {isRadOpen && (
                  <div className="pl-6">
                    <Link to="/agriculture/mutation" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Mutation</Link>
                    <Link to="/agriculture/soil-erosion" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Soil Erosion</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
