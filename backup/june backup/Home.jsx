import {Link} from 'react-router-dom'
import { ChevronRight, Star} from 'lucide-react';
import Herobg from '../assets/images/Herobg1.jpeg';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import powderCoat from '../assets/images/Powder Coating.webp';
import pvcCoat from '../assets/images/PVC Coating.jpg';

function Home() {   

    const services = [
    {
      id: 1,
      title: "Powder Coating",
      image: powderCoat,
      description: "High-performance coating for automotive parts"
    },
    // {
    //   id: 2,
    //   title: "Industrial Equipment",
    //   image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
    //   description: "Durable coating for heavy machinery"
    // },
    {
      id: 3,
      title: "P.V.C Coating",
      image: pvcCoat,
      description: "Weather-resistant solutions for buildings"
    },
    // {
    //   id: 4,
    //   title: "Furniture Finishing",
    //   image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
    //   description: "Elegant finishes for furniture and fixtures"
    // }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Manufacturing Co.",
      text: "Exceptional quality and service. Our equipment looks brand new and performs better than ever.",
      rating: 5,
      company: "Manufacturing"
    },
    {
      id: 2,
      name: "Sarah Design Studio",
      text: "The attention to detail and finish quality exceeded our expectations. Highly recommended!",
      rating: 5,
      company: "Design"
    },
    {
      id: 3,
      name: "Tech Industries Ltd.",
      text: "Professional service, timely delivery, and outstanding results. Perfect coating solution.",
      rating: 5,
      company: "Technology"
    },
    {
      id: 4 ,
      name: "Tech Industries Ltd.",
      text: "Professional service, timely delivery, and outstanding results. Perfect coating solution.",
      rating: 5,
      company: "Technology"
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
                <div className='absolute inset-0 bg-black/70'></div>
            </div>
            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                    Transforming Surfaces
                    </span>
                    <span className="block text-4xl md:text-6xl mt-2">
                    Elevating Quality
                    </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    Professional powder coating services that deliver exceptional durability, beauty, and performance for all your coating needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
                        <Link to="/services"> View Our Work </Link>                    
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
                    "Excellence in coating is not just about the finish—it's about the lasting protection and beauty that transforms ordinary surfaces into extraordinary statements."
                </blockquote>
                <div className='mt-6 w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full'></div>
            </div>
        </section>

        {/* Services Section */}
        <section id= "services" className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                        Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                         From automotive to architectural applications, we provide comprehensive powder coating solutions tailored to your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {services.map((service) => (
                    <div key={service.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
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
                    to = "/services"
                    className='bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center'
                    > View All Services
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
                       What Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span> 
                    </h2>
                    <p className="text-xl text-gray-600">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
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