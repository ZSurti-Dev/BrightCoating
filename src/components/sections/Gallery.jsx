import coat3 from '../../assets/images/coat3.jpg';
import coat4 from '../../assets/images/coat4.jpg';
import burner from '../../assets/images/burner.jpeg';
import coat9 from '../../assets/images/coat9.webp';
import pvccoat from '../../assets/images/PVC Coating.jpg';
import coat8 from '../../assets/images/coat8.png';




function Gallery() {
    const galleryImages = [
    {
      id: 1,
      image: coat3,
      title: "Automotive Excellence",
      category: "Automotive"
    },
    {
      id: 2,
      image: coat4,
      title: "Industrial Machinery",
      category: "Industrial"
    },  
    {
      id: 3,
      image: burner,
      title: "Architectural Projects",
      category: "Architecture"
    },
    {
      id: 4,
      image: coat9,
      title: "Custom Furniture",
      category: "Furniture"
    },
     {
      id: 5,
      image: pvccoat,
      title: "PVC Coating Solutions",
      category: "Industrial"
    },
     {
      id: 6,
      image: coat8,
      title: "Custom Furniture",
      category: "Furniture"
    }
];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Work</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Engaging examples of our precision coating work across various industries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <img 
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="text-sm font-medium text-teal-300 mb-1">{item.category}</div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                </div>                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default Gallery
