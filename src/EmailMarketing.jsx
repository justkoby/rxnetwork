import React from 'react';
import { 
  Mail, 
  Target, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  Layers, 
  Zap, 
  FileText, 
  MousePointer2, 
  Settings, 
  ArrowRight,
  TrendingUp,
  Globe,
  Award,
  ChevronRight,
  Layout,
  Smartphone,
  Cpu
} from 'lucide-react';

const EmailHero = () => (
  <section className="email-hero animate-blur-fade">
    <div className="container">
      <div className="email-hero-content">
        <div className="trust-badges">
          <span className="badge"><ShieldCheck size={16} /> Verified HCPs</span>
          <span className="badge"><Award size={16} /> Compliance-First</span>
        </div>
        <h1 className="hero-title">
          Premium <span>HCP Email Marketing</span>
        </h1>
        <p className="hero-subtitle">
          Direct, compliant access to oncologists, cardiologists, hematologists, and other high-value specialists.
        </p>
        <p className="hero-body-text">
          Specialized email programs built for clinicians: verified, healthcare-only audiences, high engagement, and compliance-first creative standards. Deliver evidence-aligned content that clinicians open, read, and act on.
        </p>
        <div className="hero-cta">
          <button className="btn-primary">Request a Media Kit</button>
          <button className="btn-outline">Get Audience Segmentation</button>
        </div>
      </div>
      <div className="email-hero-visual">
        <img src="/email-hero.png" alt="Clinical Inbox Mockup" />
      </div>
    </div>
  </section>
);

const WhyEmail = () => {
  const benefits = [
    {
      title: "Direct access to decision-makers",
      desc: "Reach prescribing clinicians and care leaders directly in their professional workspace.",
      icon: <Users size={32} />
    },
    {
      title: "Higher engagement",
      desc: "Clinicians prefer curated, evidence-based content delivered via trusted channels.",
      icon: <TrendingUp size={32} />
    },
    {
      title: "Compliance and control",
      desc: "Pre-campaign creative review and regulatory safeguards ensure peak alignment.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Measurable outcomes",
      desc: "Clear metrics for opens, clicks, and conversions on clinical content.",
      icon: <BarChart3 size={32} />
    }
  ];

  return (
    <section className="why-email gray-bg">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why brands choose <span>HCP email</span></h2>
          <p className="section-body text-center">
            Email remains the top professional communication channel for clinicians because it is direct, trusted, and education-focused. Compared with social or display, email delivers higher engagement.
          </p>
        </div>
        <div className="four-column-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card animate-blur-fade stagger-1">
              <div className="icon-box">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AudienceVerification = () => {
  const personas = [
    { title: "Specialties", items: ["Oncology", "Hematology", "Cardiology", "Plus high-value specialties"] },
    { title: "Roles", items: ["Physicians (MD/DO)", "Advanced Practice Providers", "Fellows & Residents"] },
    { title: "Settings", items: ["Academic centers", "Community hospitals", "Private/group practices"] },
    { title: "Geography", items: ["Country and region", "State-level targeting", "Urban/Rural clusters"] }
  ];

  return (
    <section className="audience-verification">
      <div className="container">
        <div className="section-grid align-center">
          <div className="section-content">
            <h2 className="section-title">Verified, <span>healthcare-only audiences</span></h2>
            <p className="section-body">
              Profession-based verification and strict list hygiene ensure advertisers reach licensed, practicing clinicians—not lookalikes or consumers.
            </p>
            <button className="btn-outline">View Segmentation Options</button>
          </div>
          <div className="persona-tiles animate-blur-fade stagger-2">
            {personas.map((p, i) => (
              <div key={i} className="persona-tile">
                <div className="tile-header">
                  <CheckCircle2 size={20} className="check-icon" />
                  <h4>{p.title}</h4>
                </div>
                <ul>
                  {p.items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CampaignFormats = () => (
  <section className="campaign-formats gray-bg">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-title">Formats built for <span>clinical impact</span></h2>
        <p className="section-body text-center">
          Flexible campaign formats let advertisers match message type to clinical intent—exclusive dedicated sends or sponsored educational content.
        </p>
      </div>
      <div className="formats-grid">
        <div className="formats-visual animate-blur-fade">
          <img src="/hand-holding-phone-mail.png" alt="Email Template Mockups" />
        </div>
        <div className="formats-content">
          <div className="format-list-item">
            <div className="format-icon"><Mail /></div>
            <div>
              <h4>Dedicated (Solo) Email</h4>
              <p>Exclusive brand exposure for launches or major announcements.</p>
            </div>
          </div>
          <div className="format-list-item">
            <div className="format-icon"><FileText /></div>
            <div>
              <h4>Sponsored Educational Content</h4>
              <p>Whitepapers, clinical resources, and CME integrations.</p>
            </div>
          </div>
          <div className="format-list-item">
            <div className="format-icon"><Layout /></div>
            <div>
              <h4>Newsletter Placements</h4>
              <p>Native or banner integrations in trusted medical publications.</p>
            </div>
          </div>
          <div className="format-list-item">
            <div className="format-icon"><Users /></div>
            <div>
              <h4>Recruitment Campaigns</h4>
              <p>Targeted hiring outreach to matched HCP profiles.</p>
            </div>
          </div>
          
          <div className="compliance-checklist">
            <h5><ShieldCheck size={18} /> Creative & Compliance Checklist</h5>
            <ul>
              <li>Evidence-aligned content and fair balance</li>
              <li>PI links and mandatory disclaimers</li>
              <li>Pre-campaign creative review</li>
            </ul>
            <button className="btn-text">Request Creative Guidelines <ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TargetingSegmentation = () => (
  <section className="targeting-metrics dark-section">
    <div className="container">
      <div className="section-grid align-center">
        <div className="section-content">
          <h2 className="section-title white">Precision segmentation for <span>specialty reach</span></h2>
          <p className="section-body light-text">
            Our proprietary identity graph maps HCP behavior across the network, allowing you to slice by specialty, sub-specialty, prescribing volume, and facility type.
          </p>
          
          <div className="targeting-stats-grid">
            <div className="t-stat-card">
              <div className="t-stat-value">98%</div>
              <div className="t-stat-info">
                <strong>Accuracy Rating</strong>
                <p>Validated against NPI and specialty boards</p>
              </div>
            </div>
            <div className="t-stat-card">
              <div className="t-stat-value">1.2M</div>
              <div className="t-stat-info">
                <strong>Segment Combinations</strong>
                <p>Custom tailored audience modeling</p>
              </div>
            </div>
          </div>
          
          <button className="btn-primary blue-glow">Customize My Segment</button>
        </div>
        
        <div className="targeting-matrix-card animate-blur-fade stagger-2">
          <div className="matrix-card-header">
            <h4>Targeting Matrix</h4>
            <span className="live-badge">Real-time Data</span>
          </div>
          
          <div className="matrix-tiles">
            <div className="matrix-tile active">
              <span className="tile-label">Specialty</span>
              <span className="tile-value">Oncologists</span>
            </div>
            <div className="matrix-tile">
              <span className="tile-label">Sub-Focus</span>
              <span className="tile-value">Solid Tumors</span>
            </div>
            <div className="matrix-tile">
              <span className="tile-label">Location</span>
              <span className="tile-value">Tier 1 Centers</span>
            </div>
          </div>
          
          <div className="matrix-results">
            <div className="results-count">12,403</div>
            <div className="results-label">HCPs in Segment</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PerformanceMetrics = () => (
  <section className="performance-metrics gray-bg">
    <div className="container">
      <div className="section-grid align-center">
        <div className="dashboard-visual animate-blur-fade">
          <video 
            src="/proven-video.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="performance-video"
          />
        </div>
        <div className="section-content performance-text-block performance-alignment-fix">
          <h2 className="section-title">Proven engagement and <span>transparent reporting</span></h2>
          <p className="section-body">
            RxNetwork delivers industry-leading performance benchmarks, providing clinicians with high-value clinical updates and brands with actionable insights.
          </p>
          <ul className="kpi-list-refined">
            <li>
              <CheckCircle2 size={18} className="kpi-icon" />
              <span>Real-time engagement tracking (Specialty benchmarked)</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="kpi-icon" />
              <span>Verified HCP clicks and interaction depth reporting</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="kpi-icon" />
              <span>Full compliance logging and auditable delivery path</span>
            </li>
          </ul>
          <div className="performance-cta">
            <button 
              className="btn-primary"
              onClick={() => window.location.href = '/get-started'}
            >
              View Reporting Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingPackages = () => (
  <section className="pricing-packages">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-title">Pricing & <span>Packages</span></h2>
        <p className="section-body text-center">
          Scalable solutions for medical startups to global pharma.
        </p>
      </div>
      
      <div className="pricing-grid">
        <div className="pricing-card">
          <span className="package-tier">Starter</span>
          <h4>Single Segment</h4>
          <p className="price-desc">Perfect for targeted niche launches or recruitment drives.</p>
          <button 
            className="btn-outline w-100"
            onClick={() => window.location.href = '/get-started'}
          >
            Request Pricing
          </button>
        </div>
        
        <div className="pricing-card highlighted">
          <div className="recommended-badge">Recommended</div>
          <span className="package-tier">Series</span>
          <h4>Multi-Touch Flow</h4>
          <p className="price-desc">4-week educational series designed for sustained clinical awareness.</p>
          <button 
            className="btn-primary w-100"
            onClick={() => window.location.href = '/get-started'}
          >
            Request Pricing
          </button>
        </div>
        
        <div className="pricing-card">
          <span className="package-tier">Enterprise</span>
          <h4>Always-On Mastery</h4>
          <p className="price-desc">Unlimited sends to entire specialty universe with dedicated account team.</p>
          <button 
            className="btn-outline w-100"
            onClick={() => window.location.href = '/get-started'}
          >
            Request Pricing
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ComplianceTrust = () => {
  const complianceFeatures = [
    {
      title: "Pre-campaign MLR Review",
      desc: "We accommodate full medical-legal-regulatory approval cycles into our deployment timelines.",
      icon: <FileText size={24} />,
      color: "green"
    },
    {
      title: "Mandatory Disclaimer Logic",
      desc: "Automated placement of required ISI and PI links across all campaign formats.",
      icon: <ShieldCheck size={24} />,
      color: "blue"
    },
    {
      title: "Editorial Separation",
      desc: "Clear 'Sponsored' labeling to maintain clinical trust and editorial integrity.",
      icon: <Award size={24} />,
      color: "purple"
    }
  ];

  return (
    <section className="compliance-trust gray-bg">
      <div className="container">
        <div className="section-grid align-center">
          <div className="section-content">
            <h2 className="section-title">Regulatory-first <span>execution</span></h2>
            
            <div className="compliance-features-list">
              {complianceFeatures.map((f, i) => (
                <div key={i} className="compliance-feature-item">
                  <div className={`feature-icon-box ${f.color}`}>
                    {f.icon}
                  </div>
                  <div className="feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-text mt-4">Review Compliance Process <ArrowRight size={16} /></button>
          </div>
          
          <div className="compliance-flow-card animate-blur-fade stagger-1">
            <h5 className="flow-title">Deployment Flowchart</h5>
            
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number"><FileText size={14} /></div>
                <div className="step-card">Creative Assets & ISI Receipt</div>
              </div>
              <div className="flow-step">
                <div className="step-number"><ShieldCheck size={14} /></div>
                <div className="step-card">Internal QA & Format Check</div>
              </div>
              <div className="flow-step">
                <div className="step-number"><CheckCircle2 size={14} /></div>
                <div className="step-card">Client/MLR Final Sign-off</div>
              </div>
              
              <div className="flow-final">
                <div className="final-icon"><ChevronRight size={20} /></div>
                <div 
                  className="final-bar"
                  onClick={() => window.location.href = '/get-started'}
                  style={{ cursor: 'pointer' }}
                >
                  Secure Deployment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseExamples = () => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const scrollRef = React.useRef(null);

  const handleScroll = (e) => {
    if (window.innerWidth > 768) return;
    const scrollLeft = e.target.scrollLeft;
    const itemWidth = e.target.offsetWidth;
    const newIdx = Math.round(scrollLeft / itemWidth);
    if (newIdx !== activeIdx) {
      setActiveIdx(newIdx);
    }
  };

  const cases = [
    { result: "2.4% CTR", obj: "Product Launch", desc: "Dedicated email to oncologists drove high-value clinical traffic." },
    { result: "48% Open Rate", obj: "Educational Series", desc: "Sponsored content series increased repeat engagement." },
    { result: "120+ Leads", obj: "Recruitment", desc: "Targeted sends to cardiologists produced qualified applicants." }
  ];

  return (
    <section className="case-examples">
      <div className="container">
        <h2 className="section-title text-center">Real outcomes from <span>specialist campaigns</span></h2>
        <div className="case-grid-wrapper">
          <div 
            className="three-column-grid"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {cases.map((c, i) => (
              <div key={i} className={`case-card animate-blur-fade stagger-${i+1}`}>
                <span className="case-result">{c.result}</span>
                <span className="case-obj">{c.obj}</span>
                <p>{c.desc}</p>
                <button 
                  className="btn-text"
                  onClick={() => window.location.href = '/get-started'}
                >
                  Read Case Study <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
          <div className="carousel-dots about-dots">
            {cases.map((_, i) => (
              <div 
                key={i} 
                className={`dot ${activeIdx === i ? 'active' : ''}`}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: i * scrollRef.current.offsetWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <button 
            className="btn-primary"
            onClick={() => window.location.href = '/get-started'}
          >
            Request Full Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

const HowWeWork = () => (
  <section className="how-we-work-alt gray-bg">
    <div className="container">
      <h2 className="section-title text-center">Strategy, <span>execution, optimization</span></h2>
      <div className="process-strip-wrapper">
        <div className="process-strip">
          <div className="process-node-alt">
            <div className="node-number">1</div>
            <div className="node-content">
              <strong>Plan</strong>
              <p>Audience strategy</p>
            </div>
          </div>
          <div className="node-line"></div>
          <div className="process-node-alt">
            <div className="node-number">2</div>
            <div className="node-content">
              <strong>Create</strong>
              <p>Compliant creative</p>
            </div>
          </div>
          <div className="node-line"></div>
          <div className="process-node-alt">
            <div className="node-number">3</div>
            <div className="node-content">
              <strong>Send</strong>
              <p>Verified delivery</p>
            </div>
          </div>
          <div className="node-line"></div>
          <div className="process-node-alt">
            <div className="node-number">4</div>
            <div className="node-content">
              <strong>Measure</strong>
              <p>Transparent reports</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button 
          className="btn-primary"
          onClick={() => window.location.href = '/get-started'}
        >
          Start a Campaign
        </button>
      </div>
    </div>
  </section>
);

const EmailContact = () => (
  <section className="email-contact">
    <div className="container">
      <div className="contact-card animate-blur-fade">
        <h2 className="section-title white">Start a compliant, <span>high-impact HCP email program</span></h2>
        <p className="white opacity-8">Custom proposals, audience segmentation, and strategy support are included.</p>
        <button className="btn-primary white-pulse">Contact Us</button>
      </div>
    </div>
  </section>
);

const EmailMarketing = () => {
  return (
    <div className="email-marketing-page">
      <EmailHero />
      <WhyEmail />
      <AudienceVerification />
      <CampaignFormats />
      <TargetingSegmentation />
      <PerformanceMetrics />
      <PricingPackages />
      <ComplianceTrust />
      <CaseExamples />
      <HowWeWork />
      <EmailContact />
    </div>
  );
};

export default EmailMarketing;
