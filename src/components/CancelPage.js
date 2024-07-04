import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CancelPage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500 rounded-full w-24 h-24 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Canceled</h1>
        <p className="text-gray-600 mb-6">Your order was not completed.</p>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to store
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
