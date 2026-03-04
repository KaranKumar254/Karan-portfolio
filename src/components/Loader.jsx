import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="loader-container"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background glow */}
          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="loader-logo"
          >
            KK
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'Space Grotesk',
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
              marginTop: '8px',
              textTransform: 'uppercase',
            }}
          >
            Full Stack Developer
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '48px', width: '240px' }}
          >
            <div className="loader-progress">
              <motion.div
                className="loader-progress-bar"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '8px',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.7rem',
              fontFamily: 'JetBrains Mono',
            }}>
              <span>Loading...</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </motion.div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '40px' }}>
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: i === 0 ? '#6C63FF' : i === 1 ? '#00D9FF' : '#FF6584',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
