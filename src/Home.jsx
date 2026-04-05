import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Target, 
  BarChart3, 
  Files, 
  Users, 
  Stethoscope,
  ClipboardList,
  MousePointer2,
  Settings,
  FileText,
  ArrowRight
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <div className="bg-blob bg-blob-4" />
      
      <div className="container">
        <div className="hero-grid">
          {/* Left Side: Content */}
          <div className="hero-content">
            <span className="badge animate-blur-fade stagger-1">
              Premium Healthcare Media
            </span>
            <h1 className="hero-title animate-blur-fade stagger-2">
              Specialists in 
              <span>Healthcare Media</span>
            </h1>
            <p className="hero-description animate-blur-fade stagger-3">
              Reach physicians, allied clinicians, and healthcare leaders 
              with programmatic precision and premium medical content.
            </p>
            <p className="hero-body animate-blur-fade stagger-4">
              RxNetwork combines deep clinical expertise with modern ad-tech to 
              deliver targeted, brand-safe campaigns across a portfolio of medical 
              properties. We focus only on medical content, no sports, politics, or finance.
            </p>
            <div className="hero-cta animate-blur-fade stagger-4">
              <button className="btn-primary">Request a Media Kit</button>
              <button className="btn-outline">See Audience Insights</button>
            </div>
          </div>

          {/* Right Side: Image and Stats */}
          <div className="hero-image-container animate-slide-in">
            <video 
              src="/opening-vid.webm" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="doctor-image"
            />
            
            <div className="stat-card card-1 animate-blur-fade stagger-3">
              <span className="stat-value">24m+</span>
              <span className="stat-label">Page Views</span>
            </div>

            <div className="stat-card card-2 animate-blur-fade stagger-4">
              <span className="stat-value">8m+</span>
              <span className="stat-label">Uniques Per Month</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Medical-first focus",
      description: "Content and inventory built exclusively for healthcare audiences.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Advanced targeting",
      description: "Target by NPI, ME, DGID and contextual signals for precise reach.",
      icon: <Target size={32} />
    },
    {
      title: "Programmatic demand",
      description: "All campaign demand served programmatically; no manual IOs.",
      icon: <BarChart3 size={32} />
    }
  ];

  return (
    <section className="features">
      <img src="/bg-shape.png" className="bg-shape" alt="" />
      <img src="/bg-shape.png" className="bg-shape-2" alt="" />
      
      <div className="container">
        <div className="features-header animate-blur-fade">
          <h2 className="features-title">
            Why Clients <br />
            <span>choose RxNetwork</span>
          </h2>
          <p className="features-subtitle">
            With over 40 years of combined experience in medical media and digital advertising, 
            we pair clinical credibility with modern programmatic delivery to reach the right 
            clinicians at the right moment.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card animate-blur-fade stagger-${index + 1}`}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AudienceSection = () => {
  const stats = [
    {
      value: "24M",
      label: "page views / month.",
      icon: <Files size={40} />
    },
    {
      value: "8M",
      label: "unique visitors / month.",
      icon: <Users size={40} />
    },
    {
      value: "500k+",
      label: "registered healthcare professionals using clinical tools.",
      icon: <Stethoscope size={40} />
    }
  ];

  return (
    <section className="audience">
      <div className="bg-blob bg-blob-3" style={{ top: '10%', left: '10%' }} />
      <div className="bg-blob bg-blob-4" style={{ bottom: '10%', right: '10%' }} />
      
      <div className="container">
        <div className="audience-header animate-blur-fade">
          <h2 className="audience-title">
            Audience <span>Composition and Scale</span>
          </h2>
          <p className="audience-description">
            RxNetwork combines deep clinical expertise with modern ad-tech to deliver targeted, 
            brand-safe campaigns across a portfolio of medical properties.
          </p>
          <p className="audience-body">
            We <strong>focus only on medical content</strong>, no sports, politics, or finance, 
            so your message appears where clinicians are learning and making decisions.
          </p>
        </div>

        <div className="audience-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`audience-card animate-blur-fade stagger-${index + 1}`}
            >
              <div className="audience-icon-wrapper">
                {stat.icon}
              </div>
              <h3 className="audience-value">{stat.value}</h3>
              <p className="audience-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Programmatic Campaigns",
      description: "All content served programmatically for faster activation and real-time optimization. No IOs, manual trafficking or reporting.",
      cta: "Start a Programmatic Campaign",
      bg: "#3b82f6",
      image: "/img-1-26.jpg"
    },
    {
      title: "Targeting & Data",
      description: "NPI, ME, DGID and contextual signals for limited specialty clinician and care teams with clinical relevance.",
      cta: "View Targeting Options",
      bg: "#2563eb",
      image: "/img-2-26.jpg"
    },
    {
      title: "Content Marketing & Email",
      description: "Custom content creation, specialty newsletters, and email programs that engage clinicians with trusted medical information.",
      cta: "Browse Content Programs",
      bg: "#1d4ed8",
      image: "/img-3-26.jpg"
    },
    {
      title: "Ad Quality & Viewability",
      description: "AI-powered ad blocking for inappropriate creative, viewability scoring, and publisher-friendly weight sets to protect brand safety and performance.",
      cta: "Learn About Ad Quality",
      bg: "#1e3a8a",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="solutions" ref={sectionRef} style={{ height: `${solutions.length * 100}vh` }}>
      <div className="container">
        <div className="solutions-header animate-blur-fade">
          <h2 className="solutions-title">
            Solutions for <span>Pharma, Biotech, Device & Health Systems</span>
          </h2>
        </div>

        <div className="solutions-stack">
          {solutions.map((solution, index) => {
            const startScroll = index * window.innerHeight;
            const nextCardStart = (index + 1) * window.innerHeight;
            const progressToNext = scrollProgress - nextCardStart;
            const opacity = progressToNext > 0 ? Math.max(0, 1 - progressToNext / 300) : 1;
            const translateY = progressToNext > 0 ? - (progressToNext / 2) : 0;

            return (
              <div 
                key={index} 
                className="solution-card-wrapper"
                style={{ 
                  top: '120px',
                  opacity,
                  transform: `translateY(${translateY}px) scale(${opacity * 0.05 + 0.95})`,
                  zIndex: 10 + index,
                  position: 'sticky',
                  visibility: opacity <= 0 ? 'hidden' : 'visible'
                }}
              >
                <div 
                  className="solution-card"
                  style={{ backgroundColor: solution.bg }}
                >
                  <div className="card-inner">
                    <div className="card-image-container">
                      <img src={solution.image} alt={solution.title} />
                    </div>
                    <div className="card-content">
                      <div className="rx-pattern">RX</div>
                      <h3>{solution.title}</h3>
                      <p>{solution.description}</p>
                      <button className="btn-card-cta">{solution.cta}</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TargetingSection = () => {
  const data = [
    { method: "NPI", reads: "Individual clinicians", best: "Detail-targeted outreach" },
    { method: "ME", reads: "Medical entities (hospitals, clinics)", best: "System or formulary messaging" },
    { method: "DGID", reads: "Disease/diagnosis groups", best: "Condition-specific campaigns" },
    { method: "Contextual", reads: "Topic-relevant pages", best: "Awareness and education" },
  ];

  return (
    <section className="targeting">
      <div className="container">
        <div className="targeting-header animate-blur-fade">
          <h2 className="targeting-title">
            Targeting at a <span>Glance</span>
          </h2>
          <p className="targeting-subtitle">
            With over 40 years of combined experience in medical media and digital advertising, we pair clinical credibility with modern programmatic delivery to reach the right clinicians at the right moment.
          </p>
        </div>

        <div className="targeting-table-container animate-blur-fade">
          <table className="targeting-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>What it reads</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 1 ? 'row-alt' : ''}>
                  <td className="col-method">{item.method}</td>
                  <td>{item.reads}</td>
                  <td className="col-best">{item.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const PerformanceSection = () => {
  const caseStudies = [
    {
      tag: "ONCOLOGY BRAND",
      title: "Increasing Therapy Compliance",
      desc: "Campaign focused on patient education portals for Stage IV lung cancer treatments.",
      stat: "+22%",
      statDesc: "Prescription Adherence"
    },
    {
      tag: "RARE DISEASE",
      title: "Shortening Time to Diagnosis",
      desc: "Connecting patients searching for orphan symptoms with specialty care clinics.",
      stat: "15:1",
      statDesc: "Verified ROI"
    },
    {
      tag: "CONSUMER HEALTH",
      title: "Mass Market Launch",
      desc: "Omni-channel rollout across digital health platforms for a new probiotic brand.",
      stat: "4M+",
      statDesc: "Qualified Leads"
    }
  ];

  return (
    <section className="performance">
      <div className="container">
        <h2 className="performance-title animate-blur-fade">Proven Performance</h2>
        <div className="performance-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="performance-card animate-blur-fade" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="performance-tag">{study.tag}</span>
              <h3 className="performance-card-title">{study.title}</h3>
              <p className="performance-card-desc">{study.desc}</p>
              <div className="performance-stat-container">
                <span className="performance-stat">{study.stat}</span>
                <p className="performance-stat-desc">{study.statDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      id: "plan",
      title: "Plan",
      subtitle: "Audience and channel strategy.",
      icon: <ClipboardList size={32} />,
      content: "We begin by deep-diving into your audience demographics, behaviors, and channel preferences to build a rock-solid foundation for your campaign."
    },
    {
      id: "activate",
      title: "Activate",
      subtitle: "Programmatic deployment and creative delivery.",
      icon: <MousePointer2 size={32} />,
      content: "Our team deploys precision-targeted creative across high-performance programmatic channels, ensuring your message reaches the right clinicians."
    },
    {
      id: "optimize",
      title: "Optimize",
      subtitle: "Real-time performance tuning.",
      icon: <Settings size={32} />,
      content: "Continuous monitoring and real-time adjustments ensure every dollar is spent efficiently, maximizing your return on investment and impact."
    },
    {
      id: "report",
      title: "Report",
      subtitle: "Transparent metrics and insights.",
      icon: <FileText size={32} />,
      content: "Detailed post-campaign analysis and transparent reporting provide the insights needed to measure success and inform future strategies."
    }
  ];

  return (
    <section className="process">
      <div className="container">
        <h2 className="process-title animate-blur-fade">
          From strategy to <span>measurement</span>
        </h2>

        <div className="process-interactive animate-blur-fade">
          {/* SVG Path Background */}
          <div className="process-path-svg">
            <svg width="100%" height="300" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path
                d="M 50,150 C 150,150 200,250 350,250 C 500,250 500,50 650,50 C 800,50 850,150 950,150"
                fill="none"
                stroke="rgba(0, 42, 112, 0.2)"
                strokeWidth="4"
                strokeDasharray="12 12"
              />
            </svg>
          </div>

          <div className="process-nodes">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`process-node node-${step.id} ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="node-orb">
                  {step.icon}
                </div>
                <div className="node-info">
                  <h4 className="node-title">{step.title}</h4>
                  <p className="node-subtitle">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="process-details-container animate-blur-fade">
          <div className="process-details">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`process-detail-item ${activeStep === index ? 'active' : ''}`}
              >
                <h3>{step.title}</h3>
                <p>{step.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="process-progress">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="contact-section animate-blur-fade">
    <div className="container">
      <div className="contact-grid">
        <div className="contact-content">
          <h2 className="section-title">Talk with <span>our team</span></h2>
          <p className="section-body">
            Ready to reach clinicians with clinical relevance and programmatic efficiency? 
            Contact our New York or Connecticut offices, or submit an inquiry and we'll 
            respond with a tailored media kit and audience plan.
          </p>
          
          <div className="office-details">
            <div className="office">
              <strong>New York</strong> — <a href="tel:914-208-6464">914-208-6464</a>
            </div>
            <div className="office">
              <strong>Connecticut</strong> — <a href="tel:203-703-9018">203-703-9018</a>
            </div>
          </div>
          
          <button className="btn-primary contact-btn">Inquire / Contact Sales</button>
        </div>
        
        <div className="contact-visual">
          <img src="/meet-the-team-image.png" alt="Talk with our team" />
        </div>
      </div>
    </div>
  </section>
);

const BlogPreview = () => (
  <section className="blog-preview gray-bg animate-blur-fade">
    <div className="container">
      <header className="blog-preview-header align-center">
        <div className="section-content">
          <span className="section-tag">Clinical Insights</span>
          <h2 className="section-title">Explore our latest <span>Studies & Analysis</span></h2>
        </div>
        <Link to="/blog" className="btn-secondary">View all Insights <ArrowRight size={18} /></Link>
      </header>
      
      <div className="blog-grid-preview">
        {blogPosts.slice(0, 3).map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-card-tag">{post.category}</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <span className="blog-card-link">Read full post →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <AudienceSection />
      <SolutionsSection />
      <TargetingSection />
      <PerformanceSection />
      <ProcessSection />
      <BlogPreview />
      <ContactSection id="contact" />
    </div>
  );
};

export default Home;
