import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { galleryImages } from '../data/galleryData';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    // SEO Meta tags setup
    useEffect(() => {
        document.title = "Coating Gallery - Bright Coating | Powder Coating & PVC Coating Portfolio";
        
        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Browse our powder coating and PVC coating project gallery. See quality finishes on automotive parts, industrial equipment, and architectural applications from our 25+ years of coating expertise.");
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = "Browse our powder coating and PVC coating project gallery. See quality finishes on automotive parts, industrial equipment, and architectural applications from our 25+ years of coating expertise.";
            document.getElementsByTagName('head')[0].appendChild(meta);
        }

        // Keywords for gallery page
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute("content", "powder coating gallery, coating portfolio, industrial coating examples, automotive coating projects, PVC coating samples, metal finishing gallery, coating before after");
        } else {
            const meta = document.createElement('meta');
            meta.name = "keywords";
            meta.content = "powder coating gallery, coating portfolio, industrial coating examples, automotive coating projects, PVC coating samples, metal finishing gallery, coating before after";
            document.getElementsByTagName('head')[0].appendChild(meta);
        }

        return () => {
            document.title = "Bright Coating";
        };
    }, []);

    // Open image modal
    const openImageModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // Close image modal
    const closeImageModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className='min-h-screen bg-white'>
            <Navbar />

            {/* Page Header */}
            <section className='pt-40 pb-24 bg-gradient-to-br from-gray-50 to-blue-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-6'>
                        Our Coating <span className='bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'>Project Gallery</span>
                    </h1>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Explore our portfolio of premium powder coating and PVC coating projects. From automotive restoration to industrial applications, 
                        see how we transform ordinary surfaces into extraordinary finishes with our professional coating services.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    
                    {/* Gallery Description for SEO */}
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                            Professional Coating Work Examples
                        </h2>
                        <p className='text-lg text-gray-600 max-w-4xl mx-auto'>
                            Each project in our gallery represents our commitment to quality powder coating and PVC coating services. 
                            From automotive parts to industrial equipment, we deliver durable, attractive finishes that protect and enhance your surfaces.
                        </p>
                    </div>

                    {/* Masonry-style Gallery Grid */}
                    <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
                        {galleryImages.map((image, index) => (
                            <div 
                                key={image.id || index} 
                                className='break-inside-avoid cursor-pointer group'
                                onClick={() => openImageModal(image)}
                            >
                                <div className='relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                                    <img 
                                        src={image} 
                                        alt={`Professional coating project ${index + 1} - Powder coating and PVC coating services by Bright Coating`}
                                        className='w-full h-auto object-cover group-hover:brightness-75 transition-all duration-300'
                                        loading='lazy'
                                    />
                                    
                                    {/* Hover Overlay */}
                                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center'>
                                            <div className='bg-white/20 backdrop-blur-sm rounded-full p-3 mx-auto'>
                                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden="true">
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional SEO Content */}
                    <div className='mt-16 bg-gray-50 rounded-lg p-8'>
                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                            Why Choose Our Coating Services?
                        </h3>
                        <div className='grid md:grid-cols-2 gap-6 text-gray-600'>
                            <div>
                                <h4 className='font-semibold text-gray-800 mb-2'>Powder Coating Excellence</h4>
                                <p>Our powder coating process provides superior durability, corrosion resistance, and aesthetic appeal for automotive, industrial, and architectural applications.</p>
                            </div>
                            <div>
                                <h4 className='font-semibold text-gray-800 mb-2'>PVC Coating Solutions</h4>
                                <p>Weather-resistant PVC coating services that protect and enhance building materials, outdoor equipment, and industrial components.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div className='fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4' role="dialog" aria-modal="true" aria-label="Gallery image preview">
                    <div className='relative w-full h-full flex items-center justify-center'>
                        {/* Close Button */}
                        <button
                            onClick={closeImageModal}
                            className='absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200'
                            aria-label="Close image preview"
                        >
                            <X className='w-6 h-6' />
                        </button>
                        
                        {/* Modal Image */}
                        <img 
                            src={selectedImage} 
                            alt='Professional coating project enlarged view'
                            className='max-w-full max-h-full object-contain rounded-lg'
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Gallery;