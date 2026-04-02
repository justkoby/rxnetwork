import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, ChevronDown, BarChart3, Stethoscope, ArrowRight, Bell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [persona, setPersona] = useState(localStorage.getItem('rx_persona') || null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isTyping, isOpen]);

  // Initial Greeting based on Page and Persona
  useEffect(() => {
    if (messages.length === 0) {
      let greeting = "Hello! I'm the RxNetwork strategist. What would you like to explore today?";
      
      if (location.pathname.includes('poc-marketing')) {
        greeting = "Hi! Looking for NPI-level POC targeting details or clinical workflow inventory?";
      } else if (location.pathname.includes('email-marketing')) {
        greeting = "Hello! Interested in our HCP-only verified audiences and 90% in-box rates?";
      } else if (location.pathname.includes('blog')) {
        greeting = "Welcome to the Knowledge Hub. Searching for a specific clinical calculator or research study?";
      }

      setMessages([{ 
        id: 1, 
        text: greeting, 
        sender: 'bot',
        chips: [
          { label: "📊 Audience & Reach", query: "What kind of audience do you reach?" },
          { label: "🎯 Targeting Options", query: "Can I target specific doctors?" },
          { label: "📧 Email Marketing", query: "Do you offer email marketing?" },
          { label: "📍 Point-of-Care", query: "What is point-of-care marketing?" },
          { label: "📈 Performance", query: "What kind of results can I expect?" },
          { label: "💬 Talk to Sales", query: "Can I talk to someone?" }
        ]
      }]);
      
      // If no persona, ask for it
      if (!persona) {
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            id: 2, 
            text: "To provide the most relevant clinical insights, are you a Healthcare Professional (HCP) or a Medical Marketer?", 
            sender: 'bot',
            type: 'onboarding'
          }]);
        }, 800);
      }
    }
  }, [location.pathname, persona]);

  const knowledgeBase = [
    // A. Identity
    {
      keywords: ['what is rxnetwork', 'what does rxnetwork do', 'who do you work with'],
      answer: "RxNetwork helps healthcare brands reach verified clinicians through targeted digital campaigns across premium medical platforms.\n\nWe focus exclusively on healthcare, so your message appears where clinicians are actively learning and making decisions.",
      chips: ["See Targeting Options", "Explore Email"]
    },
    // B. Decision Stage
    {
      keywords: ['target specific doctors', 'specialties', 'reach', 'doctors'],
      answer: "Yes — we offer deterministic targeting using:\n• NPI (individual clinicians)\n• ME (hospitals & medical entities)\n• DGID (disease-specific audiences)\n\nThis allows you to reach highly specific specialties and decision-makers.",
      chips: ["View Targeting Metrics", "Contact Sales"]
    },
    {
      keywords: ['big is your audience', 'audience reach', 'scale'],
      answer: "RxNetwork reaches 8M+ unique monthly visitors and delivers 24M+ monthly clinical page views across 100+ diagnostic and treatment tools.",
      card: { title: "Audience Scale", value: "8M+ Monthly Uniques", icon: <BarChart3 size={20} />, link: "/about" }
    },
    // C. Clarity Stage
    {
      keywords: ['programmatic', 'campaigns run', 'how do you target'],
      answer: "All RxNetwork inventory is served programmatically for real-time activation, optimization, and reporting. We utilize NPI, ME, and contextual signals for precision delivery.",
      chips: ["What is NPI targeting?", "How do I get started?"]
    },
    {
      keywords: ['npi', 'me', 'dgid', 'targeting clinicians'],
      answer: "• **NPI**: Targeting individual clinicians by their National Provider Identifier.\n• **ME**: Targeting medical entities such as specific hospitals or clinics.\n• **DGID**: Targeting disease/diagnosis groups based on active clinical context.",
      chips: ["See Targeting at a Glance", "Request Quote"]
    },
    // D. Products & Services
    {
      keywords: ['email marketing', 'broadcast email', 'triple opt-in'],
      answer: "Yes — we provide premium HCP email programs designed for verified clinicians. \n\nCampaigns typically deliver:\n• High open rates\n• Strong CTR on clinical content\n• Clear reporting on engagement and conversions",
      chips: ["Email Formats", "Audience Segments"],
      link: "/email-marketing", linkLabel: "Explore Email Marketing"
    },
    {
      keywords: ['point-of-care', 'poc', 'at the point of patient care'],
      answer: "Point-of-care marketing allows you to reach clinicians while they are actively diagnosing or making treatment decisions across our clinical tools and research hub.",
      chips: ["Where ads appear", "See POC Reach"],
      card: { title: "POC Inventory", value: "Daily Clinical Usage", icon: <Stethoscope size={20} />, link: "/poc-marketing" }
    },
    // E. Performance
    {
      keywords: ['results', 'what to expect', 'open rates', 'metrics', 'measure success'],
      answer: "Our campaigns are built for measurable performance. Reporting typically includes:\n• Open rates (specialty benchmarked)\n• Click-through rates on clinical content\n• Conversion or lead metrics",
      chips: ["View Sample Report", "Case Studies"]
    },
    // F. Compliance & Trust
    {
      keywords: ['compliant', 'regulations', 'safe', 'verified'],
      answer: "RxNetwork ensures 100% brand safety and regulatory compliance. All clinician audiences are deterministic and verified via NPI/ME credentials.",
      chips: ["Privacy Policy", "Talk to Sales"]
    },
    // G. Conversion
    {
      keywords: ['get started', 'pricing', 'someone', 'sales', 'media kit'],
      answer: "The best way to get started is to request a media kit or speak with our team. We’ll tailor a strategy based on your audience, goals, and campaign type.\n\n would you like to request a kit now?",
      link: "/get-started", linkLabel: "Request Media Kit / Contact"
    },
    {
      keywords: ['tool', 'calculator', 'research', 'insight', 'bsa', 'neuropathy', 'clinical tools'],
      answer: "You can find 100+ specialized clinical tools and research studies in our Knowledge Hub.",
      autoNavigate: "/blog"
    }
  ];

  const selectPersona = (p) => {
    setPersona(p);
    localStorage.setItem('rx_persona', p);
    const text = p === 'hcp' ? "I'm a Healthcare Professional (HCP)" : "I'm a Medical Marketer";
    setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user' }]);
    
    setIsTyping(true);
    setTimeout(() => {
      const response = p === 'hcp' 
        ? "Excellent. I'll prioritize clinical tools and diagnostic research for you. How can I assist today?" 
        : "Understood. I'll focus on audience metrics, NPI-targeting, and ROI insights. How can I assist today?";
      setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: 'bot', 
        chips: [
          { label: "🎯 Targeting Options", query: "Can I target specific doctors?" },
          { label: "📧 Email Marketing", query: "Do you offer email marketing?" },
          { label: "📍 Point-of-Care", query: "What is point-of-care marketing?" }
        ]
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const processQuery = (queryText) => {
    setIsTyping(true);
    const currentInput = queryText.toLowerCase();
    
    // Track engagement for escalation
    const newCount = questionCount + 1;
    setQuestionCount(newCount);

    setTimeout(() => {
      let botResponse = { id: Date.now() + 1, sender: 'bot' };
      let match = null;
      
      for (const entry of knowledgeBase) {
        if (entry.keywords.some(keyword => currentInput.includes(keyword))) {
          match = entry;
          break;
        }
      }

      if (match) {
        botResponse.text = match.answer;
        if (match.card) botResponse.card = match.card;
        if (match.chips) {
          botResponse.chips = match.chips.map(c => typeof c === 'string' ? { label: c, query: c } : c);
        }
        if (match.autoNavigate) {
          botResponse.text = `Redirecting you to the ${match.autoNavigate.replace('/', '')} Hub...`;
          setTimeout(() => navigate(match.autoNavigate), 2000);
        }
        if (match.link) {
          botResponse.link = match.link;
          botResponse.linkLabel = match.linkLabel;
        }
      } else {
        botResponse.text = "I don't have that specific detail here, but our team can provide a tailored answer based on your campaign needs.";
        botResponse.link = "/get-started";
        botResponse.linkLabel = "Speak with a Specialist";
        botResponse.chips = [
          { label: "📁 Request Media Kit", query: "How do I get a media kit?" },
          { label: "🎯 Targeting Scaling", query: "How big is your audience?" }
        ];
      }

      // Conversion Escalation Logic
      if (newCount === 3) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + 10,
            text: "I've been assisting you with several queries. Would you prefer to connect with our strategic team for a tailored plan and pricing?",
            sender: 'bot',
            link: "/get-started",
            linkLabel: "Connect with Sales Team",
            chips: [{ label: "No, keep exploring", query: "Tell me more about about POC" }]
          }]);
        }, 1500);
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    processQuery(input);
    setInput('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (showBadge) setShowBadge(false);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Button with Unread Badge */}
      <button 
        className={`chatbot-trigger ${isOpen ? 'active' : ''}`} 
        onClick={toggleChat}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {showBadge && !isOpen && <span className="unread-badge">!</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window animate-slide-up">
          <header className="chat-header">
            <div className="advisor-info">
              <div className="advisor-avatar">Rx</div>
              <div>
                <h4>Clinical Advisor</h4>
                <span>{persona === 'hcp' ? 'HCP Support' : persona === 'marketer' ? 'Marketer Support' : 'Online Support'}</span>
              </div>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}><ChevronDown size={20} /></button>
          </header>

          <div className="chat-messages">
            <div className="chat-disclaimer">
               Site-based navigational support. For clinical details, contact a specialist.
            </div>

            {messages.map(msg => (
              <React.Fragment key={msg.id}>
                <div className={`message-bubble ${msg.sender}`}>
                  <div className="bubble-text">{msg.text}</div>
                  {msg.link && (
                    <Link 
                      to={msg.link} 
                      className="bubble-cta" 
                      onClick={() => setIsOpen(false)}
                    >
                      {msg.linkLabel} →
                    </Link>
                  )}
                </div>

                {/* Suggested Chips (Next Steps) */}
                {msg.chips && (
                  <div className={`suggested-chips-container ${msg.sender === 'bot' ? 'bot-suggested' : ''}`}>
                    {msg.chips.map((chip, idx) => (
                      <button 
                        key={idx} 
                        className="suggested-chip animate-blur-fade"
                        onClick={() => {
                          const userMessage = { id: Date.now(), text: chip.label, sender: 'user' };
                          setMessages(prev => [...prev, userMessage]);
                          processQuery(chip.query);
                        }}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Onboarding Persona Choice */}
                {msg.type === 'onboarding' && !persona && (
                  <div className="persona-selection animate-blur-fade">
                    <button onClick={() => selectPersona('hcp')} className="persona-btn">
                      <Stethoscope size={18} /> HCP
                    </button>
                    <button onClick={() => selectPersona('marketer')} className="persona-btn">
                      <BarChart3 size={18} /> Marketer
                    </button>
                  </div>
                )}

                {/* Mini Data Cards */}
                {msg.card && (
                  <div className="mini-card-bubble animate-slide-in">
                    <div className="mini-card-icon">{msg.card.icon}</div>
                    <div className="mini-card-info">
                      <span className="mini-card-title">{msg.card.title}</span>
                      <span className="mini-card-value">{msg.card.value}</span>
                      <Link to={msg.card.link} className="mini-card-link" onClick={() => setIsOpen(false)}>
                        Explore Metrics <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
            {isTyping && (
              <div className="message-bubble bot typing">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-actions">
            {[
              { label: "POC Marketing", query: "What is POC Marketing?" },
              { label: "Email Stats", query: "Email Marketing stats" },
              { label: "Clinical Tools", query: "Clinical Tools list" }
            ].map(chip => (
              <button 
                key={chip.label} 
                className="action-chip" 
                onClick={() => {
                  const userMessage = { id: Date.now(), text: chip.query, sender: 'user' };
                  setMessages(prev => [...prev, userMessage]);
                  processQuery(chip.query);
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <div className="chat-input-area">
            <input 
              type="text" 
              placeholder="Ask a specialist..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="chat-send" onClick={handleSend} disabled={!input.trim()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
