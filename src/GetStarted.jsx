import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const GetStarted = () => {
  return (
    <div className="get-started-page animate-blur-fade">
      <div className="container">
        <header className="page-header text-center">
          <span className="section-tag">Start Your Campaign</span>
          <h1 className="section-title">Schedule a <span>Strategy Session</span></h1>
          <p className="section-body mx-auto" style={{ maxWidth: '700px' }}>
            Ready to reach clinicians with precision? Connect with our team to explore 
            tailored audience segments, programmatic POC, and high-impact email delivery.
          </p>
        </header>

        <div className="get-started-grid">
          <div className="contact-form-container">
            <h3>Send us an inquiry</h3>
            <form className="clinical-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Dr. John Smith" />
                </div>
                <div className="form-group">
                  <label>Company / Organization</label>
                  <input type="text" placeholder="Healthcare Brand" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>

              <div className="form-group">
                <label>Service of Interest</label>
                <select>
                  <option>Email Marketing</option>
                  <option>Point-of-Care (POC)</option>
                  <option>Audience Segmenting</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label>How can we help?</label>
                <textarea rows="5" placeholder="Tell us about your campaign goals..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>

          <div className="office-locations">
            <h3>Our Offices</h3>
            <div className="location-card">
              <div className="location-icon"><MapPin size={24} /></div>
              <div className="location-info">
                <h4>New York</h4>
                <p>914-208-6464</p>
                <p>New York Operations Center</p>
              </div>
            </div>

            <div className="location-card">
              <div className="location-icon"><MapPin size={24} /></div>
              <div className="location-info">
                <h4>Connecticut</h4>
                <p>203-703-9018</p>
                <p>Northeast Strategic Hub</p>
              </div>
            </div>

            <div className="service-commitment">
              <h4>Our commitment to quality</h4>
              <ul className="commitment-list">
                <li>Proven engagement benchmarks</li>
                <li>Verified HCP lists exclusively</li>
                <li>Deterministic targeting & reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
