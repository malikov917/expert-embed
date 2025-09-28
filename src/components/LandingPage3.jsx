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
  Circle,
  User
} from 'lucide-react';

const LandingPage = () => {
  const [selectedTab, setSelectedTab] = useState('today');
  const [votedItems, setVotedItems] = useState(new Set());
  const [hoveredId, setHoveredId] = useState(null);
  const [animatedVotes, setAnimatedVotes] = useState({});

  // Simulated AI project ideas with realistic data
  const [ideas] = useState([
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
      makerId: 1,
      timeAgo: "2 hours ago",
      tags: ["GPT-4", "No-Code", "Agents"],
      isLive: true,
      demoUrl: "#"
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
      makerId: 2,
      timeAgo: "4 hours ago",
      tags: ["API", "Database", "LLM"],
      isLive: true,
      demoUrl: "#"
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
      makerId: 3,
      timeAgo: "5 hours ago",
      tags: ["Copilot", "IDE", "Learning"],
      isLive: false,
      demoUrl: "#"
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
      makerId: 4,
      timeAgo: "6 hours ago",
      tags: ["Prompts", "Teams", "Git"],
      isLive: true,
      demoUrl: "#"
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
      makerId: 5,
      timeAgo: "8 hours ago",
      tags: ["Models", "Deploy", "Marketplace"],
      isLive: false,
      demoUrl: "#"
    }
  ]);

  const [filteredIdeas, setFilteredIdeas] = useState(ideas);
  const currentUser = { id: 1 }; // Mock current user

  useEffect(() => {
    if (selectedTab === 'my-projects') {
      setFilteredIdeas(ideas.filter(idea => idea.makerId === currentUser.id));
    } else {
      // Here you would filter by today, week, all
      setFilteredIdeas(ideas);
    }
  }, [selectedTab, ideas, currentUser.id]);

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
    { label: "Launching Soon", value: "12", icon: Rocket },
    { label: "Active Today", value: "89", icon: Flame },
    { label: "This Week", value: "234", icon: TrendingUp },
    { label: "Contributors", value: "1.2k", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              <Flame className="w-4 h-4 mr-2" />
              🎉 Welcome to the Future of AI Building
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Launch Your AI Product Today
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get feedback, find collaborators, and build in public. The community-driven platform for AI builders.
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
                        ? 'bg-orange-100 text-orange-600' 
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
                        ? 'bg-orange-100 text-orange-600' 
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
                        ? 'bg-orange-100 text-orange-600' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>All Time</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedTab('my-projects')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedTab === 'my-projects' 
                        ? 'bg-orange-100 text-orange-600' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>My Projects</span>
                    </div>
                  </button>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                  Filter
                </button>
              </div>
            </div>

            {/* Ideas List - The Main Table */}
            <div className="space-y-4">
              {filteredIdeas.map((idea) => (
                <div 
                  key={idea.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                  onMouseEnter={() => setHoveredId(idea.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Rank Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-600">
                          #{idea.rank}
                        </div>
                      </div>

                      {/* Project Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 bg-gradient-to-br ${idea.color} rounded-xl flex items-center justify-center shadow-lg transform ${hoveredId === idea.id ? 'scale-110 rotate-3' : ''} transition-all duration-200`}>
                          <idea.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Link to={`/product/${idea.id}`}>
                                <h3 className="text-lg font-bold text-gray-900 hover:text-orange-600 transition-colors cursor-pointer">
                                  {idea.title}
                                </h3>
                              </Link>
                              {idea.isLive && (
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center">
                                  <Circle className="w-2 h-2 mr-1 fill-current" />
                                  LIVE
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{idea.tagline}</p>
                            
                            {/* Tags and Meta */}
                            <div className="flex items-center gap-4 flex-wrap">
                              <div className="flex items-center gap-2">
                                {idea.tags.map((tag, i) => (
                                  <span key={i} className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-md transition-colors cursor-pointer">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="w-4 h-4" />
                                  {idea.comments}
                                </span>
                                <span>•</span>
                                <span>{idea.category}</span>
                                <span>•</span>
                                <span>{idea.timeAgo}</span>
                              </div>
                            </div>
                          </div>

                          {/* Vote Button */}
                          <div className="flex flex-col items-center ml-4">
                            <button
                              onClick={() => handleVote(idea.id)}
                              className={`group flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                                votedItems.has(idea.id)
                                  ? 'bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg'
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                              }`}
                            >
                              <ChevronUp className={`w-5 h-5 transition-transform duration-200 ${
                                votedItems.has(idea.id) ? 'translate-y-0' : 'group-hover:-translate-y-1'
                              } ${animatedVotes[idea.id] ? 'animate-bounce' : ''}`} />
                              <span className="font-bold text-lg">
                                {votedItems.has(idea.id) ? idea.votes + 1 : idea.votes}
                              </span>
                            </button>
                            
                            {/* Maker Info */}
                            <Link to={`/user/${idea.makerId}`} className="mt-3 flex items-center gap-2 group">
                              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xs text-white font-medium">
                                {idea.makerAvatar}
                              </div>
                              <span className="text-xs text-gray-500 group-hover:text-orange-600">{idea.maker}</span>
                            </Link>
                          </div>
                        </div>

                        {/* Action Buttons (visible on hover) */}
                        <div className="h-12 flex items-center">
                          {hoveredId === idea.id && (
                            <div className="flex items-center gap-2 animate-fadeIn">
                              <button className="px-3 py-1.5 bg-orange-100 hover:bg-orange-200 text-orange-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" />
                                Try Demo
                              </button>
                              <button className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-1">
                                <Github className="w-3 h-3" />
                                View Code
                              </button>
                              <button className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                Join Team
                              </button>
                              {currentUser.id === idea.makerId && (
                                <Link to={`/edit/${idea.id}`} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-1">
                                  <ExternalLink className="w-3 h-3" />
                                  Edit
                                </Link>
                              )}
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
                Load More Ideas
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-80 space-y-6">
            {/* Launch Your Project CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Got an AI idea?</h3>
              <p className="text-white/90 mb-4 text-sm">
                Share your project and get instant feedback from 1000+ builders
              </p>
              <button className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Launch Now →
              </button>
            </div>

            {/* Trending Makers */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Top Builders
              </h3>
              <div className="space-y-3">
                {['Sarah Chen', 'Mike Park', 'Alex Kumar'].map((name, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{name}</div>
                        <div className="text-xs text-gray-500">{3 - i} launches</div>
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
                <Hash className="w-5 h-5 mr-2 text-orange-500" />
                Hot Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Developer Tools', 'Agents', 'APIs', 'No-Code', 'Infrastructure', 'Models'].map((cat) => (
                  <button
                    key={cat}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-orange-100 hover:text-orange-600 text-gray-700 text-sm font-medium rounded-lg transition-colors"
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
                Get the best AI projects in your inbox every morning
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

export default LandingPage;
