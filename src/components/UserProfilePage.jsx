import { Link } from 'react-router-dom';
import Header from './Header';
import { Rss, Github, Twitter, Calendar, MapPin } from 'lucide-react';

const UserProfilePage = () => {

  // Mock data for a user
  const user = {
    id: 1,
    name: 'Alex Chen',
    avatar: 'AC',
    bio: 'Building the future of AI, one project at a time.',
    location: 'San Francisco, CA',
    joined: 'September 2023',
    website: 'https://alexchen.io',
    twitter: '@alexchen',
    github: 'alexchen',
    followers: 1200,
    following: 150,
    projects: [
      {
        id: 1,
        title: "AutoGPT Studio",
        tagline: "Visual IDE for building autonomous AI agents without code",
        votes: 524,
        comments: 89,
      },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-8">
          {/* Left Column (User Info) */}
          <div className="w-80 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl text-white font-bold mb-4">
                        {user.avatar}
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <p className="text-gray-600 text-center mt-2">{user.bio}</p>
                </div>
                <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/>{user.location}</div>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4"/>Joined {user.joined}</div>
                    <div className="flex items-center gap-2"><Link to={user.website} className="hover:text-blue-600"><Rss className="w-4 h-4 inline-block mr-1"/>{user.website}</Link></div>
                    <div className="flex items-center gap-2"><Link to={`https://twitter.com/${user.twitter}`} className="hover:text-blue-600"><Twitter className="w-4 h-4 inline-block mr-1"/>{user.twitter}</Link></div>
                    <div className="flex items-center gap-2"><Link to={`https://github.com/${user.github}`} className="hover:text-blue-600"><Github className="w-4 h-4 inline-block mr-1"/>{user.github}</Link></div>
                </div>
                <div className="mt-6 flex justify-around">
                    <div className="text-center">
                        <div className="font-bold text-xl">{user.followers}</div>
                        <div className="text-sm text-gray-500">Followers</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-xl">{user.following}</div>
                        <div className="text-sm text-gray-500">Following</div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column (User Projects) */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Published Projects</h2>
                <div className="space-y-4">
                    {user.projects.map(project => (
                        <div key={project.id} className="p-4 border rounded-lg hover:bg-gray-50">
                            <Link to={`/product/${project.id}`}>
                                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                                <p className="text-gray-600">{project.tagline}</p>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                    <span>{project.votes} votes</span>
                                    <span>{project.comments} comments</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
