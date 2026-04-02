import React from 'react';
import { 
  Users, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Zap, 
  Globe, 
  Mail, 
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Database,
  Search,
  MessageSquare,
  Share2,
  BriefcaseMedical
} from 'lucide-react';

const AboutHero = () => (
  <section className="about-hero animate-blur-fade">
    <div className="container">
      <div className="about-hero-content">
        <h1 className="hero-title">
          Healthcare-Only Media. <br />
          <span>Deterministic HCP Reach. Zero Waste.</span>
        </h1>
        <p className="hero-description">
          RxNetwork connects premium medical publishers with verified HCP demand from leading pharma, hospitals, biotech, and medical device advertisers.
        </p>
        <div className="hero-cta">
          <button className="btn-primary">Partner With Us</button>
          <button className="btn-outline">See Our Capabilities</button>
        </div>
      </div>
      <div className="about-hero-image">
        <img src="/about-hero.png" alt="Medical Tech Background" />
      </div>
    </div>
  </section>
);

const WhoWeAre = () => (
  <section className="who-we-are">
    <div className="container">
      <div className="section-grid">
        <div className="section-content animate-blur-fade">
          <h2 className="section-title">Experts in <span>Medical Media</span> and HCP-Only Advertising</h2>
          <p className="section-body">
            RxNetwork brings over 40 years of combined experience in medical media, healthcare advertising, and ad operations. We manage the digital ad inventory of leading medical and drug reference destinations—including Karger.com, Drugs.com, Radiopaedia, and Questex—and deliver HCP-only demand from Fortune 500 pharmaceutical companies and their agencies.
          </p>
          <p className="section-body">
            Our focus is singular: health and medical advertising that reaches verified clinicians with precision, transparency, and measurable impact.
          </p>
        </div>
        <div className="icon-grid animate-blur-fade stagger-2">
          <div className="stat-icon-card">
            <TrendingUp size={32} />
            <h4>40+ years experience</h4>
          </div>
          <div className="stat-icon-card">
            <Users size={32} />
            <h4>HCP-only demand</h4>
          </div>
          <div className="stat-icon-card">
            <ShieldCheck size={32} />
            <h4>Top medical publishers</h4>
          </div>
          <div className="stat-icon-card">
            <Target size={32} />
            <h4>Deterministic targeting</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OurMission = () => (
  <section className="our-mission">
    <div className="container text-center">
      <h2 className="section-title animate-blur-fade">Enabling Healthcare Brands to <span>Reach the Right Clinicians.</span></h2>
      <p className="section-body text-center animate-blur-fade stagger-1">
        Our mission is to help pharmaceuticals, medical device firms, and hospitals navigate the complex digital landscape with surgical precision.
      </p>
      <div className="mission-grid animate-blur-fade stagger-2">
        <div className="mission-item">
          <div className="mission-icon">
            <Target size={48} strokeWidth={1.5} />
          </div>
          <p>Precision Targeting</p>
        </div>
        <div className="mission-item">
          <div className="mission-icon">
            <Share2 size={48} strokeWidth={1.5} />
          </div>
          <p>Seamless Integration</p>
        </div>
        <div className="mission-item">
          <div className="mission-icon">
            <BriefcaseMedical size={48} strokeWidth={1.5} />
          </div>
          <p>Clinical Context</p>
        </div>
      </div>
    </div>
  </section>
);

const WhatWeDo = () => {
  const services = [
    {
      title: "Publisher Monetization",
      desc: "We secure and deliver HCP-only digital ad budgets from pharma, agencies, hospitals, biotech, medical device firms, and select non-endemic advertisers (Microsoft, FedEx, UPS, Chase, Citi).",
      icon: <TrendingUp size={28} />
    },
    {
      title: "HCP-Only Campaign Execution",
      desc: "We manage NPI-targeted and physician list-match campaigns, integrate the AIM physician dataset with Prebid and GAM, and generate the PLD reporting required by U.S. pharma clients.",
      icon: <Activity size={28} />
    },
    {
      title: "Performance & Optimization",
      desc: "We manage campaigns against KPIs—CTR, viewability, SOV—and continuously optimize for effectiveness and revenue lift.",
      icon: <Zap size={28} />
    }
  ];

  return (
    <section className="what-we-do">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title animate-blur-fade">A Full-Stack <span>Healthcare Media Platform</span></h2>
          <p className="section-subtitle animate-blur-fade stagger-1">Connecting premium medical publishers with high-quality, HCP-verified demand.</p>
        </div>
        <div className="three-column-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card animate-blur-fade stagger-${i+1}`}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetingMatrix = () => (
  <section className="targeting-matrix" id="how-it-works">
    <div className="container">
      <h2 className="section-title text-center animate-blur-fade">Contextual <span>VS.</span> Deterministic Medical Targeting</h2>
      <div className="matrix-wrapper animate-blur-fade stagger-1">
        <div className="matrix-side contextual">
          <div className="matrix-header">
            <Target size={24} />
            <h3>Contextual Targeting</h3>
          </div>
          <div className="matrix-items">
            <div className="matrix-item">
              <div className="item-icon"><LayoutGrid size={32} /></div>
              <div className="item-text">
                <span className="label">Medical Journals</span>
                <p>Target based on Content & Relevance</p>
              </div>
            </div>
            <div className="matrix-item">
              <div className="item-icon"><Search size={32} /></div>
              <div className="item-text">
                <span className="label">Brain Scans</span>
                <p>BRAIN/CT SCANS & DIAGNOSTICS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="matrix-separator">VS.</div>
        <div className="matrix-side deterministic">
          <div className="matrix-header">
            <Users size={24} />
            <h3>Deterministic Targeting</h3>
          </div>
          <div className="matrix-items">
            <div className="matrix-item">
              <div className="item-icon"><Database size={32} /></div>
              <div className="item-text">
                <span className="label">National Provider Identifier</span>
                <p>Target known individuals via NPI Database</p>
              </div>
            </div>
            <div className="matrix-item">
              <div className="item-icon"><ShieldCheck size={32} /></div>
              <div className="item-text">
                <span className="label">Verified Physician Profiles</span>
                <p>Target via authenticated physician logins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const PartnerManagement = () => (
  <section className="partner-management">
    <div className="container">
      <div className="section-grid align-center">
        <div className="section-content animate-blur-fade">
          <h2 className="section-title">White-Glove Support <span>for Every Publisher</span></h2>
          <p className="section-body">
            Every publisher receives a dedicated partner manager who oversees:
          </p>
          <ul className="support-list">
            <li><CheckCircle2 size={18} /> Agency relations</li>
            <li><CheckCircle2 size={18} /> Monthly campaign reporting</li>
            <li><CheckCircle2 size={18} /> Advertiser billing and invoicing</li>
            <li><CheckCircle2 size={18} /> Campaign management and optimization</li>
          </ul>
        </div>
        <div className="section-visual animate-blur-fade stagger-2">
          <div className="tech-box">
            <Cpu size={120} strokeWidth={1} />
            <div className="tech-label">Dedicated Operation Center</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AdvertisingFootprint = () => {
  const formats = [
    { name: "Leaderboard", size: "728 × 90", class: "leaderboard" },
    { name: "Medium Rectangle", size: "300 × 250", class: "medium-rectangle" },
    { name: "Mobile Anchor", size: "320 × 50", class: "mobile-anchor" },
    { name: "Native Unit", size: "Dynamic Flex", class: "native-unit" }
  ];

  return (
    <section className="advertising-footprint">
      <div className="container">
        <h2 className="section-title text-center animate-blur-fade">Premium Ad Formats Across <span>Desktop, Mobile, Email, and Social.</span></h2>
        <div className="ad-format-grid animate-blur-fade stagger-1">
          {formats.map((f, i) => (
            <div key={i} className="ad-format-card">
              <div className={`ad-preview ${f.class}`}>
                <div className="ad-box"></div>
              </div>
              <h4>{f.name}</h4>
              <p>{f.size}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpandedServices = () => {
  const services = [
    {
      title: "Social Media",
      desc: "Helping healthcare publishers and brands engage HCP and patient audiences.",
      icon: <Globe size={28} />
    },
    {
      title: "Analytics",
      desc: "Diagnosing performance issues beyond CTR and open rates to uncover why messages aren’t being seen or acted on.",
      icon: <BarChart3 size={28} />
    },
    {
      title: "Ad Operations & Optimization",
      desc: "Serving, managing, and optimizing campaigns across both endemic and vetted non-endemic sites.",
      icon: <Settings size={28} />
    }
  ];

  return (
    <section className="expanded-services">
      <div className="container">
        <h2 className="section-title text-center animate-blur-fade">Beyond Monetization: <span>Full-Spectrum Digital Support</span></h2>
        <div className="three-column-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card-alt animate-blur-fade stagger-${i+1}`}>
              <div className="icon-box">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeServe = () => {
  const audiences = [
    "Medical publishers", "Pharmaceutical brands", "Medical device manufacturers",
    "Hospital systems", "Biotech firms", "Healthcare-focused agencies", 
    "Non-endemic brands targeting HCPs"
  ];

  return (
    <section className="who-we-serve">
      <div className="container">
        <h2 className="section-title text-center animate-blur-fade">Built for Healthcare Organizations That Require <span>Precision and Scale</span></h2>
        <div className="logo-wall animate-blur-fade stagger-1">
          {audiences.map((a, i) => (
            <div key={i} className="audience-tag">{a}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutContact = () => (
  <section className="about-contact" id="contact">
    <div className="container">
      <div className="contact-card animate-blur-fade">
        <h2 className="section-title white">Let’s Build Your <span>HCP-Only Advertising Strategy</span></h2>
        <p className="white opacity-8">Connect with our experts today to maximize your media impact.</p>
        <button className="btn-primary white-pulse">Contact Us</button>
      </div>
    </div>
  </section>
);

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <WhoWeAre />
      <OurMission />
      <WhatWeDo />
      <TargetingMatrix />
      <PartnerManagement />
      <AdvertisingFootprint />
      <ExpandedServices />
      <WhoWeServe />
      <AboutContact />
    </div>
  );
};

// Placeholder for missing icons/settings if not imported correctly
const Settings = ({ size }) => <LayoutGrid size={size} />;

export default About;
