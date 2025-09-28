import React, { useState } from 'react';
import { MessageSquare, Plus, Send } from 'lucide-react';

const ForumPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex Chen',
      authorAvatar: 'AC',
      timeAgo: '2 hours ago',
      title: 'Searching for a partner for a new AI project',
      content: 'I have an idea for a new AI-powered app for the education market. Looking for a technical co-founder with experience in NLP and React. If you are interested, please contact me.',
      comments: 5,
      category: 'Partner Search'
    },
    {
      id: 2,
      author: 'Sarah Kim',
      authorAvatar: 'SK',
      timeAgo: '1 day ago',
      title: 'I need help with my Next.js and Tailwind CSS project',
      content: 'I am stuck with a responsive layout issue in my Next.js app. I have tried everything I could find online, but nothing seems to work. Can someone please take a look at my code?',
      comments: 12,
      category: 'Help Wanted'
    },
    {
      id: 3,
      author: 'Mike Johnson',
      authorAvatar: 'MJ',
      timeAgo: '3 days ago',
      title: 'Searching for cheap ads for my new startup',
      content: 'I have just launched my new startup and I am looking for cheap ways to advertise it. Any recommendations for platforms or strategies for a small budget? Thanks in advance!',
      comments: 8,
      category: 'Advertising'
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'Help Wanted' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      setPosts([
        {
          id: posts.length + 1,
          author: 'You',
          authorAvatar: 'Y',
          timeAgo: 'just now',
          comments: 0,
          ...newPost
        },
        ...posts
      ]);
      setNewPost({ title: '', content: '', category: 'Help Wanted' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Community Forum</h1>
          <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Post</span>
          </button>
        </div>

        {/* New Post Form */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
          <form onSubmit={handlePostSubmit}>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                id="category"
                name="category"
                value={newPost.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500"
              >
                <option>Help Wanted</option>
                <option>Partner Search</option>
                <option>Advertising</option>
                <option>General Discussion</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="What's your post about?"
                value={newPost.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                id="content"
                name="content"
                rows="4"
                placeholder="Share more details..."
                value={newPost.content}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 ml-auto"
              >
                <Send className="w-4 h-4" />
                <span>Post</span>
              </button>
            </div>
          </form>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0 flex items-center justify-center text-sm text-white font-bold">
                    {post.authorAvatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-gray-900">{post.author}</span>
                        <span className="text-sm text-gray-500 ml-2">• {post.timeAgo}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mt-2 hover:text-blue-600 cursor-pointer">{post.title}</h3>
                    <p className="text-gray-600 mt-2">{post.content}</p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-blue-600">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments} Comments</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;