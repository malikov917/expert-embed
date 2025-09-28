import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900">Product Detail Page</h1>
        <p className="text-lg text-gray-600 mt-2">Product ID: {id}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
