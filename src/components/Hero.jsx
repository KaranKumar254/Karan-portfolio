import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import {
  FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown,
  FiCode, FiTerminal
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiMongodb, SiJavascript,
  SiPython, SiAngular, SiExpress, SiGit
} from 'react-icons/si';

const floatingIcons = [
  { icon: SiReact, color: '#61DAFB', size: 40, top: '15%', left: '8%', delay: 0 },
  { icon: SiNodedotjs, color: '#68A063', size: 36, top: '25%', right: '10%', delay: 0.5 },
  { icon: SiJavascript, color: '#F7DF1E', size: 32, top: '65%', left: '6%', delay: 1 },
  { icon: SiMongodb, color: '#47A248', size: 34, top: '72%', right: '8%', delay: 1.5 },
  { icon: SiPython, color: '#3776AB', size: 30, top: '45%', left: '4%', delay: 0.8 },
  { icon: SiAngular, color: '#DD0031', size: 30, top: '40%', right: '5%', delay: 1.2 },
  { icon: SiGit, color: '#F05032', size: 28, top: '80%', left: '15%', delay: 0.3 },
  { icon: SiExpress, color: '#FFFFFF', size: 26, top: '10%', right: '20%', delay: 0.7 },
];

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: '2+', label: 'Years Learning' },
  { value: '15+', label: 'Technologies' },
];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        // ✅ FIX 1: bottom padding so content never hides behind scroll indicator
        paddingBottom: isMobile ? '40px' : '100px',
      }}
    >
      {/* Background Gradient Blobs */}
      <motion.div
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
          top: '-100px', left: '-200px', filter: 'blur(40px)', pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ x: -mousePos.x * 0.3, y: -mousePos.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        style={{
          position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)',
          bottom: '-100px', right: '-100px', filter: 'blur(40px)', pointerEvents: 'none',
        }}
      />

      {/* Grid Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px', pointerEvents: 'none',
      }} />

      {/* ✅ FIX 2: Floating icons hidden on mobile — they overflow outside screen edges */}
      {!isMobile && floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.1, 0.25, 0.1], scale: 1, y: [-8, 8, -8] }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay: item.delay },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
            scale: { duration: 0.8, delay: item.delay },
          }}
          style={{
            position: 'absolute',
            top: item.top, left: item.left, right: item.right,
            color: item.color, fontSize: item.size,
            filter: `drop-shadow(0 0 10px ${item.color}60)`,
            pointerEvents: 'none', zIndex: 1,
          }}
        >
          <item.icon />
        </motion.div>
      ))}

      {/* Main Content */}
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          // ✅ FIX 3: tighter side padding on mobile
          padding: isMobile ? '0 20px' : '0 24px',
          display: 'grid',
          // ✅ FIX 4: minmax(320px) was too wide for phones — min() keeps it within screen
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          alignItems: 'center',
          gap: isMobile ? '40px' : '60px',
          position: 'relative', zIndex: 2,
        }}
      >
        {/* ── Left: Text Content ── */}
        <div>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', borderRadius: '50px',
              background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.3)',
              marginBottom: '28px',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4ADE80', boxShadow: '0 0 10px #4ADE80',
                animation: 'pulse 2s infinite', display: 'inline-block',
              }} />
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono', letterSpacing: '0.05em' }}>
                Available for hire
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Space Grotesk',
              // ✅ FIX 5: slightly lower min size so it fits on 360px phones
              fontSize: 'clamp(2.2rem, 6vw, 5rem)',
              fontWeight: '800', lineHeight: '1.1',
              letterSpacing: '-0.03em', marginBottom: '16px',
            }}
          >
            Hi, I'm{' '}
            <span className="gradient-text-primary">Karan Kumar</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
              fontFamily: 'Space Grotesk', fontWeight: '500',
              color: 'rgba(255,255,255,0.85)', marginBottom: '24px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}
          >
            <FiTerminal style={{ color: '#6C63FF', flexShrink: 0 }} />
            <TypeAnimation
              sequence={['Full Stack Developer', 2000, 'MERN Stack Engineer', 2000, 'MEAN Stack Engineer', 2000, 'React Developer', 2000, 'Node.js Developer', 2000]}
              wrapper="span" speed={50} repeat={Infinity}
              style={{ color: '#00D9FF' }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              color: 'rgba(255,255,255,0.55)', fontSize: '1rem',
              lineHeight: '1.8', maxWidth: '500px', marginBottom: '36px',
            }}
          >
            Passionate B.Tech CSE student specializing in Full Stack Development.
            Building dynamic, scalable and secure web applications using MERN & MEAN
            technologies. Focused on creating elegant solutions to real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}
          >
            <motion.a href="mailto:babukaran526@gmail.com" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FiMail /> Hire Me
            </motion.a>
            <motion.a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FiDownload /> Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono' }}>CONNECT</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            {[
              { href: 'https://github.com/KaranKumar254', icon: FiGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/karan-kumar-282278301/', icon: FiLinkedin, label: 'LinkedIn' },
              { href: 'mailto:babukaran526@gmail.com', icon: FiMail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(108,99,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)', fontSize: '17px',
                  transition: 'all 0.3s ease', textDecoration: 'none',
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Profile Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {/* ✅ FIX 6: added margin so rotating rings don't bleed off screen edges on mobile */}
          <div style={{ position: 'relative', margin: isMobile ? '50px 55px' : '60px' }}>

            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', inset: '-20px', borderRadius: '50%', border: '2px dashed rgba(108,99,255,0.3)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', inset: '-40px', borderRadius: '50%', border: '1px dashed rgba(0,217,255,0.2)' }}
            />

            {/* Profile Image */}
            <motion.div
              animate={{ boxShadow: ['0 0 30px rgba(108,99,255,0.3)', '0 0 60px rgba(108,99,255,0.5)', '0 0 30px rgba(108,99,255,0.3)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              style={{
                // ✅ FIX 7: smaller profile circle on mobile
                width: isMobile ? '200px' : '280px',
                height: isMobile ? '200px' : '280px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(0,217,255,0.2))',
                padding: '4px', position: 'relative',
              }}
            >
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', position: 'relative',
              }}>
                <img src="/profile.jpg" alt="Karan Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
            </motion.div>

            {/* Badge: React — ✅ FIX 8: was left:-40px (overflow). Now tucked inside on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              style={{
                position: 'absolute',
                bottom: isMobile ? '-8px' : '30px',
                left: isMobile ? '-8px' : '-40px',
                background: 'rgba(10,10,26,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(108,99,255,0.3)',
                borderRadius: '12px',
                padding: isMobile ? '7px 10px' : '10px 16px',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 8px 32px rgba(108,99,255,0.2)',
                zIndex: 10,
              }}
            >
              <SiReact style={{ color: '#61DAFB', fontSize: isMobile ? '16px' : '20px', animation: 'spin 5s linear infinite' }} />
              <div>
                <div style={{ color: 'white', fontSize: isMobile ? '0.72rem' : '0.8rem', fontWeight: '600' }}>React</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Frontend</div>
              </div>
            </motion.div>

            {/* Badge: Node.js — ✅ FIX 9: was right:-50px (overflow). Now tucked inside on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              style={{
                position: 'absolute',
                top: isMobile ? '-8px' : '20px',
                right: isMobile ? '-8px' : '-50px',
                background: 'rgba(10,10,26,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,217,255,0.3)',
                borderRadius: '12px',
                padding: isMobile ? '7px 10px' : '10px 16px',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: '0 8px 32px rgba(0,217,255,0.15)',
                zIndex: 10,
              }}
            >
              <SiNodedotjs style={{ color: '#68A063', fontSize: isMobile ? '16px' : '20px' }} />
              <div>
                <div style={{ color: 'white', fontSize: isMobile ? '0.72rem' : '0.8rem', fontWeight: '600' }}>Node.js</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Backend</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats Row — desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '60px', left: '50%',
          transform: 'translateX(-50%)',
          // ✅ FIX 10: use clamp so stats don't overflow on mid-size screens
          gap: 'clamp(20px, 4vw, 48px)',
          zIndex: 2, whiteSpace: 'nowrap',
        }}
        className="hidden md:flex"
      >
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Space Grotesk', fontSize: '1.8rem', fontWeight: '800',
              background: 'linear-gradient(135deg, #6C63FF, #00D9FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{s.value}</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '2px' }}>{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator — mobile only */}
      <Link to="about" smooth duration={800}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity }, opacity: { duration: 0.5, delay: 1.5 } }}
          style={{
            position: 'absolute', bottom: '28px', left: '50%',
            transform: 'translateX(-50%)', cursor: 'pointer', zIndex: 2,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
          }}
          className="md:hidden"
        >
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>Scroll</span>
          <FiArrowDown style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px' }} />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
