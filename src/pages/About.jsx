import { useEffect } from 'react';
import Navbar from '../components/layouts/Navbar';
import CompanyHistory from '../components/sections/CompanyHistory';
import Gallery from '../components/sections/Gallery';
import CoreValues from '../components/sections/CoreValues';
import Team from '../components/sections/Team';
import Footer from '../components/layouts/Footer';

function About() {
  // SEO Meta tags setup
  useEffect(() => {
    document.title = "About Bright Coating - 10+ Years of Professional Coating Services | Our Story & Team";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", "Learn about Bright Coating's 25+ years of excellence in powder coating and PVC coating services. Meet our expert team and discover our commitment to quality industrial and automotive coating solutions.");
    } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = "Learn about Bright Coating's 10+ years of excellence in powder coating and PVC coating services. Meet our expert team and discover our commitment to quality industrial and automotive coating solutions.";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Keywords for about page
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute("content", "about bright coating, coating company history, powder coating experts, industrial coating professionals, coating team, coating experience, metal finishing specialists");
    } else {
        const meta = document.createElement('meta');
        meta.name = "keywords";
        meta.content = "about bright coating, coating company history, powder coating experts, industrial coating professionals, coating team, coating experience, metal finishing specialists";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    return () => {
        document.title = "Bright Coating";
    };
  }, []);

  return (
    <>
    <Navbar />

    {/* Page Header */}
    <section className='pt-40 pb-24 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-6'>
                About <span className='bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'>Bright Coating</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Welcome to Bright Coating, your trusted partner in premium powder coating and PVC coating solutions. With over 10 years of experience in the coating industry, we specialize in delivering high-quality, durable finishes for automotive, industrial, and architectural applications. Our commitment to excellence and customer satisfaction sets us apart as leading coating professionals.
            </p>
        </div>
    </section>

    {/* Company Overview Section for SEO */}
    <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div>
                    <h2 className='text-3xl font-bold text-gray-800 mb-6'>
                        Leading Coating Service Provider
                    </h2>
                    <p className='text-lg text-gray-600 mb-6'>
                        Bright Coating has been at the forefront of the powder coating and PVC coating industry for over two decades. 
                        We've built our reputation on delivering exceptional coating services that combine advanced technology with 
                        traditional craftsmanship.
                    </p>
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>10+ Years</h3>
                            <p className='text-gray-600'>Industry Experience</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>1000+</h3>
                            <p className='text-gray-600'>Projects Completed</p>
                        </div>  
                        <div>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Expert</h3>
                            <p className='text-gray-600'>Coating Professionals</p>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Premium</h3>
                            <p className='text-gray-600'>Quality Standards</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8'>
                    <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Coating Expertise</h3>
                    <ul className='space-y-3 text-gray-600'>
                        <li className='flex items-start'>
                            <span className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                            <span><strong>Powder Coating:</strong> Automotive parts, industrial equipment, architectural components</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                            <span><strong>PVC Coating:</strong> Weather-resistant solutions for outdoor applications</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                            <span><strong>Metal Finishing:</strong> Complete surface preparation and finishing services</span>
                        </li>
                        <li className='flex items-start'>
                            <span className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                            <span><strong>Custom Solutions:</strong> Tailored coating services for specific requirements</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* Company History Section */}
    <CompanyHistory />

    {/* Gallery Section */}
    <Gallery />

    {/* Core Values Section */}
    <CoreValues />

    {/* Our Team Section */}
    <Team />

    {/* Additional SEO Content Section */}
    <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                    Why Choose Bright Coating for Your Projects?
                </h2>
                <p className='text-lg text-gray-600 max-w-4xl mx-auto'>
                    Our decades of experience in the coating industry have taught us that quality isn't just about the final finish—it's about every step of the process.
                </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-8'>
                <div className='text-center'>
                    <div className='bg-white rounded-lg p-6 shadow-lg'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Quality Assurance</h3>
                        <p className='text-gray-600'>Every project undergoes rigorous quality control to ensure superior coating durability and appearance.</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='bg-white rounded-lg p-6 shadow-lg'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Advanced Technology</h3>
                        <p className='text-gray-600'>State-of-the-art coating equipment and techniques for consistent, professional results.</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='bg-white rounded-lg p-6 shadow-lg'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Customer Service</h3>
                        <p className='text-gray-600'>Dedicated support from consultation to completion, ensuring your coating needs are met perfectly.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer section */}
    <Footer />  
    
    </>
  )
}

export default About;