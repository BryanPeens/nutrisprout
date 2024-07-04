import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your payment was successful</h1>
        <p className="text-gray-600 mb-6">Thank you for your payment. We will be in contact with more details shortly.</p>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
