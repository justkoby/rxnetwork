import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './Home';
import About from './About';
import EmailMarketing from './EmailMarketing';
import POCMarketing from './POCMarketing';
import PrivacyPolicy from './PrivacyPolicy';
import Blog from './Blog';
import BlogPost from './BlogPost';
import GetStarted from './GetStarted';
import Chatbot from './Chatbot';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
            <img src="/RxN-Logo.png" alt="RxNetwork Logo" className="navbar-logo-img" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/email-marketing" onClick={() => setIsMenuOpen(false)}>HCP Email Marketing</NavLink></li>
          <li><NavLink to="/poc-marketing" onClick={() => setIsMenuOpen(false)}>POC Marketing</NavLink></li>
          <li><NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Clinical Content</NavLink></li>
          <li className="mobile-only-cta">
            <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
              <button className="btn-primary">Get Started Now</button>
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/get-started">
            <button className="btn-primary">Get Started Now</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/RxN-Logo_white.png" alt="RxNetwork Logo" className="footer-logo-img" />
          <p className="footer-description">
            A healthcare media platform delivering targeted access to 
            physicians and clinicians through data-driven advertising and 
            trusted medical content.
          </p>
        </div>
        
        <div className="footer-nav-group">
          <h4 className="footer-nav-title">Pages</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/email-marketing">HCP Email Marketing</Link></li>
            <li><Link to="/poc-marketing">POC Marketing</Link></li>
            <li><Link to="/blog">Clinical Content</Link></li>
            <li><Link to="/get-started">Contact us</Link></li>
          </ul>
        </div>

        <div className="footer-nav-group">
          <h4 className="footer-nav-title">Social</h4>
          <ul className="footer-links">
            <li><a href="https://tinyurl.com/yc5rr3nr" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/@GlobalRPh-com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© 2026 RxNetwork. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#terms">Terms of Use</a>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <div className="sections-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/email-marketing" element={<EmailMarketing />} />
            <Route path="/poc-marketing" element={<POCMarketing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </div>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
