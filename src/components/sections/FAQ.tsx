import React, { useState } from 'react';
import { FAQ } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData: FAQ[] = [
  {
    question: "What does kosher certification involve?",
    answer: "Kosher certification involves a complete approval of ingredients, along with a detailed inspection and evaluation of production processes and facilities to ensure compliance with Jewish dietary laws. VK provides the most trusted method, including the initial assessment, regular inspections, and ongoing monitoring."
    // answer: "Kosher certification involves a thorough inspection of ingredients, production processes, and facilities to ensure compliance with Jewish dietary laws. Our certification process includes initial assessment, regular inspections, and ongoing monitoring."
  },
  {
    question: "How long does the certification process take?",
    // answer: "The certification timeline varies depending on the complexity of your products and production processes. Simple products may be certified within 4-8 weeks, while more complex operations can take 3-6 months. Our team works efficiently to minimize disruption to your business."
    answer: "The certification timeline varies depending on the complexity of your products and production processes. Simple products may be certified within 1-2 weeks, while more complex operations can take longer. Our team works efficiently to minimize disruption to your business."

  },
  {
    question: "What are the benefits of kosher certification?",
    answer: "Kosher certification opens your products to a broader market, including kosher-observant consumers and those who value kosher as a mark of quality. Many consumers choose kosher products for religious, dietary, health, or ethical reasons. Certification can increase your market reach and consumer trust. \n\nBut Volove Kashrus (VK) is not just another Hechsher, VK is the Hechsher that people rely on. Known for its integrity, consistency, and rigorous standards, VK certification tells consumers that your product meets the highest expectations in kosher oversight."
  },
  // {
  //   question: "Do you provide international certification?",
  //   answer: "Yes, we provide kosher certification services globally. Our team of rabbis and food specialists operates across six continents to serve businesses worldwide. We understand international food regulations and how they intersect with kosher requirements."
  // },
  // {
  //   question: "How often are certified facilities inspected?",
  //   answer: "Certified facilities typically receive regular inspections, with frequency determined by the nature of the products and production processes. Most facilities are inspected quarterly, though some may require more or less frequent visits. We also conduct unannounced inspections to ensure ongoing compliance."
  // },
  {
    question: "What is the difference between kosher and kosher for Passover?",
    answer: "Kosher for Passover adheres to additional restrictions that apply during the Passover holiday. During this time, leavened products (Chometz) are prohibited. For many segments of the Jewish Orthodox population Legumes and/or Legume derived products too are prohibited. Passover certification requires specific production runs with enhanced supervision and cleaning procedures."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Find answers to common questions about kosher certification and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-md overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-medium text-navy text-lg">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gold flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-5 text-gray-600 border-t border-gray-100 whitespace-pre-wrap">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see your question here?</p>
            <a 
              href="#contact" 
              className="inline-block bg-navy text-white font-bold py-3 px-8 rounded-md transition-transform hover:scale-105"
            >
              Ask Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;