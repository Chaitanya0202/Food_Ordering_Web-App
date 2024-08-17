import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Correctly importing from react-icons/fa

const OffersPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <div
        className="bg-cover  bg-center h-screen flex items-center justify-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,opacity:0.5}}
      >
        <h1 className="text-6xl font-bold text-black animate-fadeIn">Exclusive Offers Just for You</h1>
      </div>

      {/* Offers Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Today's Special Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Offer 1 */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=600&q=80"
              alt="Offer 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-2xl font-bold">50% Off on All Pizzas</h3>
                <p className="mt-2">Get half off on all pizzas this weekend!</p>
                <button className="mt-4 bg-indigo-600 px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-300">
                  <span>Grab Now</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Offer 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-2xl font-bold">Buy One Get One Free</h3>
                <p className="mt-2">Order any burger and get another one for free!</p>
                <button className="mt-4 bg-indigo-600 px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-300">
                  <span>Order Now</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Offer 3 */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?fit=crop&w=600&q=80"
              alt="Offer 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-2xl font-bold">Free Dessert with Meal</h3>
                <p className="mt-2">Get a free dessert with every combo meal!</p>
                <button className="mt-4 bg-indigo-600 px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-300">
                  <span>Claim Offer</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Watch Our Latest Offers in Action</h2>
          <div className="flex justify-center">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg mb-8">These offers won't last long. Hurry up and grab your favorite deals now!</p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-200 transition-colors duration-300">
            Explore All Offers
          </button>
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

export default OffersPage;
