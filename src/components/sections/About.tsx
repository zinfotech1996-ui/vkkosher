import React from 'react';
import { Clock, Users, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">About Volove Kashrus</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            A legacy of excellence in VK Kosher certification since 1955.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              {/* At Volove Kashrus, our mission is to uphold the highest standards of Volove Kashrus certification, ensuring that consumers can confidently make choices aligned with Jewish dietary laws. 
              We combine traditional knowledge with modern expertise to serve the global kosher community. */}
              At VK Kosher, our mission is to uphold the highest standards of Kosher certification, we ensure consumers receive everything 
              they expect from VK and can confidently make choices aligned with Jewish dietary laws. We draw upon generations of traditional 
              knowledge and modern expertise to support and serve the global kosher community with clarity, consistency, and care.
            </p>
            
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our History</h3>
            <p className="text-gray-600 mb-6">
            {/* Founded in 1955 by Rabbi Lipa Teitelbaum and rebranded in 1985 by his son, Rabbi N. E. Teitelbaum, Volove Kashrus began as a small local certification agency in Brooklyn. Over the decades, we have grown into a globally recognized authority in Volove Kashrus certification, serving thousands of companies across six continents. */}
            {/* Founded in 1955 by Rabbi Lipa Teitelbaum and rebranded in 1985 by his son, Rabbi N. E. Teitelbaum, 
            Volove Kashrus began as a small local certification agency in Brooklyn. Over the decades, 
            we have grown into a globally respected and trusted authority in VK kosher certification, 
            serving thousands of companies across six continents. */}
           
{/*               Since 1955, 2 places by Rabbi Lipa Teitelbaum and rebranded in 1985 by his son, Rabbi N. E. Teitelbaum, VK Kosher represents the fourth generation in kosher supervision. What began as a small local certification agency in Brooklyn has grown over the decades into a globally respected and trusted authority in VK Kosher certification, serving thousands of companies across six continents. For over 70 years, our family has been dedicated to upholding the highest standards of kashrus, building a legacy of trust and expertise that consumers and businesses rely on. */}

{/*             Update 07-07-2025 by Enrique */}
              Since 1955, Rabbi Lipa Teitelbaum began overseeing kosher certification in two initial 
              locations. In 1985, his son, Rabbi N. E. Teitelbaum, rebranded and expanded the organization, 
              which is now known as VK Kosher. Representing the fourth generation in kosher supervision, 
              VK Kosher has grown from a small Brooklyn-based agency into a globally trusted authority, 
              serving thousands of companies across six continents. For over 70 years, our family has 
              upheld the highest standards of kashrus, building a legacy of trust and expertise that 
              businesses and consumers rely on.
            </p>
            
            <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Approach</h3>
            <p className="text-gray-600">
              We believe in a collaborative approach to VK kosher certification. Our team works closely with manufacturers to implement 
              VK kosher systems that maintain the highest level of integrity while being practical and sustainable for businesses of all sizes.
            </p>

            <br></br><h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Expertise</h3>
            <p className="text-gray-600">
            With years of experience in kosher certification, we understand the intricate requirements businesses need to meet to achieve 
            and maintain the highest kashrus standards. Our knowledgeable team is dedicated to guiding you through the certification process, 
            ensuring that every aspect of your operation aligns with kosher standards. We pride ourselves on our attention to detail and commitment to excellence, helping you confidently achieve the certification you need.
            <br></br> <br></br>
            With over 1,125 massive facilities, we have successfully implemented a smooth, high-end Kashrus protocol. Join us and experience the quality and integrity of our services.
            We pride ourselves on our attention to detail and commitment to excellence, helping you confidently achieve the certification you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative  top-[-20%]">
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">70+ Years</h4>
              <p className="text-gray-300">Four generations of trusted excellence in VK Kosher certification.</p>
              {/* <p className="text-gray-300">Three decades of excellence in VK Kosher certification</p> */}
            </div>
            
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">Global Team</h4>
              <p className="text-gray-300">Expert rabbis and food specialists worldwide</p>
            </div>
            
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">5,000+ Products</h4>
              <p className="text-gray-300">Thousands of certified products globally</p>
            </div>
            
            <div className="bg-navy text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <div className="bg-gold/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">Trusted Authority</h4>
              <p className="text-gray-300">Respected and Trusted by Jewish communities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
