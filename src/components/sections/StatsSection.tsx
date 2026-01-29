import { useEffect, useState, useRef } from 'react';
import { Award, Globe, Box, ThumbsUp } from 'lucide-react';

interface NumberCounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const NumberCounter = ({ end, duration, suffix = '' }: NumberCounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <span ref={counterRef} className="text-4xl font-bold text-navy">
      {count}{suffix}
    </span>
  );
};

const StatsStrip = () => {
 
  const stats = [
    { value: 5000, suffix: '+', label: 'Products Certified Worldwide', desc: '', icon: Box },
    // { value: 70, suffix: '+', label: 'Years of Experience', desc: '', icon: ThumbsUp },
    { value: 4, suffix: '', label: 'Generations of Trusted Leadership', desc: '', icon: Award },
    { value: 1125, suffix: '+', label: 'Massive facilities', desc: '', icon: Award },
    { value: 6, suffix: '+', label: 'Continents Served', desc: '', icon: Globe },
  ];

  return (
    <section className="py-16 bg-gray-100 font-sans"> 
      <div className="container mx-auto px-4">
   
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Our Achievements Through Numbers</h2>
  
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-10 rounded-full"></div>  
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
          {stats.map((stat, index) => {
            const IconComponent = stat.icon; 
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center"  
              >
               
                {IconComponent && (
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">  
                    <IconComponent className="h-8 w-8 text-amber-500" />  
                  </div>
                )}

               
                {stat.value > 0 ? (
                  
                  <NumberCounter end={stat.value} duration={2000} suffix={stat.suffix} />
                ) : (
               
                  <span className="text-4xl font-bold text-gray-300">{stat.label}</span>
                )}
                
             
                <p className="mt-4 text-xl font-semibold text-gray-700">  
                  {stat.label}
                </p>
              
                {stat.desc && stat.value === 0 && (
                  <p className="mt-2 text-base text-gray-500">{stat.desc}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
