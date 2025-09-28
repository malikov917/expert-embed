import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
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

const AIToolsPage = () => {
  const [selectedTab, setSelectedTab] = useState('today');
  const [votedItems, setVotedItems] = useState(new Set());
  const [hoveredId, setHoveredId] = useState(null);
  const [animatedVotes, setAnimatedVotes] = useState({});

  // Simulated AI tools with realistic data
  const [tools] = useState([
    {
      id: 1,
      rank: 1,
      title: "RunwayML",
      tagline: "AI video editing and generation tools for creators.",
      category: "Video",
      icon: Rocket,
      color: "from-red-500 to-orange-500",
      votes: 1204,
      comments: 234,
      maker: "Runway",
      makerAvatar: "R",
      timeAgo: "1 day ago",
      tags: ["Video", "GenAI", "Creative"],
      isLive: true,
      demoUrl: "#"
    },
    {
      id: 2,
      rank: 2,
      title: "Synthesia",
      tagline: "Create AI videos by typing in text. No actors, cameras or mics.",
      category: "Video",
      icon: Bot,
      color: "from-blue-500 to-cyan-500",
      votes: 987,
      comments: 189,
      maker: "Synthesia",
      makerAvatar: "S",
      timeAgo: "3 days ago",
      tags: ["Video", "Avatars", "Corporate"],
      isLive: true,
      demoUrl: "#"
    },
    {
      id: 3,
      rank: 3,
      title: "Jasper",
      tagline: "AI Content Platform that helps you and your team create content.",
      category: "Copywriting",
      icon: Sparkle,
      color: "from-green-500 to-teal-500",
      votes: 854,
      comments: 156,
      maker: "Jasper",
      makerAvatar: "J",
      timeAgo: "2 days ago",
      tags: ["Writing", "Marketing", "SEO"],
      isLive: true,
      demoUrl: "#"
    },
    {
      id: 4,
      rank: 4,
      title: "Midjourney",
      tagline: "An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.",
      category: "Image Generation",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      votes: 789,
      comments: 132,
      maker: "Midjourney",
      makerAvatar: "M",
      timeAgo: "5 days ago",
      tags: ["Images", "Art", "Creative"],
      isLive: true,
      demoUrl: "#"
    },
    {
      id: 5,
      rank: 5,
      title: "Fireflies.ai",
      tagline: "AI assistant for your meetings. Record, transcribe, and search across your voice conversations.",
      category: "Productivity",
      icon: Cpu,
      color: "from-yellow-500 to-amber-500",
      votes: 642,
      comments: 98,
      maker: "Fireflies.ai",
      makerAvatar: "F",
      timeAgo: "4 days ago",
      tags: ["Meetings", "Transcription", "Productivity"],
      isLive: true,
      demoUrl: "#"
    }
  ]);

  const handleVote = (id) => {
    const newVoted = new Set(votedItems);
    if (newVoted.has(id)) {
      newVoted.delete(id);
    } else {
      newVoted.add(id);
      // Trigger animation
      setAnimatedVotes({ ...animatedVotes, [id]: true });
      setTimeout(() => {
        setAnimatedVotes(prev => ({ ...prev, [id]: false }));
      }, 600);
    }
    setVotedItems(newVoted);
  };

  const stats = [
    { label: "New Tools", value: "23", icon: Rocket },
    { label: "Active Today", value: "150", icon: Flame },
    { label: "This Week", value: "450", icon: TrendingUp },
    { label: "Users", value: "2.5k", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              🏆 Discover the Best AI Tools
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Community-Ranked AI Tools
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Explore a curated list of the most popular AI tools, submitted and ranked by the community.
            </p>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-center space-x-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <stat.icon className="w-5 h-5" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm opacity-80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-8">
          {/* Main Feed */}
          <div className="flex-1">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setSelectedTab('today')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTab === 'today' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Today</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedTab('week')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTab === 'week' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>This Week</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedTab('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTab === 'all' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>All Time</span>
                    </div>
                  </button>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                  Filter
                </button>
              </div>
            </div>

            {/* Tools List - The Main Table */}
            <div className="space-y-4">
              {tools.map((tool) => (
                <div 
                  key={tool.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  onMouseEnter={() => setHoveredId(tool.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Rank Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-600">
                          #{tool.rank}
                        </div>
                      </div>

                      {/* Project Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center shadow-lg transform ${hoveredId === tool.id ? 'scale-110 rotate-3' : ''} transition-all duration-200`}>
                          <tool.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Link to={`/product/${tool.id}`}>
                                <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                                  {tool.title}
                                </h3>
                              </Link>
                              {tool.isLive && (
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center">
                                  <Circle className="w-2 h-2 mr-1 fill-current" />
                                  LIVE
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{tool.tagline}</p>
                            
                            {/* Tags and Meta */}
                            <div className="flex items-center gap-4 flex-wrap">
                              <div className="flex items-center gap-2">
                                {tool.tags.map((tag, i) => (
                                  <span key={i} className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-md transition-colors cursor-pointer">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="w-4 h-4" />
                                  {tool.comments}
                                </span>
                                <span>•</span>
                                <span>{tool.category}</span>
                                <span>•</span>
                                <span>{tool.timeAgo}</span>
                              </div>
                            </div>
                          </div>

                          {/* Vote Button */}
                          <div className="flex flex-col items-center ml-4">
                            <button
                              onClick={() => handleVote(tool.id)}
                              className={`group flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                                votedItems.has(tool.id)
                                  ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg'
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                              }`}
                            >
                              <ChevronUp className={`w-5 h-5 transition-transform duration-200 ${
                                votedItems.has(tool.id) ? 'translate-y-0' : 'group-hover:-translate-y-1'
                              } ${animatedVotes[tool.id] ? 'animate-bounce' : ''}`} />
                              <span className="font-bold text-lg">
                                {votedItems.has(tool.id) ? tool.votes + 1 : tool.votes}
                              </span>
                            </button>
                            
                            {/* Maker Info */}
                            <div className="mt-3 flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-xs text-white font-medium">
                                {tool.makerAvatar}
                              </div>
                              <span className="text-xs text-gray-500">{tool.maker}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons (visible on hover) */}
                        <div className="h-12 flex items-center">
                          {hoveredId === tool.id && (
                            <div className="flex items-center gap-2 animate-fadeIn">
                              <button className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" />
                                Visit Tool
                              </button>
                              <button className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" />
                                Comments
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center mx-auto">
                Load More Tools
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-80 space-y-6">
            {/* Launch Your Project CTA */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Submit an AI Tool</h3>
              <p className="text-white/90 mb-4 text-sm">
                Share your favorite AI tool and get it ranked by the community.
              </p>
              <button className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Submit Tool →
              </button>
            </div>

            {/* Trending Makers */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Top Contributors
              </h3>
              <div className="space-y-3">
                {['Chris Bakke', 'Sahil Lavingia', 'Jane Doe'].map((name, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{name}</div>
                        <div className="text-xs text-gray-500">{20 - i*5} submissions</div>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Hash className="w-5 h-5 mr-2 text-blue-500" />
                Tool Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Video', 'Copywriting', 'Image Generation', 'Productivity', 'Avatars', 'Marketing', 'Transcription'].map((cat) => (
                  <button
                    key={cat}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Daily AI Digest</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the best AI tools in your inbox every morning.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 mb-3"
              />
              <button className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AIToolsPage;
