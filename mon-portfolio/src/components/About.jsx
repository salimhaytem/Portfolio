import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          About Me
        </h2>
        <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <span className="font-semibold">Salim Haytem</span>, a 5th year engineering student at{" "}
          <span className="font-semibold">EMSI Casablanca</span> and a software developer passionate 
          about building intuitive and efficient web applications. With a strong foundation in both 
          front-end and back-end technologies, I've developed projects like a financial dashboard, 
          an AI-powered gig generator, and a luxury car rental platform. I'm always learning, adapting, 
          and looking to create impactful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;