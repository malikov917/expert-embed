import React, { useState } from 'react';
import { Bot, Zap, Clock, Users, CheckCircle, ArrowRight, Sparkles, MessageCircle, Star, Code2 } from 'lucide-react';
import emailjs from 'emailjs-com';

const ExpertEmbedLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_el8ixrs', // Replace with your EmailJS service ID
        'template_t7wts2m', // Replace with your EmailJS template ID
        {
          user_email: email,
          message: `New early access request from ${email}`,
        },
        'nmG_8kMJ6PofAHE3-' // Replace with your EmailJS public key
      );
      
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const botExamples = [
    {
      name: "Sarah",
      role: "Fashion Boutique Consultant",
      description: "Helps customers find perfect outfits and styling tips",
      icon: "👗"
    },
    {
      name: "TechGuru Mike",
      role: "Electronics Store Assistant", 
      description: "Compares specs and recommends the best tech within budget",
      icon: "💻"
    },
    {
      name: "Chef Marco",
      role: "Restaurant Concierge",
      description: "Recommends dishes and handles dietary preferences",
      icon: "👨‍🍳"
    },
    {
      name: "Legal Eagle Lisa",
      role: "Law Firm Consultant",
      description: "Explains legal services and assesses case strength",
      icon: "⚖️"
    },
    {
      name: "Dr. Wellness",
      role: "Medical Practice Assistant",
      description: "Explains procedures and handles appointment questions",
      icon: "🩺"
    },
    {
      name: "Realtor Rob",
      role: "Property Matchmaker",
      description: "Pre-qualifies buyers and schedules property viewings",
      icon: "🏠"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 text-slate-800">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ExpertEmbed
            </span>
          </div>
          <button
            onClick={() => document.getElementById('early-access').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 text-slate-700 font-medium hover:scale-105"
          >
            Get Early Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 shadow-lg shadow-black/5 mb-8">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-slate-700">Vision Stage: Seeking Early Adopters</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your Website Into a
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              24/7 Expert Consultant
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create intelligent AI consultants that understand your business and handle customer inquiries like your best sales representative—available around the clock.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById('early-access').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Request Early Access
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-sm text-slate-500">
              Free beta access • No credit card required
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl shadow-black/10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      Online Now
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">Sarah - Fashion Consultant</h3>
                    <p className="text-slate-600 text-sm">Ready to help customers find their perfect style</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/40">
                    <p className="text-sm text-slate-700 italic">"Looking for a wedding guest dress? I can show you our bestsellers in your size and budget!"</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-4xl shadow-lg">
                    👗
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Stop Losing Customers to Unanswered Questions
              </h2>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p>Visitors leave when they can't find answers immediately</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p>24/7 human support is expensive and unrealistic</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p>Generic chatbots feel robotic and provide unhelpful responses</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-3xl bg-white/40 backdrop-blur-md border border-white/30 shadow-xl shadow-black/10 p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">The ExpertEmbed Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-800">Setup in Under 10 Minutes</p>
                      <p className="text-sm text-slate-600">No technical skills required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-800">Understands Your Business</p>
                      <p className="text-sm text-slate-600">Trained on your specific products and services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-800">Always Professional</p>
                      <p className="text-sm text-slate-600">Never tired, never rude, never unavailable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Simple as 1, 2, 3
            </h2>
            <p className="text-xl text-slate-600">
              From setup to success in minutes, not months
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Upload Your Knowledge</h3>
              <p className="text-slate-600">Drop in your PDFs, FAQs, and product info. We'll make your AI instantly smart about your business.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Customize Your Expert</h3>
              <p className="text-slate-600">Choose an industry template, set your brand voice, and watch your AI consultant come to life.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/25">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Embed & Profit</h3>
              <p className="text-slate-600">Copy one line of code to your website. Your 24/7 sales team is ready to convert visitors into customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embed Section */}
      <section className="px-6 py-24 bg-white/40 backdrop-blur-sm border-y border-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Embed on Your Site in Seconds
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Just copy and paste one line of code before the closing `&lt;/body&gt;` tag on your website. It's that simple.
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -top-5 -left-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/25 transform -rotate-12">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <div className="bg-slate-800 rounded-2xl shadow-2xl shadow-black/20 p-6 pl-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre>
                <code className="text-sm md:text-base text-slate-300 block whitespace-pre-wrap">
                  <span className="text-slate-500">&lt;!-- Add ExpertEmbed to your site --&gt;</span>
                  <br />
                  <span className="text-sky-400">&lt;script</span>
                  <span className="text-amber-300"> src</span>=<span className="text-emerald-400">"https://cdn.expert-embed.com/v1/boot.js"</span>
                  <span className="text-amber-300"> data-expert-id</span>=<span className="text-emerald-400">"YOUR_EXPERT_ID"</span>
                  <span className="text-sky-400"> async</span>
                  <span className="text-sky-400">&gt;&lt;/script&gt;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Examples */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Meet Your Industry Experts
            </h2>
            <p className="text-xl text-slate-600">
              Pre-built consultants ready to understand your specific business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {botExamples.map((bot, index) => (
              <div key={index} className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 shadow-lg shadow-black/5 p-6 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center text-xl">
                    {bot.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{bot.name}</h3>
                    <p className="text-sm text-slate-600">{bot.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{bot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Why Businesses Choose ExpertEmbed
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">24/7 Availability</h3>
              <p className="text-slate-600 text-sm">Never miss a potential customer, no matter the time zone</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Instant Expertise</h3>
              <p className="text-slate-600 text-sm">Your AI knows your products better than most employees</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Scalable Support</h3>
              <p className="text-slate-600 text-sm">Handle unlimited conversations simultaneously</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Perfect Conversations</h3>
              <p className="text-slate-600 text-sm">Always professional, helpful, and on-brand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section id="early-access" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl shadow-black/10 p-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Limited Beta Access</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Ready to Transform Your Website?
            </h2>
            
            <p className="text-xl text-slate-600 mb-8">
              Join our exclusive beta and be among the first to give your website a 24/7 expert consultant that never sleeps.
            </p>
            
            {!isSubmitted ? (
              <div className="max-w-md mx-auto">
                <div className="flex gap-4 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg shadow-black/5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-slate-500"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Access'}
                  </button>
                </div>
                
                <p className="text-slate-500 text-sm">
                  Free beta access • No credit card required
                </p>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold">Request Submitted!</span>
                </div>
                <p className="text-slate-600">
                  Thanks for your interest! We'll be in touch soon with your beta access.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ExpertEmbed
            </span>
          </div>
          <p className="text-slate-500">
            Transform your website into a 24/7 expert consultant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ExpertEmbedLanding;