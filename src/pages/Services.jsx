import React, {useEffect } from 'react';
import { ChevronRight, Shield, Clock, Award, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { serviceCategories, whyChooseUsData } from '../data/servicesData';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

function Services() {
  // const [activeCategory, setActiveCategory] = useState(0);

  // SEO Meta tags setup
  useEffect(() => {
    document.title = "Professional Coating Services - Powder Coating & PVC Coating | Bright Coating";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", "Professional powder coating, PVC coating, and metal finishing services for automotive, industrial, and architectural applications. Expert coating solutions with 25+ years experience and premium quality results.");
    } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = "Professional powder coating, PVC coating, and metal finishing services for automotive, industrial, and architectural applications. Expert coating solutions with 25+ years experience and premium quality results.";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Keywords for services page
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute("content", "powder coating services, PVC coating, industrial coating, automotive coating, metal finishing, protective coating, coating near me, professional coating, durable coating, corrosion resistant coating");
    } else {
        const meta = document.createElement('meta');
        meta.name = "keywords";
        meta.content = "powder coating services, PVC coating, industrial coating, automotive coating, metal finishing, protective coating, coating near me, professional coating, durable coating, corrosion resistant coating";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }

    return () => {
        document.title = "Bright Coating";
    };
  }, []);

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
      <section className="pt-40 pb-24 bg-gradient-to-br from-gray-50 to-blue-50"  id = "services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Professional Coating <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From automotive restoration to industrial applications, we provide comprehensive powder coating, PVC coating, and metal finishing solutions 
            tailored to your specific needs with unmatched quality and durability.
          </p>
          
          {/* Service Summary for SEO */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Powder Coating</h3>
              <p className="text-sm text-gray-600">Durable, corrosion-resistant finishes for automotive and industrial parts</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">PVC Coating</h3>
              <p className="text-sm text-gray-600">Weather-resistant protective coatings for outdoor applications</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Metal Finishing</h3>
              <p className="text-sm text-gray-600">Complete surface preparation and professional finishing services</p>
            </div>
          </div>
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
                        alt={`${category.title} - ${image.title} coating service example`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
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

            {/* Additional Service Information for SEO */}
            {index === 0 && (
              <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Why Choose Professional Powder Coating?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Superior Durability</h4>
                    <p>Powder coating provides exceptional resistance to corrosion, chemicals, and UV damage, lasting significantly longer than traditional paint.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Environmental Benefits</h4>
                    <p>Our powder coating process produces zero volatile organic compounds (VOCs), making it an environmentally responsible coating choice.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cost-Effective Solution</h4>
                    <p>Long-lasting powder coating reduces maintenance costs and provides excellent value for automotive, industrial, and architectural applications.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Versatile Applications</h4>
                    <p>Perfect for automotive parts, industrial equipment, furniture, architectural components, and decorative items.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Service Process Section for SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Professional Coating Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every coating project follows our proven process to ensure consistent, high-quality results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600  rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Surface Preparation</h3>
              <p className="text-gray-600">Thorough cleaning and preparation of surfaces for optimal coating adhesion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Coating Application</h3>
              <p className="text-gray-600">Professional application using advanced powder coating or PVC coating techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Curing Process</h3>
              <p className="text-gray-600">Controlled curing in our specialized ovens for maximum durability and finish quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Inspection</h3>
              <p className="text-gray-600">Final inspection and quality assurance before delivery to ensure perfect results</p>
            </div>
          </div>
        </div>
      </section>  

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
              Why Choose <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Bright Coating?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just coat surfaces – we transform them with precision, care, and unmatched expertise. 
              Here's what sets our professional coating services apart from the competition.
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
              Get Your Free Coating Quote Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions About Our Coating Services
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about powder coating, PVC coating, and metal finishing services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How long does powder coating last?</h3>
              <p className="text-gray-600">Professional powder coating can last 15-20 years or more with proper care, significantly longer than traditional paint finishes.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What materials can be powder coated?</h3>
              <p className="text-gray-600">We can powder coat most metals including steel, aluminum, cast iron, and stainless steel for automotive, industrial, and decorative applications.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Is powder coating environmentally friendly?</h3>
              <p className="text-gray-600">Yes, powder coating produces zero volatile organic compounds (VOCs) and excess powder can be reclaimed and reused, making it an eco-friendly option.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What's the difference between powder coating and PVC coating?</h3>
              <p className="text-gray-600">Powder coating is applied as a dry powder and cured with heat, while PVC coating provides flexible, weather-resistant protection ideal for outdoor applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}

export default Services;