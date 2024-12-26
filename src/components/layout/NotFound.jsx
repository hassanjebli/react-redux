import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-lg">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-sm border border-indigo-100 hover:border-indigo-200 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors duration-200"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>

        {/* Optional: Additional Help Text */}
        <p className="text-sm text-gray-500 pt-8">
          If you believe this is a mistake, please contact support or try again
          later.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
