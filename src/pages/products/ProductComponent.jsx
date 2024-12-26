import React from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="block h-full">
      <div className="flex flex-col h-full  rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative pt-[100%]">
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain p-4"
          />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {product.title}
            </h3>
            <span className="text-lg font-bold text-emerald-600 ml-2 whitespace-nowrap">
              ${product.price}
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
              {product.category}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating.count})
              </span>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductComponent;