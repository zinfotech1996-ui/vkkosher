import React from 'react';
import { Service } from '../../types';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, Icon }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="bg-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-gold" />
      </div>
      <h3 className="font-serif text-xl font-bold text-navy mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;