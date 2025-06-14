// Gallery data management file with local images
// This approach allows for easy maintenance and updates

// Import all your local images at the top
// Automotive Images
import autoWheel1 from '../assets/gallery/automotive/custom-wheel-1.jpg';
import autoFrame1 from '../assets/gallery/automotive/motorcycle-frame-1.jpg';
import autoBumper1 from '../assets/gallery/automotive/car-bumper-1.jpg';

// Industrial Images
import indMachinery1 from '../assets/gallery/industrial/heavy-machinery-1.jpg';
import indSteel1 from '../assets/gallery/industrial/steel-fabrication-1.jpg';
import indPipeline1 from '../assets/gallery/industrial/pipeline-coating-1.jpg';

// Architectural Images
import archFacade1 from '../assets/gallery/architectural/building-facade-1.jpg';
import archHandrail1 from '../assets/gallery/architectural/handrail-system-1.jpg';
import archWindow1 from '../assets/gallery/architectural/window-frame-1.jpg';

// Furniture Images
import furnOffice1 from '../assets/gallery/furniture/office-furniture-1.jpg';
import furnChair1 from '../assets/gallery/furniture/metal-chairs-1.jpg';
import furnLighting1 from '../assets/gallery/furniture/lighting-fixtures-1.jpg';

export const galleryCategories = [
  {
    id: 'all',
    name: 'All Work',
    description: 'Complete collection of our powder coating projects'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'High-performance coating for vehicles and parts'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Heavy-duty coating for machinery and equipment'
  },
  {
    id: 'architectural',
    name: 'Architectural',
    description: 'Weather-resistant solutions for buildings'
  },
  {
    id: 'furniture',
    name: 'Furniture & Fixtures',
    description: 'Elegant finishes for interior applications'
  }
];

export const galleryImages = [
  // Automotive Category
  {
    id: 1,
    category: 'automotive',
    title: 'Custom Wheel Coating',
    image: autoWheel1, // Using imported local image
    description: 'High-gloss black powder coating on custom alloy wheels',
    client: 'Premium Auto Shop',
    year: '2024'
  },
  {
    id: 2,
    category: 'automotive',
    title: 'Motorcycle Frame Restoration',
    image: autoFrame1, // Using imported local image
    description: 'Complete frame restoration with durable matte finish',
    client: 'Classic Bikes Ltd',
    year: '2024'
  },
  {
    id: 3,
    category: 'automotive',
    title: 'Car Bumper Coating',
    image: autoBumper1, // Using imported local image
    description: 'Textured black coating for enhanced durability',
    client: 'Auto Body Works',
    year: '2023'
  },

  // Industrial Category
  {
    id: 4,
    category: 'industrial',
    title: 'Heavy Machinery Components',
    image: indMachinery1, // Using imported local image
    description: 'Corrosion-resistant coating for industrial equipment',
    client: 'MegaTech Industries',
    year: '2024'
  },
  {
    id: 5,
    category: 'industrial',
    title: 'Steel Fabrication Project',
    image: indSteel1, // Using imported local image
    description: 'Multi-layer coating system for outdoor installations',
    client: 'Steel Works Co.',
    year: '2024'
  },
  {
    id: 6,
    category: 'industrial',
    title: 'Pipeline Coating',
    image: indPipeline1, // Using imported local image
    description: 'Specialized coating for pipeline infrastructure',
    client: 'Industrial Solutions',
    year: '2023'
  },

  // Architectural Category
  {
    id: 7,
    category: 'architectural',
    title: 'Building Facade Elements',
    image: archFacade1, // Using imported local image
    description: 'Weather-resistant coating for exterior building components',
    client: 'Modern Architecture Firm',
    year: '2024'
  },
  {
    id: 8,
    category: 'architectural',
    title: 'Handrail System',
    image: archHandrail1, // Using imported local image
    description: 'Durable coating for high-traffic commercial spaces',
    client: 'City Mall Project',
    year: '2024'
  },
  {
    id: 9,
    category: 'architectural',
    title: 'Window Frame Coating',
    image: archWindow1, // Using imported local image
    description: 'Long-lasting finish for aluminum window frames',
    client: 'Residential Complex',
    year: '2023'
  },

  // Furniture Category
  {
    id: 10,
    category: 'furniture',
    title: 'Office Furniture Set',
    image: furnOffice1, // Using imported local image
    description: 'Smooth finish coating for modern office furniture',
    client: 'Corporate Office Design',
    year: '2024'
  },
  {
    id: 11,
    category: 'furniture',
    title: 'Custom Metal Chairs',
    image: furnChair1, // Using imported local image
    description: 'Elegant powder coating for designer furniture',
    client: 'Boutique Restaurant',
    year: '2024'
  },
  {
    id: 12,
    category: 'furniture',
    title: 'Lighting Fixtures',
    image: furnLighting1, // Using imported local image
    description: 'Decorative coating for interior lighting elements',
    client: 'Hotel Renovation Project',
    year: '2023'
  }
];

// Helper function to get images by category
export const getImagesByCategory = (categoryId) => {
  if (categoryId === 'all') {
    return galleryImages;
  }
  return galleryImages.filter(image => image.category === categoryId);
};

// Helper function to get category info
export const getCategoryInfo = (categoryId) => {
  return galleryCategories.find(category => category.id === categoryId);
};