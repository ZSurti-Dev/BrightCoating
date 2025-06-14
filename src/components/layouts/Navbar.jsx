import React, {useState} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import Logo from '../../assets/images/New logo1.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Function to handle Get Quote button click
    const handleGetQuote = () => {
        if (location.pathname === '/contact') {
            // If already on contact page, scroll to form
            const formElement = document.getElementById('contact-form');
            if (formElement) {
                formElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // If on different page, navigate to contact page with hash
            navigate('/contact#contact-form');
        }
        setIsMenuOpen(false); // Close mobile menu if open
    };
    
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    
                    {/* Logo */}
                    <div className='flex items-center space-x-3'>
                        <Link to="/" className='group'>
                            <img 
                                className='h-20 w-auto transition-transform duration-300 group-hover:scale-105' 
                                src={Logo} 
                                alt="Bright Coating logo" 
                            />
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <Link to="/" className='relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group'>
                            Home
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
                        </Link>
                        <Link to="/about" className='relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group'>
                            About
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
                        </Link>
                        <Link to="/services" className='relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group'>
                            Services
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
                        </Link>
                        <Link to="/gallery" className='relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group'>
                            Gallery
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
                        </Link>
                        <Link to="/contact" className='relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group'>
                            Contact
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300'></span>
                        </Link>
                        <button 
                            onClick={handleGetQuote}
                            className='bg-blue-600 text-white px-8 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium transform hover:-translate-y-0.5'
                        >
                            Get Quote
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='text-gray-800 hover:text-teal-600 focus:outline-none focus:text-teal-600 p-2 transition-colors duration-300'
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
                            <Link to="/" className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium'>
                                Home
                            </Link>
                            <Link to="/about" className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium'>
                                About
                            </Link>
                            <Link to="/services" className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium'>
                                Services
                            </Link>
                            <Link to="/gallery" className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium'>
                                Gallery
                            </Link>
                            <Link to="/contact" className='block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium'>
                                Contact
                            </Link>
                            <button 
                                onClick={handleGetQuote}
                                className="w-full text-left bg-blue-600 text-white px-4 py-3 rounded-lg mt-2 hover:bg-blue-700 transition-colors duration-300 font-medium"
                            >
                                Get Quote
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;