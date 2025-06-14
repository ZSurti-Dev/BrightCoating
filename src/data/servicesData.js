// src/data/servicesData.js
import Automotive from '../assets/images/Automotive wheel.jpg';
import Chassis from '../assets/images/Chassis paint.jpg';
import Engineparts from '../assets/images/Engineparts.jpg';
import industrialequipment from '../assets/images/industrial instrument.webp';
import factoryequipment from '../assets/images/factoryequipment.jpg';
import steelstructure from '../assets/images/steelstructurecoating.jpg';
import archi from '../assets/images/Archi.jpg';;
import ExteriorElemens from '../assets/images/Exeterior element coating.jpg';;
import ModernArchitecture from '../assets/images/mordernArchi.jpg';
import furniture1 from '../assets/images/furniture1.webp';
import furniture2 from '../assets/images/furniture2.png';
import furniture3 from '../assets/images/furniture3.jpg';

export const serviceCategories = [
  {
    id: 1,
    title: "Automotive Coating",
    description: "Premium powder coating solutions for automotive parts, wheels, frames, and restoration projects with exceptional durability and finish quality.",
    images: [
      {
        url: Automotive,
        title: "Automotive Wheels",
        description: "Custom wheel coating"
      },
      {
        url: Engineparts,
        title: "Car Parts",
        description: "Engine components"
      },
      {
        url: Chassis,
        title: "Chassis Coating",
        description: "Frame protection"
      }
    ],
    features: ["UV Resistant", "Corrosion Protection", "Custom Colors", "High Gloss Finish"]
  },
  {
    id: 2,
    title: "Industrial Equipment",
    description: "Heavy-duty coating solutions for industrial machinery, equipment, and infrastructure components that withstand harsh operating conditions.",
    images: [
      {
        url: industrialequipment,
        title: "Heavy Machinery",
        description: "Industrial equipment coating"
      },
      {
        url: factoryequipment,
        title: "Factory Equipment",
        description: "Manufacturing tools"
      },
      {
        url: steelstructure,
        title: "Steel Structures",
        description: "Structural coating"
      }
    ],
    features: ["Chemical Resistance", "Extreme Durability", "Anti-Corrosive", "Temperature Stable"]
  },
  {
    id: 3,
    title: "Architectural Coating",
    description: "Weather-resistant architectural coatings for building facades, railings, gates, and outdoor structures with long-lasting protection.",
    images: [
      {
        url: archi,
        title: "Building Facades",
        description: "Architectural elements"
      },
      {
        url: ModernArchitecture,
        title: "Modern Architecture",
        description: "Contemporary finishes"
      },
      {
        url: ExteriorElemens,
        title: "Exterior Elements",
        description: "Weather protection"
      }
    ],
    features: ["Weather Resistant", "UV Protection", "Fade Resistant", "Low Maintenance"]
  },
  {
    id: 4,
    title: "Furniture & Fixtures",
    description: "Elegant powder coating finishes for furniture, lighting fixtures, decorative items, and custom metalwork with superior aesthetics.",
    images: [
      {
        url: furniture1,
        title: "Modern Furniture",
        description: "Contemporary finishes"
      },
      {
        url: furniture2,
        title: "Lighting Fixtures",
        description: "Decorative coatings"
      },
      {
        url: furniture3,
        title: "Custom Metalwork",
        description: "Artistic finishes"
      }
    ],
    features: ["Smooth Finish", "Color Variety", "Scratch Resistant", "Easy Cleaning"]
  },
  // {
  //   id: 5,
  //   title: "Marine & Outdoor",
  //   description: "Specialized coatings for marine equipment, outdoor furniture, and recreational vehicles designed to withstand extreme environments.",
  //   images: [
  //     {
  //       url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop&crop=center",
  //       title: "Marine Equipment",
  //       description: "Saltwater resistant"
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&crop=center",
  //       title: "Outdoor Furniture",
  //       description: "All-weather protection"
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop&crop=center",
  //       title: "Recreation Vehicles",
  //       description: "Adventure ready"
  //     }
  //   ],
  //   features: ["Salt Corrosion Resistant", "Extreme Weather", "Marine Grade", "Long Lasting"]
  // }
];

export const whyChooseUsData = [
  {
    id: 1,
    iconName: "Shield",
    title: "Superior Protection",
    description: "Our advanced powder coating process provides unmatched protection against corrosion, scratches, and environmental damage, ensuring your investment lasts for years."
  },
  {
    id: 2,
    iconName: "Award",
    title: "Quality Excellence",
    description: "With over 15 years of experience and state-of-the-art equipment, we deliver consistently superior results that exceed industry standards and customer expectations."
  },
  {
    id: 3,
    iconName: "Clock",
    title: "Fast Turnaround",
    description: "Our efficient processes and dedicated team ensure quick project completion without compromising quality, getting your items back to you when you need them."
  },
  {
    id: 4,
    iconName: "Users",
    title: "Expert Team",
    description: "Our certified professionals bring expertise and attention to detail to every project, from preparation to final inspection, ensuring flawless results every time."
  }
];

// Helper function to get category by ID
export const getCategoryById = (id) => {
  return serviceCategories.find(category => category.id === id);
};

// Helper function to get categories by feature
export const getCategoriesByFeature = (feature) => {
  return serviceCategories.filter(category => 
    category.features.includes(feature)
  );
};

// Helper function to get all features
export const getAllFeatures = () => {
  const allFeatures = serviceCategories.flatMap(category => category.features);
  return [...new Set(allFeatures)]; // Remove duplicates
};