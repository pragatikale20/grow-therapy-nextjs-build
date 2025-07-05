
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies and techniques to manage anxiety, reduce stress, and regain control over your daily life. Through evidence-based approaches like cognitive-behavioral therapy and mindfulness practices, we'll work together to help you find peace and balance.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fee: "$200 / session"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your relationships through improved communication, conflict resolution, and deeper understanding. Whether for couples or individuals navigating relationship challenges, we'll explore patterns and develop healthier ways of connecting with others.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fee: "$240 / couples session"
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past experiences in a safe, supportive environment. Using trauma-informed approaches, we'll work at your pace to process difficult experiences, develop resilience, and reclaim your sense of safety and empowerment.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fee: "$200 / session"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4 opacity-0 animate-fade-in">
            Therapeutic Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 transform scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards]"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in delay-500">
            Compassionate, evidence-based therapy tailored to your unique needs and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 transform opacity-0 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-300">
                    {service.fee}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="text-blue-600 text-sm font-bold group-hover:scale-110 transform transition-transform duration-300">→</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
