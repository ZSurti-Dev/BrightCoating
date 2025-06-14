import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/New logo1.png';



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    
                    {/* Logo file */}
                    <div className='flex items-center space-x-3'>
                        <Link to="/">
                            <img className='h-20 w-auto' src={Logo} alt="Bright Coating logo" />
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-10'>
                        <Link to="/" className='text-gray-700 hover:text-teal-600 font-medium transition-colors'>Home</Link>
                        <Link to="/about" className='text-gray-700 hover:text-teal-600 font-medium transition-colors'>About</Link>
                        <Link to="/services" className='text-gray-700 hover:text-teal-600 font-medium transition-colors'>Services</Link>
                        <Link to="/gallery" className='text-gray-700 hover:text-teal-600 font-medium transition-colors'>Gallery</Link>
                        <Link to="/contact" className='text-gray-700 hover:text-teal-600 font-medium transition-colors'>Contact</Link>
                        <button className='bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                            Get Quote
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='text-gray-800 hover:text-teal-600 focus:outline-none focus:text-teal-600 p-2'
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className='md:hidden bg-white border-t border-gray-100'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            <Link to="/" className='block px-3 py-2 text-gray-700 hover:text-teal-600'>Home</Link>
                            <Link to="/about" className='block px-3 py-2 text-gray-700 hover:text-teal-600'>About</Link>
                            <Link to="/services" className='block px-3 py-2 text-gray-700 hover:text-teal-600'>Services</Link>
                            <Link to="/gallery" className='block px-3 py-2 text-gray-700 hover:text-teal-600'>Gallery</Link>
                            <Link to="/contact" className='block px-3 py-2 text-gray-700 hover:text-teal-600'>Contact</Link>
                            <button className="w-full text-left bg-gradient-to-r from-teal-600 to-blue-600 text-white px-3 py-2 rounded-lg mt-2">
                                Get Quote
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
  ) 
}

export default Navbar;