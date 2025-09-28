import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import { 
  Users, 
  Rocket,
  ChevronUp,
  Hash,
  Bot,
  Brain,
  Cpu,
  Sparkle,
  Info
} from 'lucide-react';

// Simulated AI tools with realistic data (copied from AIToolsPage.jsx)
const tools = [
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
      demoUrl: "#",
      description: "RunwayML is a platform for artists and creators to use machine learning tools in an intuitive way without any coding experience. It provides a wide range of pre-trained models for image and video generation, style transfer, and more."
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
      demoUrl: "#",
      description: "Synthesia is an AI video generation platform that allows you to create professional-looking videos from text in minutes. You can choose from a variety of AI avatars and languages to create engaging content for your business."
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
      demoUrl: "#",
      description: "Jasper is an AI-powered content platform that helps you write better content, faster. It can generate high-quality blog posts, marketing copy, social media updates, and more. It's like having a team of copywriters in your pocket."
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
      demoUrl: "#",
      description: "Midjourney is an independent research lab that produces an artificial intelligence program that creates images from textual descriptions. It is known for its artistic and imaginative results."
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
      demoUrl: "#",
      description: "Fireflies.ai is an AI assistant that joins your meetings to record, transcribe, and analyze your conversations. It helps you remember what was said in your meetings and makes it easy to share key moments with your team."
    }
  ];

const ToolDetailPage = () => {
  const { id } = useParams();
  const tool = tools.find(tool => tool.id === parseInt(id));
  const [voted, setVoted] = useState(false);

  if (!tool) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Tool not found</h1>
          <p className="text-lg text-gray-600 mt-2">The tool you are looking for does not exist.</p>
          <Link to="/tools" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Go back to tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${tool.color} rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg`}>
                  <tool.icon className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900">{tool.title}</h1>
                  <p className="text-xl text-gray-600 mt-2">{tool.tagline}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{tool.description}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">Screenshot 1</div>
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">Screenshot 2</div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({tool.comments})</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                            <div className="bg-gray-100 rounded-xl p-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-gray-900">Commenter Name</span>
                                    <span className="text-sm text-gray-500">2 hours ago</span>
                                </div>
                                <p className="text-gray-700 mt-2">This is a great tool! I use it every day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-80 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <button
                    onClick={() => setVoted(!voted)}
                    className={`w-full group flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-200 ${voted ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                    <ChevronUp className={`w-6 h-6 transition-transform duration-200 ${voted ? 'translate-y-0' : 'group-hover:-translate-y-1'}`} />
                    <span className="font-bold text-2xl">
                    {voted ? tool.votes + 1 : tool.votes}
                    </span>
                    <span className="text-sm font-medium">UPVOTE</span>
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center"><Users className="w-5 h-5 mr-2 text-gray-500" />Maker</h3>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-xl text-white font-bold">
                        {tool.makerAvatar}
                    </div>
                    <div>
                        <div className="text-lg font-medium">{tool.maker}</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center"><Info className="w-5 h-5 mr-2 text-gray-500" />Info</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Category</span>
                        <span className="font-medium text-gray-900">{tool.category}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Launched</span>
                        <span className="font-medium text-gray-900">{tool.timeAgo}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Comments</span>
                        <span className="font-medium text-gray-900">{tool.comments}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center"><Hash className="w-5 h-5 mr-2 text-gray-500" />Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
                        {tag}
                    </span>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;