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


// ============================================
// PEACE WEBSITE - COMPLETE REACT JSX
// ============================================

import React, { useState, useEffect } from 'react';
import { Heart, Globe, Users, BookOpen, MessageCircle, Shield } from 'lucide-react';

// ============================================
// MAIN APP COMPONENT
// ============================================
function PeaceWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [peaceMessages, setPeaceMessages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit peace message
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const newMessage = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleDateString()
    };

    setPeaceMessages([newMessage, ...peaceMessages]);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message of peace! Together we can make a difference.');
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="peace-website">
      <Navigation 
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <StatisticsSection />
      
      <MissionSection />
      
      <PrinciplesSection />
      
      <ActionSection />
      
      <ContactSection 
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        peaceMessages={peaceMessages}
      />
      
      <Footer />
    </div>
  );
}

// ============================================
// NAVIGATION COMPONENT
// ============================================
function Navigation({ scrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  const navItems = ['home', 'mission', 'principles', 'action', 'contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Heart className="logo-icon" />
          <span>Peace Initiative</span>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item}>
              <a onClick={() => scrollToSection(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ============================================
// HERO SECTION COMPONENT
// ============================================
function HeroSection({ scrollToSection }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="peace-icon">🕊️</div>
        <h1>Peace is the Only Solution</h1>
        <p className="subtitle">
          For Humanity to Thrive, We Must Choose Peace Over Conflict, 
          Love Over Hate, Unity Over Division
        </p>
        <div className="cta-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('mission')}
          >
            Join Our Mission
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('principles')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================
// STATISTICS SECTION COMPONENT
// ============================================
function StatisticsSection() {
  const stats = [
    { icon: <Globe size={48} />, value: '195+', label: 'Countries Need Peace' },
    { icon: <Users size={48} />, value: '8B+', label: 'People Deserve Peace' },
    { icon: <Heart size={48} />, value: '100%', label: 'Commitment to Unity' },
    { icon: <Shield size={48} />, value: '∞', label: 'Peaceful Future' }
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="stat-item">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ============================================
// MISSION SECTION COMPONENT
// ============================================
function MissionSection() {
  const missions = [
    {
      icon: <Globe size={64} />,
      title: 'Global Unity',
      description: 'We believe that despite our differences in culture, religion, and nationality, humanity shares a common destiny. Peace is not just the absence of war, but the presence of justice, equality, and mutual respect among all people.'
    },
    {
      icon: <Heart size={64} />,
      title: 'Compassionate Action',
      description: 'True peace requires action. Through education, dialogue, and community building, we work to transform hearts and minds. Every act of kindness, every bridge built between communities, brings us closer to a peaceful world.'
    }
  ];

  return (
    <section className="section mission" id="mission">
      <h2 className="section-title">Our Mission</h2>
      <div className="mission-grid">
        {missions.map((mission, index) => (
          <MissionCard key={index} {...mission} />
        ))}
      </div>
    </section>
  );
}

function MissionCard({ icon, title, description }) {
  return (
    <div className="mission-card">
      <div className="mission-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ============================================
// PRINCIPLES SECTION COMPONENT
// ============================================
function PrinciplesSection() {
  const principles = [
    {
      icon: <Shield size={48} />,
      title: 'Non-Violence',
      description: 'Resolving conflicts through dialogue, understanding, and peaceful means'
    },
    {
      icon: <Users size={48} />,
      title: 'Equality',
      description: 'Recognizing the inherent dignity and equal rights of all human beings'
    },
    {
      icon: <Heart size={48} />,
      title: 'Justice',
      description: 'Ensuring fairness, accountability, and respect for human rights globally'
    },
    {
      icon: <BookOpen size={48} />,
      title: 'Education',
      description: 'Teaching peace, tolerance, and understanding from an early age'
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Dialogue',
      description: 'Creating spaces for honest conversation between diverse communities'
    },
    {
      icon: <Globe size={48} />,
      title: 'Unity',
      description: 'Building bridges that connect humanity across all divides'
    }
  ];

  return (
    <section className="section" id="principles">
      <h2 className="section-title">Principles of Peace</h2>
      <div className="principles-grid">
        {principles.map((principle, index) => (
          <PrincipleCard key={index} {...principle} />
        ))}
      </div>
    </section>
  );
}

function PrincipleCard({ icon, title, description }) {
  return (
    <div className="principle-card">
      <div className="principle-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ============================================
// ACTION SECTION COMPONENT
// ============================================
function ActionSection() {
  const actions = [
    {
      title: 'Start in Your Community',
      description: 'Organize local peace circles, interfaith dialogues, or community service projects',
      steps: ['Identify Issues', 'Gather Voices', 'Create Plan', 'Build Coalitions']
    },
    {
      title: 'Educate Yourself and Others',
      description: 'Learn about conflict resolution, share knowledge, and mentor the next generation',
      steps: ['Read Literature', 'Attend Workshops', 'Share Online', 'Teach Children']
    },
    {
      title: 'Practice Peace Daily',
      description: 'Make conscious choices in your daily life that promote peace and understanding',
      steps: ['Listen Actively', 'Show Empathy', 'Challenge Prejudice', 'Choose Kindness']
    },
    {
      title: 'Support Peace Organizations',
      description: 'Volunteer, donate, or amplify the work of groups dedicated to peacebuilding',
      steps: ['Research Groups', 'Volunteer Time', 'Donate Resources', 'Spread Awareness']
    }
  ];

  return (
    <section className="section action" id="action">
      <h2 className="section-title">Take Action for Peace</h2>
      <div className="action-grid">
        {actions.map((action, index) => (
          <ActionCard key={index} {...action} />
        ))}
      </div>
    </section>
  );
}

function ActionCard({ title, description, steps }) {
  return (
    <div className="action-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="action-steps">
        {steps.map((step, index) => (
          <span key={index} className="step-tag">{step}</span>
        ))}
      </div>
    </div>
  );
}

// ============================================
// CONTACT SECTION COMPONENT
// ============================================
function ContactSection({ formData, handleInputChange, handleSubmit, peaceMessages }) {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Share Your Peace Message</h2>
      <div className="contact-container">
        <ContactForm 
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        
        {peaceMessages.length > 0 && (
          <MessagesList messages={peaceMessages} />
        )}
      </div>
    </section>
  );
}

function ContactForm({ formData, handleInputChange, handleSubmit }) {
  return (
    <div className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Your Peace Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
          placeholder="Share your vision for a peaceful world..."
          required
        />
      </div>
      
      <button 
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Send Message of Peace
      </button>
    </div>
  );
}

function MessagesList({ messages }) {
  return (
    <div className="messages-container">
      <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Peace Messages from Our Community
      </h3>
      {messages.map(msg => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </div>
  );
}

function MessageItem({ message }) {
  return (
    <div className="message-item">
      <div className="message-header">
        <span>{message.name}</span>
        <span>{message.date}</span>
      </div>
      <div className="message-text">"{message.message}"</div>
    </div>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  const footerLinks = ['About', 'Mission', 'Resources', 'Contact', 'Donate'];

  return (
    <footer className="footer">
      <div className="footer-icon">☮️</div>
      <h3>Peace Initiative</h3>
      <p>Building a peaceful world, one action at a time</p>
      
      <div className="footer-links">
        {footerLinks.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </div>
      
      <div className="footer-quote">
        "Peace is not merely a distant goal that we seek, but a means by which we arrive at that goal."
        <br />- Martin Luther King Jr.
      </div>
      
      <p>&copy; 2025 Peace Initiative. All rights reserved. Together for humanity.</p>
    </footer>
  );
}

// ============================================
// EXPORT
// ============================================
export default PeaceWebsite;