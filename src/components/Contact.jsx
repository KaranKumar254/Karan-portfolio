import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiMail, FiPhone, FiSend, FiUser, FiMessageSquare,
  FiGithub, FiLinkedin, FiInstagram, FiTwitter,
  FiCheckCircle, FiAlertCircle, FiLoader
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import { fadeInLeft, fadeInRight } from '../animations/variants';
import { useRef as useFormRef } from 'react';

const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/KaranKumar254',
    label: 'GitHub',
    color: '#FFFFFF',
    bg: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.12)',
  },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/karan-kumar-282278301/',
    label: 'LinkedIn',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.1)',
    border: 'rgba(10,102,194,0.25)',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/919546322440',
    label: 'WhatsApp',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.1)',
    border: 'rgba(37,211,102,0.25)',
  },
];

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'babukaran526@gmail.com', href: 'mailto:babukaran526@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 9546322440', href: 'tel:+919546322440' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/919546322440' },
];

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ user_name: '', user_email: '', user_message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'service_j3ajzao',
        'template_5qbvdya',
        formRef.current,
        'MGKGxWH1jsJRNVfaa'
      );
      setStatus('success');
      setFormData({ user_name: '', user_email: '', user_message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '100px 0', position: 'relative' }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        right: '-100px',
        top: '30%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInLeft}
          >
            {/* Intro card */}
            <div style={{
              padding: '28px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(108,99,255,0.15)',
              marginBottom: '24px',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #6C63FF20, #00D9FF20)',
                border: '1px solid rgba(108,99,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6C63FF',
                fontSize: '22px',
                marginBottom: '16px',
              }}>
                <FiMessageSquare />
              </div>
              <h3 style={{ color: 'white', fontFamily: 'Space Grotesk', fontWeight: '700', marginBottom: '10px', fontSize: '1.1rem' }}>
                Get In Touch
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                I'm currently open to freelance opportunities, internships, and full-time roles.
                Whether it's a question or a project, feel free to reach out!
              </p>
            </div>

            {/* Contact Info Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(108,99,255,0.1)',
                    border: '1px solid rgba(108,99,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6C63FF',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}>
                    <info.icon />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {info.label}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: '500' }}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'JetBrains Mono', marginBottom: '14px' }}>
                Social Media
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {socialLinks.map(({ icon: Icon, href, label, color, bg, border }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    title={label}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: bg,
                      border: `1px solid ${border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color,
                      fontSize: '18px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInRight}
          >
            <div style={{
              padding: '32px',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(108,99,255,0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono' }}>
                  // Send a message
                </span>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'rgba(74,222,128,0.1)',
                    border: '1px solid rgba(74,222,128,0.3)',
                    color: '#4ADE80',
                    fontSize: '0.9rem',
                    marginBottom: '20px',
                  }}
                >
                  <FiCheckCircle style={{ fontSize: '18px', flexShrink: 0 }} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: 'rgba(255,101,132,0.1)',
                    border: '1px solid rgba(255,101,132,0.3)',
                    color: '#FF6584',
                    fontSize: '0.9rem',
                    marginBottom: '20px',
                  }}
                >
                  <FiAlertCircle style={{ fontSize: '18px', flexShrink: 0 }} />
                  Failed to send. Please try again or email directly.
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Name */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
                    Your Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FiUser style={{
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'rgba(255,255,255,0.2)',
                      fontSize: '16px',
                    }} />
                    <input
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Karan Kumar"
                      required
                      className="form-input"
                      style={{ paddingLeft: '42px' }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
                    Your Email
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FiMail style={{
                      position: 'absolute',
                      left: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'rgba(255,255,255,0.2)',
                      fontSize: '16px',
                    }} />
                    <input
                      name="user_email"
                      type="email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="form-input"
                      style={{ paddingLeft: '42px' }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
                    Message
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FiMessageSquare style={{
                      position: 'absolute',
                      left: '14px',
                      top: '16px',
                      color: 'rgba(255,255,255,0.2)',
                      fontSize: '16px',
                    }} />
                    <textarea
                      name="user_message"
                      value={formData.user_message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="form-input"
                      style={{ paddingLeft: '42px', resize: 'vertical', minHeight: '130px' }}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: status === 'sending' ? 0.7 : 1,
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <FiLoader style={{ fontSize: '16px' }} />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend style={{ fontSize: '16px' }} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
