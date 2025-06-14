import coat5 from '../assets/images/coat5.png';
import coat6 from '../assets/images/coat6.png';
import coat7 from '../assets/images/coat7.png';
import coat8 from '../assets/images/coat8.png';
import coat9 from '../assets/images/coat9.webp';
import coat10 from '../assets/images/coat10.webp';
import pvccoat from '../assets/images/PVC Coating.jpg';
import burner from '../assets/images/burner.jpeg';
import pvccoat2 from '../assets/images/pvc-coating-service-1000x1000.webp';
import img1 from '../assets/images/11.jpeg';
import img2 from '../assets/images/22.jpeg';
import img3 from '../assets/images/33.jpeg';
import img4 from '../assets/images/44.jpeg';





// Gallery data management file
// This approach allows for easy maintenance and updates

// export const galleryCategories = [
//   {
//     id: 'all',
//     name: 'All Work',
//     description: 'Complete collection of our powder coating projects'
//   },
//   {
//     id: 'automotive',
//     name: 'Automotive',
//     description: 'High-performance coating for vehicles and parts'
//   },
//   {
//     id: 'industrial',
//     name: 'Industrial',
//     description: 'Heavy-duty coating for machinery and equipment'
//   },
//   {
//     id: 'architectural',
//     name: 'Architectural',
//     description: 'Weather-resistant solutions for buildings'
//   },
//   {
//     id: 'furniture',
//     name: 'Furniture & Fixtures',
//     description: 'Elegant finishes for interior applications'
//   }
// ];

export const galleryImages = [
  // Automotive Category
  {
    id: 1,
    //category: 'automotive',
    //title: 'Custom Wheel Coating',
    image: coat5,
    description: 'High-gloss black powder coating on custom alloy wheels',
    //client: 'Premium Auto Shop',
    //year: '2024'
  },
  {
    id: 2,
    //category: 'automotive',
    //title: 'Motorcycle Frame Restoration',
    image: coat6,
    description: 'Complete frame restoration with durable matte finish',
    //client: 'Classic Bikes Ltd',
    //year: '2024'
  },
  {
    id: 3,
    //category: 'automotive',
    //title: 'Car Bumper Coating',
    image: coat7,
    description: 'Textured black coating for enhanced durability',
    //client: 'Auto Body Works',
    //year: '2023'
  },

  // Industrial Category
  {
    id: 4,
    //category: 'industrial',
    //title: 'Heavy Machinery Components',
    image: coat8,
    description: 'Corrosion-resistant coating for industrial equipment',
    //client: 'MegaTech Industries',
    //year: '2024'
  },
  {
    id: 5,
    //category: 'industrial',
    //title: 'Steel Fabrication Project',
    image: coat9,
    description: 'Multi-layer coating system for outdoor installations',
    //client: 'Steel Works Co.',
    //year: '2024'
  },
  {
    id: 6,
    //category: 'industrial',
    //title: 'Pipeline Coating',
    image: coat10,
    description: 'Specialized coating for pipeline infrastructure',
    //client: 'Industrial Solutions',
    //year: '2023'
  },

  // Architectural Category
  {
    id: 7,
    //category: 'architectural',
    //title: 'Building Facade Elements',
    image: pvccoat,
    description: 'Weather-resistant coating for exterior building components',
    //client: 'Modern Architecture Firm',
    //year: '2024'
  },
  {
    id: 8,
    //category: 'architectural',
    //title: 'Handrail System',
    image: pvccoat2,
    description: 'Durable coating for high-traffic commercial spaces',
    //client: 'City Mall Project',
    //year: '2024'
  },
  {
    id: 9,
    //category: 'architectural',
    //title: 'Window Frame Coating',
    image: burner,
    description: 'Long-lasting finish for aluminum window frames',
    //client: 'Residential Complex',
    //year: '2023'
  },

  // Furniture Category
  {
    id: 10,
    //category: 'furniture',
    //title: 'Office Furniture Set',
    image: img1,
    description: 'Smooth finish coating for modern office furniture',
    //client: 'Corporate Office Design',
    //year: '2024'
  },
  {
    id: 11,
    //category: 'furniture',
    //title: 'Custom Metal Chairs',
    image: img2,
    description: 'Elegant powder coating for designer furniture',
    //client: 'Boutique Restaurant',
    //year: '2024'
  },
  {
    id: 12,
    //category: 'furniture',
    //title: 'Lighting Fixtures',
    image: img3,
    description: 'Decorative coating for interior lighting elements',
    //client: 'Hotel Renovation Project',
    //year: '2023'
  },
  {
    id: 13,
    //category: 'furniture',
    //title: 'Lighting Fixtures',
    image: img4,
    description: 'Decorative coating for interior lighting elements',
    //client: 'Hotel Renovation Project',
    //year: '2023'
  }
];

// // Helper function to get images by category
// export const getImagesByCategory = (categoryId) => {
//   if (categoryId === 'all') {
//     return galleryImages;
//   }
//   return galleryImages.filter(image => image.category === categoryId);
// };

// // Helper function to get category info
// export const getCategoryInfo = (categoryId) => {
//   return galleryCategories.find(category => category.id === categoryId);
// };