import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const urls = {
  linkedin: 'https://www.linkedin.com/in/shivam-dutt-sharma-020456149/',
  medium: 'https://shivamdutt606.medium.com/',
  claritagent: 'https://claritagent.in/',
  prajna: 'https://iamprajna.in/',
  email: 'mailto:shivamdutt606@gmail.com',
};

function Arrow({ diagonal = false }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function External({ href, children, className = '' }) {
  const isEmail = href.startsWith('mailto:');
  return (
    <a className={className} href={href} target={isEmail ? undefined : '_blank'} rel={isEmail ? undefined : 'noopener noreferrer'}>
      {children}<Arrow diagonal />
    </a>
  );
}

const experience = [
  { company: 'Publicis Sapient', role: 'Senior Product Manager · AI Products', period: '2025 — Present', detail: 'Product strategy and roadmaps for enterprise Generative AI platforms, including an agent workbench.' },
  { company: 'EXL · Gymshark', role: 'Offshore Project Lead · Data Science', period: '2024 — 2025', detail: 'Machine learning and analytics across forecasting, customer segmentation and commercial optimisation.' },
  { company: 'Incedo', role: 'Senior Product Manager', period: '2021 — 2023', detail: 'Lighthouse decision intelligence, experimentation and enterprise analytics products.' },
  { company: 'Cashify', role: 'Product Lead · AI & Machine Learning', period: '2020 — 2021', detail: 'Built Cashbot, an AI assistant that autonomously resolved more than 70% of customer enquiries.' },
  { company: 'Ferns N Petals', role: 'Product Manager · CRM & Customer Experience', period: '2019 — 2020', detail: 'Personalisation, CRM and voice commerce experiences.' },
  { company: 'MakeMyTrip', role: 'Product Manager', period: '2016 — 2019', detail: 'B2B products supporting more than 10,000 hotel partners.' },
];

function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem('portfolio-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch { /* Storage may be unavailable. */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    try { window.localStorage.setItem('portfolio-theme', theme); } catch { /* Storage may be unavailable. */ }
  }, [theme]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Shivam Dutt Sharma, home">SDS<span className="wordmark-dot">.</span></a>
        <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#building">Building</a><a href="#experience">Experience</a><a href="#writing">Writing</a><a href="#contact">Contact</a></nav>
        <div className="header-actions">
          <External className="header-social" href={urls.linkedin}>
            LinkedIn
          </External>
        
          <button
            type="button"
            className="theme-toggle"
            role="switch"
            aria-checked={darkMode}
            aria-label="Dark mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span className="theme-toggle-knob" />
          </button>
</div>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-eyebrow"><span className="status-dot"/> PRODUCT LEADER · FOUNDER · RESEARCHER</div>
          <h1 id="hero-title">Shivam<br/><em>Dutt Sharma.</em></h1>
          <div className="hero-bottom"><p>I build intelligent products that make complex things simpler — and explore what happens when technology meets human ambition.</p><a className="text-link" href="#about">Get to know me <Arrow /></a></div>
          <div className="hero-index">01 / AN INTRODUCTION <span>GURUGRAM, INDIA</span></div>
        </section>
        <section id="about" className="section intro-section">
          <div className="section-meta"><span>01</span><span>ABOUT ME</span></div>
          <div className="section-body"><h2>Curiosity, translated<br/>into <em>products.</em></h2><div className="intro-copy"><p>I'm an AI product leader with over a decade of experience turning emerging technologies into useful, scalable products.</p><p>My work spans Generative AI, enterprise software, machine learning, decision intelligence and customer experiences. I've worked with teams across product, engineering, design and data science — from early ideas to platforms operating at scale.</p><p>Outside my corporate work, I build independent ventures, research practical applications of AI, and write about the ideas that interest me.</p></div><div className="metrics"><div><strong>10<span>+</span></strong><small>Years in product & technology</small></div><div><strong>6<span>+</span></strong><small>AI products delivered</small></div><div><strong>70<span>%+</span></strong><small>Customer queries resolved by Cashbot</small></div></div></div>
        </section>
        <section id="building" className="section projects-section">
          <div className="section-meta"><span>02</span><span>WHAT I'M BUILDING</span></div>
          <div className="section-body"><div className="section-heading-row"><h2>Ideas put<br/><em>into motion.</em></h2><p>Independent ventures at the intersection of intelligence, accessibility and better decisions.</p></div><div className="project-grid"><a href={urls.claritagent} target="_blank" rel="noopener noreferrer" className="project-card"><div className="project-top"><span className="project-number">01 / VENTURE</span><Arrow diagonal /></div><div className="project-symbol" aria-hidden="true">C<span>.</span></div><div><h3>Claritagent</h3><p>AI-powered legal clarity, helping people understand legal questions, documents and court-case information.</p><span className="project-visit">claritagent.in <Arrow /></span></div></a><a href={urls.prajna} target="_blank" rel="noopener noreferrer" className="project-card dark"><div className="project-top"><span className="project-number">02 / VENTURE</span><Arrow diagonal /></div><div className="project-symbol" aria-hidden="true">P<span>.</span></div><div><h3>Prajna AI</h3><p>Conversational business intelligence that helps people explore enterprise data and make informed decisions in natural language.</p><span className="project-visit">Explore Prajna <Arrow /></span></div></a></div></div>
        </section>
        <section id="experience" className="section experience-section"><div className="section-meta"><span>03</span><span>THE JOURNEY</span></div><div className="section-body"><div className="section-heading-row"><h2>Built across<br/><em>industries.</em></h2><p>Selected roles and work from a decade spent shaping products, teams and experiences.</p></div><div className="experience-list">{experience.map(item=><div className="experience-row" key={item.company}><div className="experience-company">{item.company}</div><div className="experience-detail"><h3>{item.role}</h3><p>{item.detail}</p></div><div className="experience-date">{item.period}</div></div>)}</div></div></section>
        <section id="writing" className="section writing-section"><div className="section-meta"><span>04</span><span>WRITING & RESEARCH</span></div><div className="section-body"><h2>Thinking<br/><em>out loud.</em></h2><p className="writing-intro">I write about artificial intelligence, product strategy and the evolving relationship between people and technology. My research explores conversational AI, language models and enterprise decision intelligence.</p><div className="writing-links"><External href={urls.medium} className="writing-link"><span><small>ESSAYS & PERSPECTIVES</small><strong>Read my writing on Medium</strong></span></External><External href={urls.linkedin} className="writing-link"><span><small>IDEAS & CONVERSATIONS</small><strong>Follow my thoughts on LinkedIn</strong></span></External></div><p className="editorial-note">Individual research papers and articles can be added here once their publication links are supplied.</p></div></section>
        <section className="section beyond-section"><div className="section-meta"><span>05</span><span>BEYOND THE SCREEN</span></div><div className="section-body"><h2>There's more<br/><em>to the story.</em></h2><p>When I'm not working on products, you'll likely find me running, playing tennis, travelling or exploring something new. Long-distance running has been a particularly meaningful pursuit — more than 2,700 km and counting.</p><div className="interest-tags"><span>Running</span><span>Tennis</span><span>Travel</span><span>Learning</span></div></div></section>
        <section id="contact" className="contact-section"><div className="contact-eyebrow">HAVE SOMETHING INTERESTING IN MIND?</div><h2>Let's start a<br/><em>conversation.</em></h2><p>I'm always interested in thoughtful conversations about AI, products, research and ideas worth building.</p><External href={urls.email} className="contact-button">Get in touch</External></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} Shivam Dutt Sharma</span><div><External href={urls.linkedin}>LinkedIn</External><External href={urls.medium}>Medium</External><External href={urls.email}>Email</External></div><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .header-actions {
    gap: 12px;
  }
}
