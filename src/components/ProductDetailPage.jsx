import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Code2, 
  Rocket,
  Github,
  Twitter,
  ChevronUp,
  Star,
  Heart,
  Eye,
  ArrowUpRight,
  Zap,
  Building,
  Lightbulb,
  Trophy,
  Clock,
  Hash,
  Flame,
  Award,
  ExternalLink,
  Bot,
  Brain,
  Cpu,
  Sparkle,
  Plus,
  ArrowRight,
  CheckCircle,
  Circle
} from 'lucide-react';

// Simulated AI project ideas with realistic data (copied from LandingPage3.jsx)
const ideas = [
    {
      id: 1,
      rank: 1,
      title: "AutoGPT Studio",
      tagline: "Visual IDE for building autonomous AI agents without code",
      category: "Developer Tools",
      icon: Bot,
      color: "from-purple-500 to-blue-500",
      votes: 524,
      comments: 89,
      maker: "Alex Chen",
      makerAvatar: "AC",
      timeAgo: "2 hours ago",
      tags: ["GPT-4", "No-Code", "Agents"],
      isLive: true,
      demoUrl: "#",
      description: "AutoGPT Studio is a visual IDE that allows you to build and deploy autonomous AI agents with no code. It provides a drag-and-drop interface to connect different AI models and tools, and to define the agent\'s behavior. It also includes a testing and debugging environment to ensure your agents work as expected."
    },
    {
      id: 2,
      rank: 2,
      title: "NeuraLink API",
      tagline: "Connect any LLM to your database with natural language",
      category: "Infrastructure",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      votes: 412,
      comments: 67,
      maker: "Sarah Kim",
      makerAvatar: "SK",
      timeAgo: "4 hours ago",
      tags: ["API", "Database", "LLM"],
      isLive: true,
      demoUrl: "#",
      description: "NeuraLink API provides a simple and powerful way to connect your database to any Large Language Model (LLM). It allows you to query your data using natural language, and to build AI-powered applications on top of your existing database. It supports a wide range of databases and LLMs."
    },
    {
      id: 3,
      rank: 3,
      title: "CodeWhisper",
      tagline: "AI pair programmer that learns your coding style",
      category: "Productivity",
      icon: Code2,
      color: "from-orange-500 to-red-500",
      votes: 389,
      comments: 45,
      maker: "Mike Johnson",
      makerAvatar: "MJ",
      timeAgo: "5 hours ago",
      tags: ["Copilot", "IDE", "Learning"],
      isLive: false,
      demoUrl: "#",
      description: "CodeWhisper is an AI pair programmer that helps you write better code, faster. It learns your coding style and provides real-time suggestions and completions in your IDE. It supports a wide range of programming languages and frameworks."
    },
    {
      id: 4,
      rank: 4,
      title: "PromptForge",
      tagline: "Collaborative prompt engineering platform with version control",
      category: "Collaboration",
      icon: Sparkle,
      color: "from-pink-500 to-rose-500",
      votes: 276,
      comments: 34,
      maker: "Emma Davis",
      makerAvatar: "ED",
      timeAgo: "6 hours ago",
      tags: ["Prompts", "Teams", "Git"],
      isLive: true,
      demoUrl: "#",
      description: "PromptForge is a collaborative platform for prompt engineering. It allows teams to create, share, and version control their prompts. It also provides tools for testing and evaluating prompts, and for deploying them to production."
    },
    {
      id: 5,
      rank: 5,
      title: "AI Model Zoo",
      tagline: "Marketplace for fine-tuned models with one-click deploy",
      category: "Marketplace",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      votes: 198,
      comments: 28,
      maker: "Jason Liu",
      makerAvatar: "JL",
      timeAgo: "8 hours ago",
      tags: ["Models", "Deploy", "Marketplace"],
      isLive: false,
      demoUrl: "#",
      description: "AI Model Zoo is a marketplace for fine-tuned AI models. It allows you to discover and deploy models with one click. It also provides tools for fine-tuning your own models and for sharing them with the community."
    }
  ];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = ideas.find(idea => idea.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Product not found</h1>
          <p className="text-lg text-gray-600 mt-2">The product you are looking for does not exist.</p>
          <Link to="/" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Go back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start gap-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${product.color} rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg`}>
              <product.icon className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-xl text-gray-600 mt-2">{product.tagline}</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-8 flex items-center justify-between bg-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm text-white font-bold">
                        {product.makerAvatar}
                    </div>
                    <div>
                        <div className="font-bold text-gray-900">{product.maker}</div>
                        <div className="text-sm text-gray-500">Maker</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium rounded-xl transition-colors flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Visit
                </button>
                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium rounded-xl transition-colors flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    Source Code
                </button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({product.comments})</h2>
            {/* Add comments section here */}
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                        <div className="bg-gray-100 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-gray-900">Commenter Name</span>
                                <span className="text-sm text-gray-500">2 hours ago</span>
                            </div>
                            <p className="text-gray-700 mt-2">This is a great idea! I would love to see this implemented.</p>
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

export default ProductDetailPage;