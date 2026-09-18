import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Smartphone, ShieldCheck, ShoppingCart, Laptop, Code, Palette, RefreshCw, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const process = [
        { step: "01", title: "Discovery", desc: "Understanding your business goals and requirements." },
        { step: "02", title: "Strategy", desc: "Planning the technical architecture and design direction." },
        { step: "03", title: "Development", desc: "Building with clean, efficient, and scalable code." },
        { step: "04", title: "Launch", desc: "Testing, deployment, and post-launch support." }
    ];

    return (
        <Motion.div
            className="services-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="services-hero-section">
                <div className="container">
                    <Motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our <span className="text-gradient">Services</span></h1>
                        <p className="hero-tagline">Comprehensive Technical Solutions</p>
                        <p className="hero-description">
                            Engineering forward-thinking digital experiences that drive business growth.
                        </p>
                    </Motion.div>
                </div>
            </section>

            <section className="section what-we-build-section">
                <div className="container">
                    <div className="section-header">
                        <h2>What We Build</h2>
                        <p>Comprehensive digital solutions designed to support your business goals</p>
                    </div>
                    <div className="what-we-build-grid">
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <div className="service-icon-wrapper"><Laptop size={32} /></div>
                            <h3>Website Development</h3>
                            <p>Professional, responsive websites designed to establish a strong online presence.</p>
                        </Motion.div>
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="service-icon-wrapper"><ShoppingCart size={32} /></div>
                            <h3>E-commerce Development</h3>
                            <p>Online stores that make it easy for businesses to showcase products and accept customer orders.</p>
                        </Motion.div>
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="service-icon-wrapper"><Code size={32} /></div>
                            <h3>Custom Web Applications</h3>
                            <p>Business-focused web applications designed around specific workflows and requirements.</p>
                        </Motion.div>
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="service-icon-wrapper"><Smartphone size={32} /></div>
                            <h3>Mobile App Development</h3>
                            <p>Modern mobile applications for Android and iOS.</p>
                        </Motion.div>
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="service-icon-wrapper"><Wrench size={32} /></div>
                            <h3>Custom Software</h3>
                            <p>Software solutions designed to solve specific business problems.</p>
                        </Motion.div>
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="service-icon-wrapper"><Palette size={32} /></div>
                            <h3>UI/UX Design</h3>
                            <p>Clean, intuitive interfaces focused on usability and user experience.</p>
                        </Motion.div>
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="service-icon-wrapper"><RefreshCw size={32} /></div>
                            <h3>Website Redesign</h3>
                            <p>Modernize outdated websites with better design, performance and responsiveness.</p>
                        </Motion.div>
                        <Motion.div
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className="service-icon-wrapper"><ShieldCheck size={32} /></div>
                            <h3>Maintenance & Support</h3>
                            <p>Ongoing improvements, updates, fixes and technical support.</p>
                        </Motion.div>
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>How We Work</h2>
                        <p>A proven process for delivering excellence.</p>
                    </div>
                    <div className="process-grid">
                        {process.map((p, index) => (
                            <div key={index} className="process-step">
                                <span className="step-number">{p.step}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section technologies-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Technologies We Use</h2>
                        <p>Built with modern, reliable, and scalable technology stacks</p>
                    </div>
                    <div className="technologies-grid">
                        <div className="tech-item">
                            <h3>React</h3>
                        </div>
                        <div className="tech-item">
                            <h3>TypeScript</h3>
                        </div>
                        <div className="tech-item">
                            <h3>JavaScript</h3>
                        </div>
                        <div className="tech-item">
                            <h3>Tailwind CSS</h3>
                        </div>
                        <div className="tech-item">
                            <h3>Django</h3>
                        </div>
                        <div className="tech-item">
                            <h3>Node.js</h3>
                        </div>
                        <div className="tech-item">
                            <h3>MySQL</h3>
                        </div>
                        <div className="tech-item">
                            <h3>PostgreSQL</h3>
                        </div>
                        <div className="tech-item">
                            <h3>Firebase</h3>
                        </div>
                        <div className="tech-item">
                            <h3>Supabase</h3>
                        </div>
                        <div className="tech-item">
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Us</h2>
                        <p>What sets us apart.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Modern Technology</h3>
                            <p>Built with reliable and scalable technologies.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Business Focused</h3>
                            <p>Solutions designed around real business needs.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Mobile First</h3>
                            <p>Experiences that work beautifully across devices.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Personal Support</h3>
                            <p>Direct communication throughout the project.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about our services and process</p>
                    </div>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>What type of websites do you build?</h3>
                            <p>We build responsive, modern websites using React, Next.js, and other modern tech stacks tailored to your business needs.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can you build a website from scratch?</h3>
                            <p>Yes, we build custom websites from scratch based on your design and functionality requirements.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can you redesign an existing website?</h3>
                            <p>Absolutely. We modernize outdated websites with better design, performance, and responsiveness.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can you build mobile applications?</h3>
                            <p>Yes, we develop mobile applications for Android and iOS using modern frameworks.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can you connect my website to a backend?</h3>
                            <p>Yes, we integrate websites with custom backends, databases, and third-party APIs.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Can you integrate WhatsApp?</h3>
                            <p>Yes, we can integrate WhatsApp messaging and chat functionality into your website or app.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How much does a website cost?</h3>
                            <p>Cost depends on the scope and complexity of the project. Contact us for a free quote.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How long does a project take?</h3>
                            <p>Timeline varies by project size. We'll provide a detailed schedule during the discovery phase.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do you provide maintenance?</h3>
                            <p>Yes, we offer ongoing maintenance, updates, fixes, and technical support for all projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Have a project in mind?</h2>
                        <Link to="/contact" className="btn-primary">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </Motion.div>
    );
};

export default Services;
