
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-6">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy 
              to help you overcome challenges and thrive.
            </p>
            <div className="text-sm text-gray-400">
              <p>Licensed in California</p>
              <p>8+ Years Experience • 500+ Sessions</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">1287 Maplewood Drive, Los Angeles, CA 90026</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(323) 555-0192</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">serena@blakepsychology.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Office Hours</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white">In-Person Sessions</p>
                <p>Tuesday & Thursday: 10 AM - 6 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Virtual Sessions</p>
                <p>Monday, Wednesday & Friday: 1 PM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dr. Serena Blake, PsyD. All rights reserved. 
            <span className="block mt-2 text-sm">
              This website is for informational purposes only and does not constitute medical advice.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
