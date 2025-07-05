
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in delay-300">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300">
                Meet Dr. Serena Blake
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-8 transform origin-left scale-x-0 animate-[scale-x_1s_ease-out_0.5s_forwards]"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="opacity-0 animate-fade-in delay-700 hover:text-gray-800 transition-colors duration-300">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              
              <p className="opacity-0 animate-fade-in delay-1000 hover:text-gray-800 transition-colors duration-300">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center opacity-0 animate-fade-in delay-1300 hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-3xl font-bold text-blue-600 mb-2 hover:text-blue-700 transition-colors duration-300">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center opacity-0 animate-fade-in delay-1500 hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="text-3xl font-bold text-blue-600 mb-2 hover:text-blue-700 transition-colors duration-300">500+</div>
                <div className="text-gray-600">Client Sessions</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in delay-500">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Dr. Serena Blake, Clinical Psychologist"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 hover:scale-105 transform transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg max-w-xs group-hover:bg-blue-700 transition-colors duration-300 hover:scale-105 transform transition-transform duration-300">
                <p className="text-sm font-medium">
                  "Creating a safe, supportive space for you to thrive."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
