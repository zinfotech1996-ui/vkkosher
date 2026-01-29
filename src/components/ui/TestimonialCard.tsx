import React from 'react';
import { Testimonial } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mx-4">
      <div className="flex justify-center mb-6">
        <Quote className="h-10 w-10 text-gold/20" />
      </div>
      
      <p className="text-gray-700 text-lg mb-6 text-center italic">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center justify-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.author} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gold"
        />
        <div>
          <h4 className="font-bold text-navy">{testimonial.author}</h4>
          <p className="text-gray-600">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;