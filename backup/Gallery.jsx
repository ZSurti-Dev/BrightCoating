import {useState, useEffect} from 'react';
import { Filter, Eye, Calendar, User, X } from 'lucide-react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
// import { galleryCategories, galleryImages, getImagesByCategory } from '../data/galleryData';
import {galleryImages, getImagesByCategory } from '../data/galleryData';

function Gallery() {

    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredImages, setFilteredImages] = useState(galleryImages);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Filter images based on selected category
    useEffect(() => {
        setIsLoading(true);
        // Add a small delay for smooth transition effect
        setTimeout(() => {
            setFilteredImages(getImagesByCategory(activeCategory));
            setIsLoading(false);
        }, 200);
    },[activeCategory]);

    // Handle category change
    const handleCategoryChange = (categoryId) => {
        if (categoryId !== activeCategory) {
            setActiveCategory(categoryId);
        }
    };

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
          <section className='pt-24 pb-12 bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-6'>
                Our <span className='bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'>Gallery</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Explore our portfolio of premium powder coating projects. From automotive restoration to industrial applications, 
                see how we transform ordinary surfaces into extraordinary finishes.
              </p>
            </div>
          </section>
    
          {/* Gallery Section */}
          <section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              
                {/* Category Filter */}
                <div className='mb-12'>
                <div className='flex items-center justify-center mb-8'>
                  <Filter className='w-5 h-5 text-teal-600 mr-2' />
                  <h2 className='text-2xl font-semibold text-gray-800'>Filter by Category</h2>
                </div>
                
                <div className='flex flex-wrap justify-center gap-4'>
                  {galleryCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
    
                {/* Active Category Description */}
                <div className='text-center mt-6'>
                  <p className='text-gray-600 max-w-2xl mx-auto'>
                    {galleryCategories.find(cat => cat.id === activeCategory)?.description}
                  </p>
                </div>
              </div>
    
                {/* Gallery Grid */}
                <div div className='relative'>
                {isLoading && (
                  <div className='absolute inset-0 bg-white/80 flex items-center justify-center z-10'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600'></div>
                  </div>
                )}
                
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
                  isLoading ? 'opacity-50' : 'opacity-100'
                }`}>
                  {filteredImages.map((image) => (
                    <div 
                      key={image.id} 
                      className='group cursor-pointer'
                      onClick={() => openImageModal(image)}
                    >
                      <div className='relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
                        {/* Image */}
                        <div className='relative h-64 overflow-hidden'>
                          <img 
                            src={image.image} 
                            alt={image.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            loading='lazy'
                          />
                          {/* Overlay */}
                          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300'></div>
                          
                          {/* Hover Icon */}
                          <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='bg-white/20 backdrop-blur-sm rounded-full p-2'>
                              <Eye className='w-5 h-5 text-white' />
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                          <h3 className='text-xl font-semibold mb-2 group-hover:text-teal-300 transition-colors duration-300'>
                            {image.title}
                          </h3>
                          <p className='text-sm text-gray-200 mb-3 line-clamp-2'>
                            {image.description}
                          </p>
                          <div className='flex items-center justify-between text-xs text-gray-300'>
                            <span className='flex items-center'>
                              <User className='w-3 h-3 mr-1' />
                              {image.client}
                            </span>
                            <span className='flex items-center'>
                              <Calendar className='w-3 h-3 mr-1' />
                              {image.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    
                {/* No Results Message */}
                {filteredImages.length === 0 && !isLoading && (
                  <div className='text-center py-20'>
                    <div className='text-gray-400 mb-4'>
                      <Filter className='w-16 h-16 mx-auto' />
                    </div>
                    <h3 className='text-2xl font-semibold text-gray-600 mb-2'>No Projects Found</h3>
                    <p className='text-gray-500'>Try selecting a different category to view our work.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
    
          {/* Image Modal */}
          {selectedImage && (
            <div className='fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4'>
              <div className='relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden'>
                {/* Close Button */}
                <button
                  onClick={closeImageModal}
                  className='absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200'
                >
                  <X className='w-6 h-6' />
                </button>
                
                {/* Modal Content */}
                <div className='flex flex-col lg:flex-row'>
                  {/* Image */}
                  <div className='lg:w-2/3'>
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.title}
                      className='w-full h-64 lg:h-96 object-cover'
                    />
                  </div>
                  
                  {/* Details */}
                  <div className='lg:w-1/3 p-8'>
                    <div className='mb-4'>
                      <span className='inline-block px-3 py-1 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm rounded-full mb-4'>
                        {galleryCategories.find(cat => cat.id === selectedImage.category)?.name}
                      </span>
                    </div>
                    
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                      {selectedImage.title}
                    </h2>
                    
                    <p className='text-gray-600 mb-6'>
                      {selectedImage.description}
                    </p>
                    
                    <div className='space-y-3'>
                      <div className='flex items-center text-gray-700'>
                        <User className='w-5 h-5 mr-3 text-teal-600' />
                        <div>
                          <p className='font-semibold'>Client</p>
                          <p className='text-sm text-gray-600'>{selectedImage.client}</p>
                        </div>
                      </div>
                      
                      <div className='flex items-center text-gray-700'>
                        <Calendar className='w-5 h-5 mr-3 text-teal-600' />
                        <div>
                          <p className='font-semibold'>Completed</p>
                          <p className='text-sm text-gray-600'>{selectedImage.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
    
          <Footer />
        </div>
  )
}

export default Gallery