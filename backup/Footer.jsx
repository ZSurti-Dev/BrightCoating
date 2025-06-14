import React from 'react';
import {Link} from 'react-router-dom';
import {Phone, Mail, MapPin, Instagram} from 'lucide-react';


function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        {/* Company Info */}
                        <div className='col-span-1 md:col-span-2'>
                            <div className='flex items-center space-x-3 mb-6'>                            
                                <span className='text-xl font-bold'> Bright Coating </span>
                            </div>
                            <p className='text-gray-400 mb-6 max-w-md'>
                                Leading powder coating specialists delivering exceptional quality and durability for all your surface finishing needs. Transform your surfaces with our professional coating solutions.
                            </p>
                            <div className='flex space-x-4'>
                                <Instagram className='w-6 h-6 text-white hover:text-teal-400 transition-colors' />
                            </div>
                        </div>
    
                        {/* Quick Links */}
                        <div>
                            <h3 className='text-lg font-semibold mb-4'> Quick Links</h3>
                            <ul className='space-y-2'>
                                <li> <Link to="/" className='text-gray-400 hover:text-teal-400 transition-colors'>Home</Link>
                                </li>
                                <li> <Link to="/about" className='text-gray-400 hover:text-teal-400 transition-colors'>About</Link>
                                </li>
                                <li> <Link to="/services" className='text-gray-400 hover:text-teal-400 transition-colors'>Services</Link>
                                </li>
                                <li> <Link to="/gallery" className='text-gray-400 hover:text-teal-400 transition-colors'>Gallery</Link>
                                </li>
                                <li> <Link to="/contact" className='text-gray-400 hover:text-teal-400 transition-colors'>Contact</Link>
                                </li>
                            </ul>
                        </div>
    
                        {/* Contact Info */}
                        <div>
                            <h3 className='text-lg font-semibold mb-4'> Contact Information</h3>
                            <div className='space-y-3'>
                                <div className='flex items-center space-x-3'>
                                    <Phone className='w-5 h-5 text-teal-400' />
                                    <span className='text-gray-400'>+91 97227 28688</span>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <Mail className="w-5 h-5 text-teal-400" />  
                                    <span className="text-gray-400">info@brightcoating.com</span>   
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-teal-400" />
                                    <span className="text-gray-400">D-30/A, Sardar Estate <br /> Vadodara - 390019</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
                        <p className='text-gray-400'>
                            &copy; {new Date().getFullYear()} Bright Coating. All rights reserved. Designed with <span className='text-red-500'>&hearts;</span> by <b> Noon Tech Studio </b> 
                            {/* <br /> */}
                            
                        </p>
                    </div>
                </div>
            </footer>       
  )
}

export default Footer;