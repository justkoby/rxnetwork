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
  Users
} from 'lucide-react';

const POCHero = () => (
  <section className="poc-hero-refined animate-blur-fade">
    <div className="container">
      <div className="poc-hero-grid">
        <div className="poc-hero-content">
          <span className="badge">Point-of-Care Marketing, Re-Engineered</span>
          <h1 className="hero-title">
            Point-of-Care <span>Marketing for Today’s</span> Healthcare Environment
          </h1>
          <p className="hero-subtitle">
            Reach clinicians at the exact moment of learning, decision-making, and patient interaction—powered by medical-only content and programmatic precision.
          </p>
          <p className="hero-body-text">
            RxNetwork delivers point-of-care impact through a portfolio built exclusively for healthcare. Nothing sports. Nothing politics. Nothing finance. Just medical. Our POC solutions combine trusted clinical content, advanced targeting, and programmatic delivery to help brands influence HCP behavior where it matters most.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Request POC Strategy Overview</button>
            <button className="btn-outline">See Audience Insights</button>
          </div>
        </div>
        <div className="poc-hero-visual animate-slide-in">
          <img src="/poc-hero.png" alt="Clinical Decision Point" />
        </div>
      </div>
    </div>
  </section>
);

const WhatIsPOC = () => (
  <section className="what-is-poc gray-bg">
    <div className="container">
      <div className="section-grid align-center">
        <div className="section-content">
          <h2 className="section-title">A Modern, Data-Driven Approach to <span>Point-of-Care</span></h2>
          <p className="section-body">
            Traditional point-of-care channels rely on static placements and fragmented delivery. RxNetwork brings a digital-first model: programmatic activation, NPI-level precision, and clinically relevant environments that clinicians trust. Our POC inventory spans medical articles, specialty tools, reference materials, and multimedia resources used by physicians, allied healthcare professionals, and medical specialists every day.
          </p>
          <div className="value-points-grid">
            <div className="value-card">
              <div className="v-icon"><Globe size={24} /></div>
              <p>100% medical-only environment — content clinicians actively seek.</p>
            </div>
            <div className="value-card">
              <div className="v-icon"><Zap size={24} /></div>
              <p>Programmatic delivery — no IOs, no emailed creatives, no manual trafficking.</p>
            </div>
            <div className="value-card">
              <div className="v-icon"><Target size={24} /></div>
              <p>Advanced PLD targeting — NPI, ME, DGID, and contextual signals.</p>
            </div>
            <div className="value-card">
              <div className="v-icon"><MousePointer2 size={24} /></div>
              <p>High-intent moments — placements aligned with clinical learning and patient-care workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyPOC = () => (
  <section className="why-poc">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-title">Influence Clinical Decisions at the <span>Moment of Need</span></h2>
        <p className="section-body text-center">
          Clinicians rely on digital resources throughout the care journey—from diagnosis and treatment selection to patient education. With over 24M monthly page views and 8M monthly uniques, RxNetwork provides unparalleled access to HCPs at the point of care.
        </p>
      </div>
      <div className="stats-row mt-4">
        <div className="poc-stat-item">
          <strong>24M</strong>
          <span>Monthly Page Views</span>
        </div>
        <div className="poc-stat-item">
          <strong>8M</strong>
          <span>Monthly Uniques</span>
        </div>
        <div className="poc-stat-item">
          <strong>500K+</strong>
          <span>Verified HCPs</span>
        </div>
      </div>
      <div className="supporting-points-grid mt-6">
        <div className="support-point">
          <CheckCircle2 size={24} />
          <p>Clinicians engage deeply with specialty content and tools.</p>
        </div>
        <div className="support-point">
          <CheckCircle2 size={24} />
          <p>POC placements align with real clinical workflows.</p>
        </div>
        <div className="support-point">
          <CheckCircle2 size={24} />
          <p>Brands gain visibility during high-value decision windows.</p>
        </div>
      </div>
    </div>
  </section>
);

const POCInventory = () => (
  <section className="poc-inventory gray-bg">
    <div className="container">
      <div className="section-grid align-center">
        <div className="poc-inventory-visual animate-blur-fade">
          <img src="/poc-inventory.png" alt="POC Inventory Visualization" />
        </div>
        <div className="section-content">
          <h2 className="section-title">Where Your <span>Message Appears</span></h2>
          <p className="section-body">
            Our POC environments are built around original, expert-developed medical resources. These include clinical calculators, medical reference materials, specialty articles, and videos that serve over 500K healthcare professionals worldwide.
          </p>
          <ul className="inventory-list">
            <li><strong>Clinical Articles</strong> — specialty-specific content across oncology, endocrinology, cardiology, and more.</li>
            <li><strong>Medical Calculators & Tools</strong> — high-intent usage moments.</li>
            <li><strong>Reference Hubs</strong> — condition-focused learning environments.</li>
            <li><strong>Patient-Education Resources</strong> — content supporting shared decision-making.</li>
            <li><strong>Multimedia</strong> — videos, imaging, and procedural explainers.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const POCTargeting = () => (
  <section className="poc-targeting">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-title">Precision Targeting for <span>Maximum Clinical Relevance</span></h2>
        <p className="section-body text-center">
          POC campaigns leverage RxNetwork’s advanced PLD targeting framework to reach the exact clinicians who influence diagnosis, prescribing, and treatment pathways.
        </p>
      </div>
      <div className="four-column-grid">
        <div className="targeting-card">
          <div className="t-icon"><Users /></div>
          <h4>NPI Targeting</h4>
          <p>Reach individual clinicians by specialty or prescribing behavior.</p>
        </div>
        <div className="targeting-card">
          <div className="t-icon"><Layers /></div>
          <h4>ME Targeting</h4>
          <p>Target hospitals, clinics, and health systems.</p>
        </div>
        <div className="targeting-card">
          <div className="t-icon"><PieChart /></div>
          <h4>DGID Targeting</h4>
          <p>Align messaging with disease-specific audiences.</p>
        </div>
        <div className="targeting-card">
          <div className="t-icon"><Globe /></div>
          <h4>Contextual Targeting</h4>
          <p>Serve ads on clinically relevant pages and topics.</p>
        </div>
      </div>
    </div>
  </section>
);

const POCUseCases = () => {
  const cases = [
    {
      title: "Brand Awareness at Diagnosis",
      desc: "Reach clinicians reviewing diagnostic criteria, imaging, or lab interpretation content."
    },
    {
      title: "Treatment Consideration",
      desc: "Align messaging with therapeutic guidelines, treatment comparisons, and specialty workflows."
    },
    {
      title: "Patient-Education Support",
      desc: "Reinforce brand value during shared decision-making moments."
    },
    {
      title: "Health System & Device",
      desc: "Engage clinicians evaluating procedures, devices, or system-level solutions."
    }
  ];

  return (
    <section className="poc-use-cases gray-bg">
      <div className="container">
        <h2 className="section-title text-center">How Brands Use <span>POC Marketing on RxNetwork</span></h2>
        <div className="use-case-grid mt-4">
          {cases.map((c, i) => (
            <div key={i} className="use-case-card">
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgrammaticAdvantage = () => (
  <section className="poc-programmatic">
    <div className="container">
      <div className="section-grid align-center">
        <div className="section-content">
          <h2 className="section-title">Programmatic Efficiency Meets <span>Clinical Precision</span></h2>
          <p className="section-body">
            All POC demand is served programmatically for efficiency, scale, and precise control. Our ad-tech stack includes AI-powered ad quality tools, advanced viewability optimization, and publisher-friendly integrations that protect editorial integrity.
          </p>
          <div className="advantage-list">
            <div className="advantage-item">
              <Cpu className="advantage-icon" />
              <div>
                <h5>AI-Powered Ad Quality</h5>
                <p>AI-powered ad blocking beyond standard categories.</p>
              </div>
            </div>
            <div className="advantage-item">
              <Monitor className="advantage-icon" />
              <div>
                <h5>Viewability Optimization</h5>
                <p>Viewability optimization aligned with industry standards.</p>
              </div>
            </div>
            <div className="advantage-item">
              <Zap className="advantage-icon" />
              <div>
                <h5>Publisher-Friendly</h5>
                <p>Maintain content quality with lightweight execution.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="advantage-visual animate-blur-fade">
          {/* Abstract SVG representing programmatic logic */}
          <div className="logic-grid">
            {[...Array(16)].map((_, i) => <div key={i} className="logic-node" />)}
            <div className="logic-pulse" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseTeasers = () => (
  <section className="case-teasers gray-bg">
    <div className="container">
      <h2 className="section-title text-center">POC Impact <span>in Action</span></h2>
      <div className="three-column-grid mt-4">
        <div className="teaser-card">
          <span className="case-tag">ONCOLOGY</span>
          <p>Engagement uplift during content on levothyroxine treatment in thyroid cancer.</p>
          <ArrowRight className="case-arrow" />
        </div>
        <div className="teaser-card">
          <span className="case-tag">ENDOCRINOLOGY</span>
          <p>High-value impressions during neuropathy diagnostic content.</p>
          <ArrowRight className="case-arrow" />
        </div>
        <div className="teaser-card">
          <span className="case-tag">CARDIOLOGY</span>
          <p>Strong visibility around antithyroid therapy and cardiovascular risk discussions.</p>
          <ArrowRight className="case-arrow" />
        </div>
      </div>
    </div>
  </section>
);

const GlobalPartnerships = () => (
  <section className="global-partners">
    <div className="container text-center">
      <h2 className="section-title">Trusted by Leading <span>Healthcare Organizations</span></h2>
      <p className="section-body text-center">
        We partner with pharmaceutical companies, biotech firms, medical device manufacturers, and hospital systems worldwide. Our mission is to help them connect with their most valuable HCP audiences through data-driven, programmatic POC media.
      </p>
      {/* Logos placeholder/grid could go here */}
    </div>
  </section>
);

const POCContact = () => (
  <section className="poc-contact">
    <div className="container">
      <div className="contact-card">
        <h2 className="white">Let’s Build Your <span>POC Strategy</span></h2>
        <p className="white opacity-8">Our team is ready to help you design a point-of-care program that aligns with your brand goals and clinical audience needs.</p>
        <button className="btn-primary white-pulse">Request a POC Consultation</button>
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
      <GlobalPartnerships />
      <POCContact />
    </div>
  );
};

export default POCMarketing;
