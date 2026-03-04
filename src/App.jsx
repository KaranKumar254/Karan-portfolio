import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import AnimatedCursor from './components/AnimatedCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <Loader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ background: '#050508', minHeight: '100vh' }}
        >
          {/* Animated Cursor - desktop only */}
          <AnimatedCursor />

          {/* Particles Background */}
          <ParticlesBackground />

          {/* Noise texture */}
          <div className="noise-overlay" />

          {/* Navigation */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main Content */}
          <main>
            <Hero />

            {/* Separator */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.2), transparent)',
              maxWidth: '1200px',
              margin: '0 auto',
            }} />

            <About />

            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.15), transparent)',
              maxWidth: '1200px',
              margin: '0 auto',
            }} />

            <Skills />

            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.15), transparent)',
              maxWidth: '1200px',
              margin: '0 auto',
            }} />

            <Projects />

            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.15), transparent)',
              maxWidth: '1200px',
              margin: '0 auto',
            }} />

            <Experience />

            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.15), transparent)',
              maxWidth: '1200px',
              margin: '0 auto',
            }} />

            <Certificates />

            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.15), transparent)',
              maxWidth: '1200px',
              margin: '0 auto',
            }} />

            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </>
  );
};

export default App;
