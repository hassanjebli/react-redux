import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  fetchProductById,
  removeSelectedProduct,
} from '../../redux/actions/productActions';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.selectedProductReducer
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">Error: {error}</p>
        <Link
          to="/products"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/products" className="text-gray-500 hover:text-gray-700">
            Products
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 focus:border-blue-500 bg-gray-100 p-2"
                  >
                    <img
                      src={product.image}
                      alt={`Product view ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.title}
                </h1>
              </div>

              {/* Rating Section */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      {i < Math.floor(product.rating.rate) ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              {/* Price Section */}
              <div className="border-t border-b py-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                  <span className="px-2 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded">
                    Save 20%
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button className="p-3 hover:bg-gray-50">
                      <span className="text-xl">−</span>
                    </button>
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 text-center border-x p-2"
                    />
                    <button className="p-3 hover:bg-gray-50">
                      <span className="text-xl">+</span>
                    </button>
                  </div>
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  Add to Wishlist
                </button>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Availability:</span>
                    <span className="ml-2 text-green-600">In Stock</span>
                  </div>
                  <div>
                    <span className="text-gray-500">SKU:</span>
                    <span className="ml-2">FB-{product.id}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Shipping:</span>
                    <span className="ml-2">Worldwide</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Returns:</span>
                    <span className="ml-2">30 Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
