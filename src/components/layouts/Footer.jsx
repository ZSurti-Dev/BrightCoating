import React from 'react';
import {Link} from 'react-router-dom';
import {Phone, Mail, MapPin, Instagram, ArrowUpRight, Sparkles} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden'>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
      </div>
      
      {/* Main footer content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
          
          {/* Company Brand Section */}
          <div className='lg:col-span-5'>
            <div className='flex items-center space-x-3 mb-8'>
              <div className="relative">
                <Sparkles className="w-8 h-8 text-teal-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
              <span className='text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                Bright Coating
              </span>
            </div>
            
            <p className='text-gray-300 text-lg leading-relaxed mb-8 max-w-md'>
              Leading powder coating specialists delivering exceptional quality and durability. 
              <span className="block mt-2 text-teal-400 font-medium">Transform your surfaces with precision.</span>
            </p>
            
            {/* Social Links */}
            <div className='flex items-center space-x-4'>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gray-800 p-3 rounded-full border border-gray-700 hover:border-teal-400 transition-all duration-300 group-hover:scale-110">
                  <Instagram className='w-5 h-5 text-white group-hover:text-teal-400 transition-colors' />
                </div>
              </div>
              
              {/* Add more social icons as needed */}
              <div className="text-gray-400 text-sm">
                Follow us for updates
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className='lg:col-span-3'>
            <h3 className='text-xl font-bold mb-6 relative'>
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
            </h3>
            <nav className='space-y-4'>
              {[
                { to: "/", label: "Home"},
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" }
              ].map((link, index) => (
                <div key={link.to} className="group">
                  <Link 
                    to={link.to} 
                    className='flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2'
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1' />
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className='lg:col-span-4'>
            <h3 className='text-xl font-bold mb-6 relative'>
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
            </h3>
            
            <div className='space-y-6'>
              <div className='group flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-teal-400/50 hover:bg-gray-800/50 transition-all duration-300'>
                <div className="flex-shrink-0 p-2 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                  <Phone className='w-5 h-5 text-teal-400' />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call us</p>
                  <a href="tel:+919722728688" className='text-white font-medium hover:text-teal-400 transition-colors'>
                    +91 97227 28688
                  </a> <br />
                  <a href="tel:+919722728688" className='text-white font-medium hover:text-teal-400 transition-colors'>
                    +91 90672 20521
                  </a>
                </div>
              </div>
              
              <div className='group flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-teal-400/50 hover:bg-gray-800/50 transition-all duration-300'>
                <div className="flex-shrink-0 p-2 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email us</p>
                  <a href="mailto:info@brightcoating.com" className="text-white font-medium hover:text-teal-400 transition-colors">
                    brightcoating110@gmail.com
                  </a>
                </div>
              </div>
              
              <div className='group flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-teal-400/50 hover:bg-gray-800/50 transition-all duration-300'>
                <div className="flex-shrink-0 p-2 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Visit us</p>
                  <address className="text-white font-medium not-italic leading-relaxed">
                    D-30/A, Sardar Estate<br />
                    Vadodara - 390019
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className='relative mt-16 pt-8'>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-center md:text-left'>
              &copy; {currentYear} Bright Coating. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Designed with</span>
              <span className='text-red-500 animate-pulse text-lg'>&hearts;</span>
              <span>by</span>
              <span className="font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                <a href="https://www.noontechstudio.com/">
                Noon Tech Studio </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;