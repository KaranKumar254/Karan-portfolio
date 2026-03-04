import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiCode } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const footerLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/KaranKumar254', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/karan-kumar-282278301/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:babukaran526@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, href: 'https://wa.me/919546322440', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        paddingTop: '60px',
        paddingBottom: '32px',
        borderTop: '1px solid rgba(108,99,255,0.1)',
        background: 'rgba(5,5,8,0.9)',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.5), rgba(0,217,255,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6C63FF, #00D9FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Space Grotesk',
                fontWeight: '800',
                fontSize: '16px',
                color: 'white',
                boxShadow: '0 4px 15px rgba(108,99,255,0.4)',
              }}>
                KK
              </div>
              <span style={{
                fontFamily: 'Space Grotesk',
                fontWeight: '700',
                fontSize: '1.1rem',
                color: 'white',
              }}>
                Karan Kumar
              </span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.875rem',
              lineHeight: '1.7',
              maxWidth: '260px',
              marginBottom: '20px',
            }}>
              Full Stack Developer specializing in MERN & MEAN stacks. Building scalable web applications with modern technologies.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Space Grotesk',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    width: 'fit-content',
                  }}
                  onMouseEnter={e => e.target.style.color = '#6C63FF'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Space Grotesk',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="mailto:babukaran526@gmail.com"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#6C63FF'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                babukaran526@gmail.com
              </a>
              <a
                href="tel:+919546322440"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#6C63FF'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                +91 9546322440
              </a>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
                Bihar, India 🇮🇳
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255,255,255,0.05)',
          marginBottom: '24px',
        }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            © 2026 Karan Kumar. Made with{' '}
            <FiHeart style={{ color: '#FF6584', fontSize: '13px' }} />
            {' '}using React & Tailwind
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '0.78rem',
            fontFamily: 'JetBrains Mono',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}>
            <FiCode style={{ fontSize: '12px' }} />
            Designed & Built by Karan Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
