
import {ChevronRight} from 'lucide-react';
import coatingImage from '../../assets/images/about_hero.png';
import {Link} from 'react-router-dom';


function CompanyHistory() {

    const companyHistory = {
    title: "Our Story",
    subtitle: "Building Excellence Since 2015",
    description: "Founded with a vision to revolutionize surface protection, we've grown from a small local workshop to a leading powder coating specialist. Our journey spans over 10 years of innovation, quality craftsmanship, and unwavering commitment to customer satisfaction.",
    highlights: [
      "10+ years of industry experience",
      "Over 1,000 successful projects",
      "State-of-the-art facility with latest technology",
      "Certified professionals and quality standards"
    ],
    image: coatingImage
  };
  return (
    <>
    {/* Company History Section */}
    <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                {/* Content */}
                <div className='space-y-6'>
                    <div>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                            {companyHistory.title}
                        </h2>
                        <h3 className='text-2xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-6'>
                            {companyHistory.subtitle}
                        </h3>
                    </div>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                        {companyHistory.description}
                    </p>

                    <div className='space-y-3'>
                        {companyHistory.highlights.map((highlight, index) => (
                            <div key={index} className='flex items-center space-x-3'>
                                <div className='w-2 h-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full'></div>
                                <span className="text-gray-700">{highlight}</span>
                            </div>
                        ))}
                    </div>
                    <Link to='/services'>
                    <a
                    href='#services'
                    className='inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    >
                        Explore Our Services
                        <ChevronRight className='ml-2 h-5 w-5' />
                    </a>
                    </Link>
                </div>

                {/* Image */}
                    <div className='relative'>
                    <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                        <img 
                        src={companyHistory.image}
                        alt="Company facility"
                        className='w-full h-96 object-cover shadow-xl'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                    </div>
                    {/* Floating States */}
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-l-4 border-teal-600">
                        <div className="text-3xl font-bold text-gray-800">10+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                    </div>

                    <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-600">
                        <div className="text-3xl font-bold text-gray-800">1K+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    </>
  )
}

export default CompanyHistory;