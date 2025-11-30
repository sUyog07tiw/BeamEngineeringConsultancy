import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Beam Engineering Consultancy</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Providing professional structural and civil engineering consultancy services to bring your projects to life with safety and precision.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
        Contact Us
      </button>
    </div>
  );
};

export default Home;
