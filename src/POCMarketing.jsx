import React from 'react';
import { 
  Target, 
  MousePointer2, 
  BarChart3, 
  Stethoscope, 
  FileText, 
  PieChart, 
  Layers, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Monitor,
  Cpu,
  Zap,
  CheckCircle2,
  Users,
  Sparkles,
  Hourglass,
  Calculator,
  Library,
  Video,
  Pill,
  Radio,
  Network
} from 'lucide-react';

const POCStatsCard = () => (
  <div className="poc-stats-card animate-slide-in">
    <div className="poc-stat-row">
      <div className="poc-icon-box blue">
        <BarChart3 size={24} />
      </div>
      <div className="poc-stat-content">
        <h4>MONTHLY UNIQUES</h4>
        <p>8M+ HCPs</p>
      </div>
    </div>
    <div className="poc-stat-row">
      <div className="poc-icon-box vibrant">
        <Target size={24} />
      </div>
      <div className="poc-stat-content">
        <h4>MONTHLY PAGE VIEWS</h4>
        <p>24M+ Impressions</p>
      </div>
    </div>
    <div className="poc-stat-row">
      <div className="poc-icon-box dark">
        <ShieldCheck size={24} />
      </div>
      <div className="poc-stat-content">
        <h4>PRECISION</h4>
        <p>NPI-Level Targeting</p>
      </div>
    </div>
  </div>
);

const POCHero = () => (
  <section className="poc-hero-refined animate-blur-fade">
    <div className="container">
      <div className="poc-hero-grid">
        <div className="poc-hero-content">
          <div className="poc-badge-pill">
            <Sparkles size={14} />
            <span>POC RE-ENGINEERED</span>
          </div>
          <h1 className="poc-headline">
            Point-of-Care<br />
            Marketing,<br />
            Re-Engineered
          </h1>
          <p className="poc-hero-subtitle">
            Reach clinicians at the exact moment of learning, decision-making, and patient interaction—powered by medical-only content and programmatic precision.
          </p>
          
          <div className="poc-quote-block">
            <p className="poc-quote-text">
              “RxNetwork delivers point-of-care impact through a portfolio built exclusively for healthcare. Nothing sports. Nothing politics. Nothing finance. Just medical.”
            </p>
          </div>

          <div className="hero-cta">
            <button className="btn-primary">Request POC Strategy Overview</button>
            <button className="btn-outline">See Audience Insights</button>
          </div>
        </div>
        <div className="poc-hero-visual">
          <POCStatsCard />
        </div>
      </div>
    </div>
  </section>
);

const WhatIsPOC = () => (
  <section className="poc-features-section">
    <div className="container">
      <div className="section-header text-center mb-5">
        <h2 className="section-title">A Modern, Data-Driven Approach to <span>Point-of-Care</span></h2>
        <p className="section-body text-center">
          Traditional point-of-care channels rely on static placements and fragmented delivery. 
          RxNetwork brings a digital-first model: programmatic activation, NPI-level precision, 
          and clinically relevant environments that clinicians trust.
        </p>
      </div>
      
      <div className="poc-feature-grid">
        <div className="poc-feature-card">
          <div className="poc-icon-pill">
            <Stethoscope size={24} />
          </div>
          <h3>100% medical-only environment</h3>
          <p>Purely clinical context ensures your brand resides in a space free of non-professional noise.</p>
        </div>
        
        <div className="poc-feature-card">
          <div className="poc-icon-pill">
            <Zap size={24} />
          </div>
          <h3>Programmatic delivery</h3>
          <p>Agile, real-time activation that optimizes for reach and engagement across our premium network.</p>
        </div>
        
        <div className="poc-feature-card">
          <div className="poc-icon-pill">
            <Target size={24} />
          </div>
          <h3>Advanced PLD targeting</h3>
          <p>Precision targeting at the NPI level using physician-level data for maximum message relevance.</p>
        </div>
        
        <div className="poc-feature-card">
          <div className="poc-icon-pill">
            <Hourglass size={24} />
          </div>
          <h3>High-intent moments</h3>
          <p>Intercept clinicians during diagnosis, drug calculation, and treatment planning cycles.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyPOC = () => (
  <section className="poc-influence-section">
    <div className="container">
      <div className="poc-influence-grid">
        <div className="poc-image-wrapper animate-slide-in">
          <img src="/clinician-tablet.png" alt="Clinician using tablet" className="poc-clinician-img" />
          <div className="poc-workflow-card">
            <div className="workflow-status">
              <div className="workflow-dot" />
              <span>Workflow Integration</span>
            </div>
            <p>"Integration at the moment of treatment increases message recall by 3.4x compared to traditional digital."</p>
          </div>
        </div>
        
        <div className="poc-content-wrapper">
          <h2 className="poc-headline" style={{ fontSize: '3.5rem' }}>
            Influence Clinical<br />
            Decisions at the Moment<br />
            of Need
          </h2>
          <p className="poc-hero-subtitle">
            Clinicians rely on digital resources throughout the care journey. 
            With over 24M monthly page views and 8M monthly uniques, 
            RxNetwork provides access to HCPs at the point of care.
          </p>
          
          <div className="poc-numbered-list">
            <div className="poc-number-item">
              <div className="poc-number-circle">1</div>
              <div className="poc-number-content">
                <h4>Diagnosis Exploration</h4>
                <p>HCPs researching symptoms and diagnostic protocols.</p>
              </div>
            </div>
            
            <div className="poc-number-item">
              <div className="poc-number-circle">2</div>
              <div className="poc-number-content">
                <h4>Treatment Calculation</h4>
                <p>Final validation of dosages and contraindications.</p>
              </div>
            </div>
            
            <div className="poc-number-item">
              <div className="poc-number-circle">3</div>
              <div className="poc-number-content">
                <h4>Patient Education</h4>
                <p>Sharing resources with patients during the consult.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const POCInventory = () => (
  <section className="poc-inventory-section">
    <div className="container">
      <div className="section-header text-center mb-5">
        <h2 className="poc-headline text-center" style={{ fontSize: '3rem', margin: '0 auto 1.5rem', textAlign: 'center' }}>Where Your Message Appears</h2>
        <p className="poc-hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          Our POC environments are built around original, expert-developed medical resources like clinical calculators, medical reference materials, and specialty articles.
        </p>
      </div>
      
      <div className="poc-inventory-grid">
        <div className="poc-inventory-card">
          <div className="inventory-icon"><FileText size={28} /></div>
          <h4>Clinical Articles</h4>
          <p>Specialist-authored medical insights.</p>
        </div>
        <div className="poc-inventory-card">
          <div className="inventory-icon"><Calculator size={28} /></div>
          <h4>Calculators</h4>
          <p>Precision dosage and risk tools.</p>
        </div>
        <div className="poc-inventory-card">
          <div className="inventory-icon"><Library size={28} /></div>
          <h4>Reference Hubs</h4>
          <p>Specialty-specific resource centers.</p>
        </div>
        <div className="poc-inventory-card">
          <div className="inventory-icon"><Users size={28} /></div>
          <h4>Patient Ed</h4>
          <p>Visual aids and discharge materials.</p>
        </div>
        <div className="poc-inventory-card">
          <div className="inventory-icon"><Video size={28} /></div>
          <h4>Multimedia</h4>
          <p>Procedural videos and medical imagery.</p>
        </div>
      </div>
    </div>
  </section>
);

const POCTargeting = () => (
  <section className="poc-targeting-section">
    <div className="container">
      <div className="poc-targeting-card">
        <div className="poc-targeting-content">
          <h2 className="poc-targeting-title">
            Precision Targeting<br />
            for Maximum<br />
            Clinical Relevance
          </h2>
          <p className="poc-targeting-body">
            Our targeting methodology bypasses generic proxies. We reach the exact prescriber through verified identification layers.
          </p>
          
          <div className="poc-targeting-grid">
            <div className="targeting-item">
              <h4>NPI</h4>
              <p>NATIONAL PROVIDER IDENTIFIER</p>
            </div>
            <div className="targeting-item">
              <h4>ME</h4>
              <p>MEDICAL EDUCATION NUMBER</p>
            </div>
            <div className="targeting-item">
              <h4>DGID</h4>
              <p>DIGITAL IDENTIFIER</p>
            </div>
            <div className="targeting-item">
              <h4>Contextual</h4>
              <p>CONTENT-SPECIFIC PLACEMENT</p>
            </div>
          </div>
        </div>
        
        <div className="poc-targeting-visual">
          <div className="poc-verification-panel">
            <div className="verification-row">
              <span>Segment Verification</span>
              <strong>99.2%</strong>
            </div>
            <div className="verification-row">
              <span>Reach Precision</span>
              <strong>NPI-Level</strong>
            </div>
            <div className="verification-row">
              <span>Fraud Mitigation</span>
              <strong><ShieldCheck size={18} /></strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const POCUseCases = () => {
  const cases = [
    {
      title: "Brand Awareness at Diagnosis",
      desc: "Position your brand first as HCPs identify patient needs and start diagnostic workups.",
      icon: <Stethoscope size={24} />,
      active: true
    },
    {
      title: "Treatment Consideration",
      desc: "Influence the prescription decision during the critical window of therapy selection.",
      icon: <Pill size={24} />,
      active: false
    },
    {
      title: "Patient-Education Support",
      desc: "Drive adherence by providing valuable resources at the moment of patient hand-off.",
      icon: <Radio size={24} />,
      active: false
    },
    {
      title: "Health System Messaging",
      desc: "Deliver nuanced messages regarding devices and health system protocols.",
      icon: <Network size={24} />,
      active: false
    }
  ];

  return (
    <section className="poc-use-cases-section">
      <div className="container">
        <h2 className="poc-headline text-center mb-5" style={{ fontSize: '3rem' }}>POC Use Cases</h2>
        <div className="poc-use-cases-grid">
          {cases.map((c, i) => (
            <div key={i} className="poc-use-case-card">
              <div className={`use-case-icon ${c.active ? 'active' : ''}`}>
                {c.icon}
              </div>
              <div className="use-case-content">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
              <a href="#learn-more" className="use-case-link" onClick={e => e.preventDefault()}>
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgrammaticAdvantage = () => (
  <section className="poc-programmatic-section">
    <div className="container">
      <div className="poc-programmatic-grid">
        <div className="poc-programmatic-content">
          <h2 className="poc-headline" style={{ fontSize: '3rem', marginBottom: '3rem' }}>
            Programmatic Efficiency<br />
            Meets Clinical Precision
          </h2>
          
          <div className="poc-efficiency-list">
            <div className="efficiency-item">
              <CheckCircle2 className="efficiency-icon" size={24} />
              <span>AI-powered ad blocking and brand safety</span>
            </div>
            <div className="efficiency-item">
              <CheckCircle2 className="efficiency-icon" size={24} />
              <span>MRC-accredited viewability optimization</span>
            </div>
            <div className="efficiency-item">
              <CheckCircle2 className="efficiency-icon" size={24} />
              <span>Lightweight, publisher-friendly deployment</span>
            </div>
            <div className="efficiency-item">
              <CheckCircle2 className="efficiency-icon" size={24} />
              <span>Real-time KPI and NPI-level optimization</span>
            </div>
          </div>
        </div>
        
        <div className="poc-programmatic-visual">
          <div className="poc-performance-card">
            <h4 className="poc-performance-title">Performance Metrics</h4>
            
            <div className="poc-performance-grid">
              <div className="perf-metric">
                <strong>88%</strong>
                <span>Viewability</span>
              </div>
              <div className="perf-metric">
                <strong>0.45%</strong>
                <span>CTR Peak</span>
              </div>
              <div className="perf-metric">
                <strong>100%</strong>
                <span>Brand Safe</span>
              </div>
              <div className="perf-metric">
                <strong>Zero</strong>
                <span>Ad Fraud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseTeasers = () => (
  <section className="poc-impact-section">
    <div className="container">
      <h2 className="poc-headline text-center" style={{ fontSize: '3rem', marginBottom: '4rem' }}>POC Impact in Action</h2>
      
      <div className="poc-impact-grid">
        <div className="impact-card">
          <span className="impact-tag">ONCOLOGY</span>
          <h4 className="impact-title">Targeting Rare Mutation<br />Specialist HCPs</h4>
          <div className="impact-stat">+24%</div>
          <p className="impact-desc">Increase in NPI-level brand awareness during therapy initiation window.</p>
        </div>
        
        <div className="impact-card">
          <span className="impact-tag">ENDOCRINOLOGY</span>
          <h4 className="impact-title">Diabetes Device<br />Integration</h4>
          <div className="impact-stat">12k+</div>
          <p className="impact-desc">Downloads of patient discharge education materials via HCP interaction.</p>
        </div>
        
        <div className="impact-card">
          <span className="impact-tag">CARDIOLOGY</span>
          <h4 className="impact-title">Anticoagulant Launch<br />Acceleration</h4>
          <div className="impact-stat">3.2x</div>
          <p className="impact-desc">HCP engagement lift compared to standard banner placement benchmarks.</p>
        </div>
      </div>
    </div>
  </section>
);

const POCContact = () => (
  <section className="poc-cta-section">
    <div className="container">
      <div className="poc-cta-card">
        <h2>Let's Build Your POC Strategy</h2>
        <p>Our team is ready to help you design a point-of-care program that aligns with your brand goals and clinical audience needs.</p>
        <button className="poc-cta-button">Request a POC Consultation</button>
      </div>
    </div>
  </section>
);

const POCMarketing = () => {
  return (
    <div className="poc-marketing-page">
      <POCHero />
      <WhatIsPOC />
      <WhyPOC />
      <POCInventory />
      <POCTargeting />
      <POCUseCases />
      <ProgrammaticAdvantage />
      <CaseTeasers />
      <POCContact />
    </div>
  );
};

export default POCMarketing;
