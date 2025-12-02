import React from 'react';
import ReactDOM from 'react-dom/client';
import PeaceWebsite from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PeaceWebsite />
  </React.StrictMode>
);

import React, { useState, useEffect } from 'react';
import { Heart, Globe, Users, BookOpen, MessageCircle, Shield } from 'lucide-react';

export default function PeaceWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [peaceMessages, setPeaceMessages] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString()
    };
    setPeaceMessages([newMessage, ...peaceMessages]);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message of peace! Together we can make a difference.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="text-blue-600" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Peace Initiative
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'mission', 'principles', 'education', 'action', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-24 h-24 mx-auto text-blue-600 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Peace is the Only Solution
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            For Humanity to Thrive, We Must Choose Peace Over Conflict, Love Over Hate, Unity Over Division
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveSection('mission')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
            >
              Join Our Mission
            </button>
            <button 
              onClick={() => setActiveSection('education')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, value: '195+', label: 'Countries Need Peace' },
              { icon: Users, value: '8B+', label: 'People Deserve Peace' },
              { icon: Heart, value: '100%', label: 'Commitment to Unity' },
              { icon: Shield, value: '∞', label: 'Peaceful Future' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {activeSection === 'mission' && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <Globe className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Global Unity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe that despite our differences in culture, religion, and nationality, 
                  humanity shares a common destiny. Peace is not just the absence of war, but the 
                  presence of justice, equality, and mutual respect among all people.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <Heart className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Compassionate Action</h3>
                <p className="text-gray-700 leading-relaxed">
                  True peace requires action. Through education, dialogue, and community building, 
                  we work to transform hearts and minds. Every act of kindness, every bridge built 
                  between communities, brings us closer to a peaceful world.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Principles Section */}
      {activeSection === 'principles' && (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100 to-purple-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Principles of Peace
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Non-Violence',
                  desc: 'Resolving conflicts through dialogue, understanding, and peaceful means',
                  icon: Shield
                },
                {
                  title: 'Equality',
                  desc: 'Recognizing the inherent dignity and equal rights of all human beings',
                  icon: Users
                },
                {
                  title: 'Justice',
                  desc: 'Ensuring fairness, accountability, and respect for human rights globally',
                  icon: Heart
                },
                {
                  title: 'Education',
                  desc: 'Teaching peace, tolerance, and understanding from an early age',
                  icon: BookOpen
                },
                {
                  title: 'Dialogue',
                  desc: 'Creating spaces for honest conversation between diverse communities',
                  icon: MessageCircle
                },
                {
                  title: 'Unity',
                  desc: 'Building bridges that connect humanity across all divides',
                  icon: Globe
                }
              ].map((principle, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                  <principle.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-gray-600">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Peace Education Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Understanding Conflict',
                  content: 'Learn about the root causes of conflicts and how to address them constructively',
                  tag: 'Foundation'
                },
                {
                  title: 'Mediation Skills',
                  content: 'Develop the ability to facilitate peaceful resolution between conflicting parties',
                  tag: 'Skills'
                },
                {
                  title: 'Cultural Sensitivity',
                  content: 'Appreciate diversity and learn to navigate cross-cultural interactions with respect',
                  tag: 'Cultural'
                },
                {
                  title: 'Emotional Intelligence',
                  content: 'Build empathy, self-awareness, and the ability to manage emotions peacefully',
                  tag: 'Personal'
                },
                {
                  title: 'Nonviolent Communication',
                  content: 'Master techniques for expressing needs and resolving differences without aggression',
                  tag: 'Communication'
                },
                {
                  title: 'Peace History',
                  content: 'Study successful peace movements and leaders who changed the world through nonviolence',
                  tag: 'History'
                }
              ].map((resource, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-600">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {resource.tag}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.content}</p>
                  <button className="mt-4 text-blue-600 font-semibold hover:underline">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Action Section */}
      {activeSection === 'action' && (
        <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Take Action for Peace
            </h2>
            <div className="space-y-6">
              {[
                {
                  action: 'Start in Your Community',
                  desc: 'Organize local peace circles, interfaith dialogues, or community service projects',
                  steps: ['Identify local issues', 'Gather diverse voices', 'Create action plan', 'Build coalitions']
                },
                {
                  action: 'Educate Yourself and Others',
                  desc: 'Learn about conflict resolution, share knowledge, and mentor the next generation',
                  steps: ['Read peace literature', 'Attend workshops', 'Share on social media', 'Teach children']
                },
                {
                  action: 'Practice Peace Daily',
                  desc: 'Make conscious choices in your daily life that promote peace and understanding',
                  steps: ['Listen actively', 'Show empathy', 'Challenge prejudice', 'Choose kindness']
                },
                {
                  action: 'Support Peace Organizations',
                  desc: 'Volunteer, donate, or amplify the work of groups dedicated to peacebuilding',
                  steps: ['Research organizations', 'Volunteer time', 'Donate resources', 'Spread awareness']
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-3 text-blue-600">{item.action}</h3>
                  <p className="text-gray-700 mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.steps.map((step, i) => (
                      <span key={i} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm">
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Share Your Peace Message
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Peace Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your vision for a peaceful world..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                >
                  Send Message of Peace
                </button>
              </div>
            </div>

            {peaceMessages.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Peace Messages from Our Community</h3>
                <div className="space-y-4">
                  {peaceMessages.map(msg => (
                    <div key={msg.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-blue-600">{msg.name}</span>
                        <span className="text-sm text-gray-500">{msg.date}</span>
                      </div>
                      <p className="text-gray-700 italic">"{msg.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Peace Initiative</h3>
            <p className="text-gray-400">Building a peaceful world, one action at a time</p>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            {['About', 'Mission', 'Resources', 'Contact', 'Donate'].map(link => (
              <button key={link} className="text-gray-400 hover:text-white transition">
                {link}
              </button>
            ))}
          </div>
          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p className="mb-2">"Peace is not merely a distant goal that we seek, but a means by which we arrive at that goal." - Martin Luther King Jr.</p>
            <p>&copy; 2025 Peace Initiative. All rights reserved. Together for humanity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}