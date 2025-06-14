import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { ChevronRight, Star} from 'lucide-react';
import Herobg from '../assets/images/HeroBG1.jpg';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import powderCoat from '../assets/images/Powder Coating.webp';
import pvcCoat from '../assets/images/PVC Coating.jpg';

function Home() {   
    // SEO Meta tags setup
    useEffect(() => {
        document.title = "Bright Coating - Professional Powder Coating Services | Industrial & Automotive Coating";
        
        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Professional powder coating services for automotive, industrial, and architectural applications. 15+ years experience in durable, high-quality metal finishing and protective coatings.");
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = "Professional powder coating services for automotive, industrial, and architectural applications. 25+ years experience in durable, high-quality metal finishing and protective coatings.";
            document.getElementsByTagName('head')[0].appendChild(meta);
        }

        // Keywords meta tag
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute("content", "powder coating, industrial coating, automotive coating, PVC coating, metal finishing, protective coating, powder coating services, coating near me");
        } else {
            const meta = document.createElement('meta');
            meta.name = "keywords";
            meta.content = "powder coating, industrial coating, automotive coating, PVC coating, metal finishing, protective coating, powder coating services, coating near me";
            document.getElementsByTagName('head')[0].appendChild(meta);
        }

        // Cleanup function to reset title when component unmounts
        return () => {
            document.title = "Bright Coating";
        };
    }, []);

    const services = [
    {
      id: 1,
      title: "Professional Powder Coating Services",
      image: powderCoat,
      description: "High-performance powder coating for automotive parts and industrial equipment",
      alt: "Professional powder coating process on automotive parts"
    },
    {
      id: 3,
      title: "P.V.C Coating Solutions",
      image: pvcCoat,
      description: "Weather-resistant PVC coating solutions for buildings and outdoor applications",
      alt: "PVC coating application for weather-resistant building protection"
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "SHREE WELTEX INDUSTRIES",
      text: "Exceptional quality and service. Our equipment looks brand new and performs better than ever.",
      rating: 5,
      company: "Manufacturing"
    },
    {
      id: 2,
      name: "METRO STAR FURNITURE PVT. LTD.",
      text: "The attention to detail and finish quality exceeded our expectations. Highly recommended!",
      rating: 5,
      company: "Manufacturing"
    },
    {
      id: 3,
      name: "MESURA NIRMAL GAS CONTROLS PVT. LTD.",
      text: "Professional service, timely delivery, and outstanding results. Perfect coating solution.",
      rating: 5,
      company: "Technology"
    },
    {
      id: 4 ,
      name: "JETEX Carburettors Pvt. Ltd.",
      text: "Outstanding powder coating services for our automotive restoration projects. Durable finish that lasts.",
      rating: 5,
      company: "Automotive"
    }
  ];

  return (
    <div className='min-h-screen bg-white'>

        {/* Navbar */}
        <Navbar />      

        {/* Hero Section */}
        <section id="home" className='relative h-screen flex items-center justify-center overflow-hidden'>
            {/* background image */}
            <div className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${Herobg})` }}
            >
                <div className='absolute inset-0 bg-black/60'></div>
            </div>
            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    Professional Coating Services
                    </span>
                    <span className="block text-4xl md:text-6xl mt-2">
                    Superior Quality & Durability
                    </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    Expert powder coating and PVC coating services for automotive, industrial, and architectural applications. 10+ years of delivering exceptional durability and performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
                        <Link to="/services" aria-label="View our coating services and portfolio"> View Our Coating Services </Link>                    
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                <ChevronRight className='w-6 h-6 text-white rotate-90' />
            </div>
        </section>

        {/* Quote Section */}
        <section className='py-16 bg-gradient-to-r from-gray-50 to-blue-50'>
            <div className='max-w-4xl mx-auto text-center px-4'>
                <blockquote className='text-2xl md:text-3xl font-light text-gray-700 italic'>
                    "Excellence in powder coating is not just about the finish—it's about the lasting protection and beauty that transforms ordinary surfaces into extraordinary statements."
                </blockquote>
                <div className='mt-6 w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full'></div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                        Our Professional <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Coating Services</span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                         From automotive powder coating to architectural PVC coating applications, we provide comprehensive coating solutions tailored to your specific industrial needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {services.map((service) => (
                    <div key={service.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <img 
                            src={service.image} 
                            alt={service.alt}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-200">{service.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className='text-center'>
                    <Link 
                    to="/services"
                    className='bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center'
                    aria-label="View all our professional coating services"
                    > View All Coating Services
                    <ChevronRight className='ml-2 w-5 h-5' />
                    </Link>
                </div>
            </div>
        </section>

        {/* Testimonial Section */}
        <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                       What Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Coating Clients Say</span> 
                    </h2>
                    <p className="text-xl text-gray-600">
                        Don't just take our word for it - hear from our satisfied powder coating and industrial coating customers
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4" role="img" aria-label={`${testimonial.rating} star rating`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                        </div>
                        <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                        <div className="border-t pt-4">
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Footer */}
        <Footer />
            
    </div>    
  );
};

export default Home;