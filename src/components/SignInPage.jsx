import React from 'react';
import Header from './Header';

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-md mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Sign In</h1>
          <p className="text-lg text-gray-600 mt-2">Access your account and join the community.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-4">
            <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
              <span>Sign In with Google</span>
            </button>
            <p className="text-center text-gray-500 text-sm">Google Sign-In is coming soon. I need a Google Client ID to enable it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
