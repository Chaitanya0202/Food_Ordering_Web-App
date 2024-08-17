import React from 'react';

const About= () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1683134622706-fe623d772f3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTYwMCUyMCVDMyU5NyUyMDEwNjclMjAlMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D')" }}
      >
        <h1 className="text-6xl font-bold text-white">About Our Food Journey</h1>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
              2018
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Founded</h3>
              <p>We started our journey with a small food truck in the heart of the city.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
              2020
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Expansion</h3>
              <p>Our passion for food led to the opening of our first brick-and-mortar restaurant.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
              2023
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold">Going Global</h3>
              <p>We now serve delicious meals across multiple countries with a dedicated customer base.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p>"The best dining experience I've ever had!"</p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Customer"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p>Food Enthusiast</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p>"Amazing flavors and excellent service. Highly recommended!"</p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Customer"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p>Culinary Blogger</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <p>"A must-visit place for all food lovers!"</p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Customer"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Michael Brown</h3>
                  <p>Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Our Journey in Action</h2>
          <div className="flex justify-center">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <div>
            <h3 className="text-2xl font-bold">Foodie</h3>
            <p className="mt-2">© 2024 Foodie. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-500">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-500">Terms of Service</a>
            <a href="#" className="hover:text-indigo-500">Contact Us</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-2xl hover:text-indigo-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-2xl hover:text-indigo-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl hover:text-indigo-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
