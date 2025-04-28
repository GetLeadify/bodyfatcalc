import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calculator } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-primary-600 text-5xl font-bold">404</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            to="/calculator"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 border border-primary-200 py-3 px-6 rounded-lg shadow-sm hover:bg-primary-50 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            Try Calculator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;