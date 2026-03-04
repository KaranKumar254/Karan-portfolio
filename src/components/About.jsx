import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiCode, FiUser, FiBookOpen, FiAward, FiGlobe, FiMapPin,
  FiCalendar, FiMail, FiPhone
} from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiAngular } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { staggerContainer, fadeInLeft, fadeInRight, fadeInUp } from '../animations/variants';

const facts = [
  { icon: FiUser, label: 'Name', value: 'Karan Kumar' },
  { icon: FiMail, label: 'Email', value: 'babukaran526@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 9546322440' },
  { icon: FiMapPin, label: 'Location', value: 'Bihar, India' },
  { icon: FiBookOpen, label: 'Degree', value: 'B.Tech CSE' },
  { icon: FiCalendar, label: 'Graduation', value: 'Expected 2027' },
  { icon: FiGlobe, label: 'Languages', value: 'Hindi, English' },
  { icon: FiAward, label: 'Status', value: 'Open to Work' },
];

const highlights = [
  { icon: SiReact, color: '#61DAFB', title: 'Frontend Expert', desc: 'React, Angular, Tailwind' },
  { icon: SiNodedotjs, color: '#68A063', title: 'Backend Dev', desc: 'Node.js, Express, REST APIs' },
  { icon: SiMongodb, color: '#47A248', title: 'Database Pro', desc: 'MongoDB, MySQL, Firebase' },
  { icon: FiAward, color: '#F59E0B', title: '5+ Certs', desc: 'Google, Microsoft, Oracle' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '100px 0', position: 'relative' }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          right: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,217,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="Passionate about crafting exceptional digital experiences"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInLeft}
          >
            {/* Intro */}
            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(108,99,255,0.15)',
                borderRadius: '20px',
                padding: '28px',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #6C63FF22, #00D9FF22)',
                    border: '1px solid rgba(108,99,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6C63FF',
                    fontSize: '18px',
                  }}
                >
                  <FiCode />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontFamily: 'JetBrains Mono' }}>
                  // about.js
                </span>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.9', fontSize: '0.98rem' }}>
                I am a passionate B.Tech CSE student specializing in{' '}
                <span style={{ color: '#6C63FF', fontWeight: '600' }}>Full Stack Development</span> with
                expertise in MERN & MEAN stacks. I build dynamic, scalable and secure web applications
                using modern technologies.
              </p>
              <br />
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.9', fontSize: '0.98rem' }}>
                Currently pursuing my B.Tech at{' '}
                <span style={{ color: '#00D9FF', fontWeight: '600' }}>Centurion University</span>, I am
                focused on creating efficient, user-friendly and real-world software solutions. I'm also
                passionate about learning emerging technologies like{' '}
                <span style={{ color: '#FF6584', fontWeight: '600' }}>AI & Machine Learning</span>.
              </p>
            </div>

            {/* Highlight Cards */}
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -4 }}
                  style={{
                    padding: '16px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(108,99,255,0.12)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                >
                  <item.icon style={{ color: item.color, fontSize: '22px', marginBottom: '8px' }} />
                  <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem', marginBottom: '2px' }}>
                    {item.title}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Facts Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInRight}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(108,99,255,0.15)',
                borderRadius: '20px',
                padding: '28px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'Space Grotesk',
                fontWeight: '700',
                fontSize: '1.1rem',
                marginBottom: '24px',
              }}>
                Personal Info
              </h3>
              <div style={{ display: 'grid', gap: '14px' }}>
                {facts.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.06 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: i < facts.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(108,99,255,0.1)',
                        border: '1px solid rgba(108,99,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6C63FF',
                        fontSize: '14px',
                        flexShrink: 0,
                      }}
                    >
                      <f.icon />
                    </div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {f.label}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: '500', marginTop: '1px' }}>
                        {f.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,217,255,0.1))',
                border: '1px solid rgba(108,99,255,0.25)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: '1.6' }}>
                Currently open to new opportunities and exciting projects
              </p>
              <a
                href="mailto:babukaran526@gmail.com"
                className="btn-primary"
                style={{ display: 'inline-flex' }}
              >
                <FiMail style={{ fontSize: '15px' }} />
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
