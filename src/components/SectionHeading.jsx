import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiServer, FiUser, FiBookOpen, FiAward } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../animations/variants';

const SectionHeading = ({ label, title, subtitle }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      style={{ marginBottom: '64px' }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '50px',
          background: 'rgba(108,99,255,0.1)',
          border: '1px solid rgba(108,99,255,0.25)',
          marginBottom: '16px',
        }}
      >
        <span
          style={{
            color: '#A89FFF',
            fontSize: '0.75rem',
            fontFamily: 'JetBrains Mono',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
      </div>
      <h2
        className="section-title"
        style={{ fontFamily: 'Space Grotesk', color: 'white', marginBottom: '12px' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', lineHeight: '1.7' }}>
          {subtitle}
        </p>
      )}
      <div
        style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #6C63FF, #00D9FF)',
          borderRadius: '2px',
          marginTop: '16px',
        }}
      />
    </motion.div>
  );
};

export default SectionHeading;
