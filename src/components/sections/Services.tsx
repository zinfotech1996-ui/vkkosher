import React from 'react';
import { ClipboardCheck, Search, Award, Book, Globe, Building, CookingPot, Tag } from 'lucide-react';
import { Service } from '../../types';
import ServiceCard from '../ui/ServiceCard';

const services: Service[] = [
  {
    id: '1',
    title: 'Product Certification',
    description: 'Comprehensive evaluation and certification of food products to ensure they meet kosher standards.',
    icon: 'ClipboardCheck'
  },
  {
    id: '2',
    title: 'Facility Inspection',
    description: 'Thorough inspection of manufacturing facilities to verify compliance with kosher requirements.',
    icon: 'Building'
  },
  {
    id: '3',
    title: 'Ingredient Verification',
    description: 'Detailed analysis of ingredients to confirm they meet the strict standards of kosher law.',
    icon: 'Search'
  },
  // {
  //   id: '4',
  //   title: 'International Certification',
  //   description: 'Global certification services to help companies meet kosher standards worldwide.',
  //   icon: 'Globe'
  // },
  {
    id: '5',
    title: 'Restaurant Certification',
    description: 'Specialized certification for restaurants and food service establishments.',
    icon: 'CookingPot'
  },
  // {
  //   id: '6',
  //   title: 'Kosher Training',
  //   description: 'Educational programs for companies seeking to understand and implement kosher practices.',
  //   icon: 'Book'
  // }
];

const iconMap = {
  ClipboardCheck: ClipboardCheck,
  Search: Search,
  Award: Award,
  Book: Book,
  Globe: Globe,
  Building: Building,
  CookingPot: CookingPot,
  Tag: Tag
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Our Certification Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {/* We provide comprehensive kosher certification services to ensure products meet the highest standards of kosher law. */}
            We provide comprehensive VK Kosher certification services to ensure products meet the highest standards of kosher law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              Icon={iconMap[service.icon as keyof typeof iconMap]} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-navy text-white font-bold py-3 px-8 rounded-md transition-transform hover:scale-105"
          >
            Request Certification
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;