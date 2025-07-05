
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
          Find Your Path to 
          <span className="block text-blue-600 font-medium">Mental Wellness</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Compassionate, evidence-based therapy to help you overcome anxiety, 
          strengthen relationships, and heal from trauma in a safe, supportive environment.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Free Consultation
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More About Dr. Blake
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-gray-500">
          <p>In-person sessions: Tue & Thu • Virtual sessions: Mon, Wed & Fri</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
