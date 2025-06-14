import React, { useState } from 'react';
import { ChevronRight, Shield, Clock, Award, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { serviceCategories, whyChooseUsData } from '../data/servicesData';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  // Icon Mapping
  const getIcon = (iconName) => {
    const icons = {
      Shield: <Shield className="w-8 h-8" />,
      Award: <Award className="w-8 h-8" />,
      Clock: <Clock className="w-8 h-8" />,
      Users: <Users className="w-8 h-8" />
    };
    return icons[iconName] || <Shield className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Page Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From automotive restoration to industrial applications, we provide comprehensive powder coating solutions 
            tailored to your specific needs with unmatched quality and durability.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section key={category.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {category.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {category.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="flex items-center bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.images.map((image, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just coat surfaces – we transform them with precision, care, and unmatched expertise. 
              Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => (
              <div key={item.id} className="group text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-teal-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center">
              Get Your Free Quote Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}

export default Services;