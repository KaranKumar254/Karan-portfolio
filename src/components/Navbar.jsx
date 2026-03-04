import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useScrollProgress } from '../hooks/useScrollProgress';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isScrolled, scrollProgress } = useScrollProgress();

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isScrolled ? '12px 24px' : '20px 24px',
          transition: 'all 0.3s ease',
          background: isScrolled
            ? 'rgba(5, 5, 8, 0.85)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(108, 99, 255, 0.15)'
            : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ cursor: 'pointer' }}
          >
            <Link to="home" smooth duration={500}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

                {/* Profile Image */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #6C63FF',
                    boxShadow: '0 4px 15px rgba(108,99,255,0.4)',
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Karan Kumar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Name */}
                <span
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    color: 'white',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Karan Kumar
                </span>

              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveSection(link.to)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: activeSection === link.to ? '600' : '400',
                  color:
                    activeSection === link.to
                      ? '#6C63FF'
                      : 'rgba(255,255,255,0.7)',
                  background:
                    activeSection === link.to
                      ? 'rgba(108, 99, 255, 0.12)'
                      : 'transparent',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
                className="nav-link-item"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(108,99,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '16px',
              }}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="mailto:babukaran526@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary hidden md:flex"
              style={{ padding: '9px 18px', fontSize: '0.85rem' }}
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(108,99,255,0.25)',
                cursor: 'pointer',
                color: 'white',
                fontSize: '18px',
              }}
              className="md:hidden"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: 'hidden',
                background: 'rgba(5, 5, 8, 0.95)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(108,99,255,0.15)',
                marginTop: '12px',
                borderRadius: '16px',
              }}
            >
              <div style={{ padding: '16px' }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div style={{ padding: '8px 0', paddingTop: '12px', borderTop: '1px solid rgba(108,99,255,0.1)' }}>
                  <a href="mailto:babukaran526@gmail.com" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
