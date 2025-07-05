
import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life. Together, we'll develop personalized tools to help you navigate challenging situations with confidence.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "$200 / session"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your connections and improve communication patterns in your relationships. Whether you're working on romantic partnerships, family dynamics, or friendship challenges, we'll explore healthy ways to build deeper, more fulfilling relationships.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "$240 / couples session"
    },
    {
      title: "Trauma Recovery",
      description: "Navigate your healing journey with specialized trauma-informed care in a safe, compassionate environment. Using evidence-based approaches, we'll work together to process difficult experiences and develop resilience for lasting recovery.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "$200 / session"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Specialized Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized, evidence-based therapy approaches tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">
                    {service.price}
                  </span>
                  <button 
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
