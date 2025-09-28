import React, { useState } from 'react';
import { Plus, Send } from 'lucide-react';

const SubmitPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    category: 'Developer Tools',
    description: '',
    demoUrl: '',
    githubUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Project submitted! (Check console for data)');
    setFormData({
      title: '',
      tagline: '',
      category: 'Developer Tools',
      description: '',
      demoUrl: '',
      githubUrl: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Submit a Project</h1>
          <p className="text-lg text-gray-600 mt-2">Share your AI startup or product with the community.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-2">Project Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="e.g., AutoGPT Studio"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 text-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="tagline" className="block text-lg font-medium text-gray-800 mb-2">Tagline</label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                placeholder="A short and catchy tagline for your project"
                value={formData.tagline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 text-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="category" className="block text-lg font-medium text-gray-800 mb-2">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 text-lg"
              >
                <option>Developer Tools</option>
                <option>Infrastructure</option>
                <option>Productivity</option>
                <option>Collaboration</option>
                <option>Marketplace</option>
                <option>Video</option>
                <option>Copywriting</option>
                <option>Image Generation</option>
                <option>Avatars</option>
                <option>Marketing</option>
                <option>Transcription</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="Tell us more about your project..."
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 text-lg"
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label htmlFor="demoUrl" className="block text-lg font-medium text-gray-800 mb-2">Demo URL</label>
              <input
                type="url"
                id="demoUrl"
                name="demoUrl"
                placeholder="https://your-project-demo.com"
                value={formData.demoUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 text-lg"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="githubUrl" className="block text-lg font-medium text-gray-800 mb-2">GitHub URL (Optional)</label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                placeholder="https://github.com/user/repo"
                value={formData.githubUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 text-lg"
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold text-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <Send className="w-6 h-6" />
                <span>Submit Project</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
