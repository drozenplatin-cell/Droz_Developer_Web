import { useEffect, useState } from 'react'
import profileImage from './assets/droz-profile.webp'
import './App.css'

const whatsappNumber = '255619551619'
const whatsappLink = `https://wa.me/${whatsappNumber}`
const emailAddress = 'drozenplatin@gmail.com'
const locationAddress = 'Kimara Stop Over, Dar es Salaam, Tanzania'
const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Why work together', href: '#approach' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Updates', href: '#updates' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    name: 'Droz_Sms',
    id: 'droz-sms',
    status: 'Available',
    badge: 'Messaging app',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    description:
      'A modern communication app concept designed for cleaner conversations, polished interactions, and a user-first mobile experience.',
    features: ['Smart chat UI', 'Private messaging flow', 'Media sharing', 'Planned: voice notes'],
    tech: ['Java', 'Android Studio', 'Material Design'],
    detailsLink: '#download-droz-sms',
    download: 'https://drive.google.com/file/d/1-v8UhgbBWK-iuuSMCaHc5bvMPyd5dIfp/view?usp=sharing',
    available: 'Public download available',
  },
  {
    name: 'Droz_App',
    id: 'droz-app',
    status: 'Available',
    badge: 'Study hub',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description:
      'A digital learning companion aimed at helping students organize study resources, access educational material, and manage academic routines.',
    features: ['Study dashboard', 'Resource library', 'Learning workflows', 'Medical & health-science support'],
    tech: ['Java', 'Android Studio', 'PHP', 'MySQL'],
    detailsLink: '#download-droz-app',
    download: 'https://drive.google.com/file/d/1puJgs3w5DL2rVc6nkUaoxn0TKposlg0P/view?usp=sharing',
    available: 'Public download available',
  },
  {
    name: 'VOUCHERXcan',
    id: 'voucherxcan',
    status: 'Under planning',
    badge: 'QR utility',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    description:
      'A QR and voucher utility project focused on scanning codes, extracting data, and turning scanned information into usable actions.',
    features: ['QR scanning', 'Text voucher parsing', 'Result handling', 'Planned: workflow automation'],
    tech: ['Java', 'Android Studio', 'Scan tooling'],
    detailsLink: '#contact',
    download: null,
    available: 'Early concept stage',
  },
]

const skills = [
  {
    category: 'Android Development',
    items: ['Java', 'Android Studio', 'Android app development'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'Database integration'],
  },
  {
    category: 'Development Tools',
    items: ['Visual Studio Code', 'XAMPP', 'Project setup & iteration'],
  },
]

const services = [
  {
    title: 'Website Development',
    description: 'Modern, polished websites for personal brands, startups, and digital businesses.',
    cta: 'Build a website',
    message: 'Hi Droz_Developer, I need a custom website development project.',
  },
  {
    title: 'Personal Portfolio Sites',
    description: 'Professional portfolio experiences that communicate your value and style clearly.',
    cta: 'Plan a portfolio',
    message: 'Hi Droz_Developer, I want to build a personal portfolio website.',
  },
  {
    title: 'Business Websites',
    description: 'Conversion-focused online presence for companies, service brands, and growing ventures.',
    cta: 'Discuss a business site',
    message: 'Hi Droz_Developer, I need a business website for my brand.',
  },
  {
    title: 'Android Application Development',
    description: 'Mobile-first app concepts and Android app interfaces designed for real-world usability.',
    cta: 'Discuss an app',
    message: 'Hi Droz_Developer, I want to build an Android application.',
  },
  {
    title: 'Database-powered Web Apps',
    description: 'Structured web experiences backed by data, logic, and flexible business workflows.',
    cta: 'Talk about an app',
    message: 'Hi Droz_Developer, I would like to discuss a database-powered web application.',
  },
  {
    title: 'Website Improvements',
    description: 'Refining existing websites with better UX, organization, and responsive presentation.',
    cta: 'Improve my website',
    message: 'Hi Droz_Developer, I need help improving my website.',
  },
]

const announcements = [
  {
    title: 'New product exploration in progress',
    date: 'October 2026',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description: 'Droz_Developer is developing new digital product experiments focused on learning, mobile utility, and modern user experience design.',
    details:
      'This update highlights work in progress and the next milestones for app-focused product thinking and polished product interfaces.',
    project: 'Droz_App',
    link: '#droz-app',
  },
  {
    title: 'Interface systems and product polish',
    date: 'September 2026',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description: 'The design process continues to focus on user clarity, visual language, and stronger product direction for future releases.',
    details:
      'This includes the refinement of flows, interaction outlines, and the visual structure needed for premium mobile and web experiences.',
    project: 'Droz_Sms',
    link: '#droz-sms',
  },
]

const downloads = [
  {
    name: 'Droz_Sms',
    id: 'droz-sms',
    format: 'Android APK',
    status: 'Available',
    platform: 'Android',
    description: 'Messaging app package for direct access via the official public download link.',
    changelog: ['Modern messaging UI', 'Mobile-friendly chat flow', 'Easy access download'],
    link: 'https://drive.google.com/file/d/1-v8UhgbBWK-iuuSMCaHc5bvMPyd5dIfp/view?usp=sharing',
    instructions: 'Download the APK from the official Google Drive link above.',
  },
  {
    name: 'Droz_App',
    id: 'droz-app',
    format: 'Android APK',
    status: 'Available',
    platform: 'Android',
    description: 'Learning and study app package for students and digital product users.',
    changelog: ['Resource organization', 'Study workflow support', 'Educational access design'],
    link: 'https://drive.google.com/file/d/1puJgs3w5DL2rVc6nkUaoxn0TKposlg0P/view?usp=sharing',
    instructions: 'Download the APK from the official Google Drive link above.',
  },
]

const mediaItems = [
  {
    title: 'Droz_Developer',
    image: profileImage,
    type: 'Developer portrait',
  },
  {
    title: 'App interface concept',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    type: 'Mobile design',
  },
  {
    title: 'Development workspace',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    type: 'Engineering flow',
  },
]

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCU1ViBu21kCqpGnhoFMfhCw' },
  { label: 'Instagram', href: 'https://www.instagram.com/droz_developer/#' },
  { label: 'Facebook', href: 'https://www.facebook.com/Dzaddy07' },
]

function buildWhatsAppLink(message) {
  return `${whatsappLink}?text=${encodeURIComponent(message)}`
}

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`)
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Please add a subject.'
    if (!formData.message.trim()) nextErrors.message = 'Please write your message.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      document.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus()
      return
    }

    const subject = encodeURIComponent(`Droz_Developer enquiry: ${formData.subject.trim()}`)
    const body = encodeURIComponent(
      `Full name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    )

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setErrors({})
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand-mark" aria-label="Droz_Developer home">
            <span className="brand-dot" aria-hidden="true" />
            Droz_Developer
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="main-navigation"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="main-navigation" className={`main-nav ${navOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setNavOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        <section id="home" className="hero-section">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <span className="eyebrow">Digital products · Android apps · Web systems</span>
              <h1>Turning Ideas Into Digital Reality.</h1>
              <p className="hero-text">
                I create digital experiences, software applications, and technology-driven solutions designed to turn ideas into meaningful products.
              </p>
              <p className="hero-slogan">"Building Ideas. Creating Technology. Shaping Tomorrow."</p>

              <div className="hero-actions">
                <a href="#projects" className="primary-btn">
                  Explore My Projects
                </a>
                <a href={buildWhatsAppLink('Hi Droz_Developer, I would like to discuss a project opportunity.')} className="secondary-btn">
                  Let&apos;s Work Together
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Product showcase preview" data-reveal>
              <div className="floating-card card-top">
                <span className="mini-label">Product focus</span>
                <strong>Digital experiences</strong>
              </div>
              <div className="device-preview">
                <div className="screen-glow" aria-hidden="true" />
                <div className="screen-ui">
                  <div className="screen-bar" />
                  <div className="screen-grid">
                    <span className="chip">Android</span>
                    <span className="chip">Web</span>
                    <span className="chip">Innovation</span>
                  </div>
                  <div className="screen-panels">
                    <div className="panel large" />
                    <div className="panel small" />
                    <div className="panel small alt" />
                  </div>
                </div>
              </div>
              <div className="floating-card card-bottom">
                <span className="mini-label">Core areas</span>
                <strong>Apps · Web · Strategy</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap" data-reveal>
          <div className="container about-grid">
            <div className="about-portrait">
              <div className="portrait-frame">
                <img className="portrait-image" src={profileImage} alt="Portrait of Ivan John Mwalongo, also known as Droz_Developer" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="section-copy">
              <span className="section-kicker">About</span>
              <h2>Meet the Developer Behind the Brand</h2>
              <p>
                I&apos;m Ivan John Mwalongo, also known as Droz_Developer. I build software applications, web experiences, and digital products, bringing a Health Information Technology perspective to practical technology solutions.
              </p>
              <p>
                I have two years of experience building systems and applications, with a focus on mobile app development, web technology, data-driven systems, and thoughtful problem solving.
              </p>

              <div className="tech-stack">
                <span>Java</span>
                <span>Android Studio</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Web development</span>
                <span>Visual Studio Code</span>
                <span>XAMPP</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap alt-surface" data-reveal>
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">My background</span>
              <h2>Technology shaped by health information.</h2>
              <p className="section-intro">
                A foundation in health information technology, paired with hands-on experience building software systems and applications.
              </p>
            </div>

            <div className="profile-highlights" aria-label="Career highlights">
              <article className="profile-highlight">
                <strong>2 years</strong>
                <span>Building systems and applications</span>
              </article>
              <article className="profile-highlight">
                <strong>Diploma</strong>
                <span>Health Information Technology</span>
              </article>
              <article className="profile-highlight">
                <strong>Health + technology</strong>
                <span>Practical, people-focused solutions</span>
              </article>
            </div>

            <div className="education-grid">
              <article className="education-card">
                <span className="section-kicker">Professional experience</span>
                <h3>Systems &amp; Application Development</h3>
                <p>Two years of experience building systems and applications, developing practical digital tools and continuing to grow through hands-on projects.</p>
              </article>
              <article className="education-card">
                <span className="section-kicker">Diploma</span>
                <h3>Health Information Technology</h3>
                <p>Kilenzi Memorial College of Health and Allied Science</p>
              </article>
              <article className="education-card">
                <span className="section-kicker">Secondary education</span>
                <h3>Kimbiji Secondary School</h3>
                <p>Kigamboni District, Dar es Salaam, Tanzania</p>
              </article>
              <article className="education-card">
                <span className="section-kicker">Primary education</span>
                <h3>Sandary Primary School</h3>
                <p>Temeke District, Dar es Salaam, Tanzania</p>
              </article>
            </div>
          </div>
        </section>

        <section id="approach" className="section-wrap approach-section" data-reveal>
          <div className="container">
            <div className="section-header approach-heading">
              <span className="section-kicker">Why work together</span>
              <h2>Good work starts with a clear conversation.</h2>
              <p>
                Get direct communication, a shared plan, and real products you can explore before deciding what to build next.
              </p>
            </div>

            <div className="approach-grid">
              <article className="approach-card">
                <span className="approach-number">01</span>
                <h3>Talk directly with the builder</h3>
                <p>Share your idea with the person working on it, and keep questions and decisions in one clear conversation.</p>
                <a href={buildWhatsAppLink('Hi Droz_Developer, I have an idea I would like to discuss.')}>Start on WhatsApp</a>
              </article>
              <article className="approach-card">
                <span className="approach-number">02</span>
                <h3>Agree on the plan first</h3>
                <p>Discuss the goal, key features, platform, budget, and next steps before development begins.</p>
                <a href="#contact">Share your project brief</a>
              </article>
              <article className="approach-card">
                <span className="approach-number">03</span>
                <h3>Explore real products</h3>
                <p>Review the available Android apps and their public download links to see the kind of work being built.</p>
                <a href="#downloads">Browse app downloads</a>
              </article>
            </div>

            <div className="project-steps" aria-label="Project steps">
              <div><span>First</span><strong>Tell me what you need</strong></div>
              <span className="step-divider" aria-hidden="true" />
              <div><span>Next</span><strong>Set the scope together</strong></div>
              <span className="step-divider" aria-hidden="true" />
              <div><span>Then</span><strong>Build, review, refine</strong></div>
              <a href={buildWhatsAppLink('Hi Droz_Developer, I would like to discuss a project.')} className="primary-btn">
                Discuss your project
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrap alt-surface" data-reveal>
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Portfolio</span>
              <h2>Built With Vision</h2>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article id={project.id} key={project.name} className="project-card">
                  <div className="project-visual">
                    <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
                    <span className="project-badge">{project.badge}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-topline">
                      <h3>{project.name}</h3>
                      <span className="status-pill">{project.status}</span>
                    </div>
                    <p>{project.description}</p>
                    <ul className="feature-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="tech-row">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-meta">
                      <strong>{project.available}</strong>
                    </div>
                    <div className="card-actions">
                      <a href={project.detailsLink} className="mini-btn primary">
                        {project.status === 'Available' ? 'App details' : 'Discuss this project'}
                      </a>
                      <a href={project.download ?? '#downloads'} className="mini-btn secondary" target={project.download ? '_blank' : undefined} rel={project.download ? 'noopener noreferrer' : undefined}>
                        {project.download ? 'Open on Google Drive' : 'Browse downloads'}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap" data-reveal>
          <div className="container">
            <div className="section-header center">
              <span className="section-kicker">Capabilities</span>
              <h2>Skills &amp; Technologies</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.category} className="skill-card">
                  <h3>{skill.category}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-wrap alt-surface" data-reveal>
          <div className="container">
            <div className="section-header center">
              <span className="section-kicker">Services</span>
              <h2>Let&apos;s Build Something Great</h2>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon" aria-hidden="true">✦</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={buildWhatsAppLink(service.message)} className="service-link">
                    {service.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="section-wrap" data-reveal>
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">News</span>
              <h2>What&apos;s New at Droz_Developer</h2>
            </div>

            <div className="update-grid">
              {announcements.map((announcement) => (
                <article key={announcement.title} className="update-card">
                  <img src={announcement.image} alt={announcement.title} loading="lazy" />
                  <div className="update-body">
                    <div className="update-meta">
                      <span>{announcement.date}</span>
                      <span>{announcement.project}</span>
                    </div>
                    <h3>{announcement.title}</h3>
                    <p>{announcement.description}</p>
                    <div className="update-details">{announcement.details}</div>
                    <a href={announcement.link}>View {announcement.project} project</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="downloads" className="section-wrap alt-surface" data-reveal>
          <div className="container">
            <div className="section-header center">
              <span className="section-kicker">App center</span>
              <h2>Discover My Applications</h2>
            </div>

            <div className="download-grid">
              {downloads.map((download) => (
                <article id={`download-${download.id}`} key={download.name} className="download-card">
                  <div className="download-header">
                    <div className="download-badge">{download.platform}</div>
                    <span className="download-status">{download.status}</span>
                  </div>
                  <h3>{download.name}</h3>
                  <p>{download.description}</p>
                  <div className="download-meta">
                    <span>Format: {download.format}</span>
                    <span>Download host: Google Drive</span>
                  </div>
                  <ul>
                    {download.changelog.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="instruction-copy">{download.instructions}</p>
                  <a href={download.link} className="primary-btn small-btn" target="_blank" rel="noopener noreferrer">
                    Open download on Google Drive
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="media" className="section-wrap" data-reveal>
          <div className="container">
            <div className="section-header center">
              <span className="section-kicker">Media</span>
              <h2>See Technology in Action</h2>
            </div>

            <div className="media-grid">
              {mediaItems.map((media) => (
                <article key={media.title} className="media-card">
                  <a
                    className="media-image-link"
                    href={media.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open full-size image: ${media.title}`}
                  >
                    <img src={media.image} alt={media.title} loading="lazy" />
                    <span className="media-open-label">View image</span>
                  </a>
                  <div className="media-body">
                    <span>{media.type}</span>
                    <h3>{media.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-wrap" data-reveal>
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">Contact</span>
              <h2>Have an Idea? Let&apos;s Build It.</h2>
              <p>
                Have a project, a collaboration opportunity, or a question? Get in touch and let&apos;s discuss how we can turn your idea into something meaningful.
              </p>

              <div className="contact-list">
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                <a href={whatsappLink}>0619551619</a>
              </div>

              <div className="location-card">
                <div className="location-copy">
                  <span className="location-kicker">Based in</span>
                  <strong>Kimara Stop Over</strong>
                  <span>Dar es Salaam, Tanzania</span>
                  <a href={mapDirectionsUrl} target="_blank" rel="noreferrer">
                    Open directions
                  </a>
                </div>
                <a
                  className="location-map"
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View the approximate map location for Kimara Stop Over, Dar es Salaam"
                >
                  <span className="map-pin" aria-hidden="true" />
                  <span className="map-caption">
                    <strong>Kimara Stop Over</strong>
                    <span>View map and directions</span>
                  </span>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field-grid">
                <label>
                  <span>Full name</span>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && <small id="contact-name-error">{errors.name}</small>}
                </label>

                <label>
                  <span>Email address</span>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && <small id="contact-email-error">{errors.email}</small>}
                </label>

                <label className="full-width">
                  <span>Subject</span>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    required
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  />
                  {errors.subject && <small id="contact-subject-error">{errors.subject}</small>}
                </label>

                <label className="full-width">
                  <span>Message</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea..."
                    rows="6"
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  />
                  {errors.message && <small id="contact-message-error">{errors.message}</small>}
                </label>
              </div>

              <button type="submit" className="primary-btn form-submit">
                Send message
              </button>
              {submitted && <p className="success-note" role="status">Your email app should open with a draft. The message is not sent until you send it from your email app. If it does not open, email {emailAddress} directly.</p>}
            </form>
          </div>
        </section>

        <section id="social" className="section-wrap social-wrap" data-reveal>
          <div className="container">
            <div className="section-header center">
              <span className="section-kicker">Connect</span>
              <h2>Connect With Droz_Developer</h2>
            </div>

            <div className="social-grid">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href || '#'}
                  className={`social-pill ${link.href ? '' : 'disabled'}`}
                  aria-disabled={!link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    if (!link.href) event.preventDefault()
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-welcome">
          <span className="footer-spark footer-spark-left" aria-hidden="true">✦</span>
          <p className="footer-thanks">Thank you for your company.</p>
          <p className="footer-welcome-message">Welcome back!</p>
          <span className="footer-spark footer-spark-right" aria-hidden="true">✦</span>
        </div>
        <div className="container footer-wrap">
          <div>
            <a href="#home" className="brand-mark footer-brand">
              <span className="brand-dot" aria-hidden="true" />
              Droz_Developer
            </a>
          </div>
          <div className="footer-credit">
            <span>Developed by Droz_Developer</span>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
          <div className="footer-links">
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            <a href={whatsappLink}>WhatsApp</a>
          </div>
        </div>
      </footer>

      <a href={whatsappLink} className="floating-whatsapp" aria-label="Contact on WhatsApp" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </>
  )
}

export default App
