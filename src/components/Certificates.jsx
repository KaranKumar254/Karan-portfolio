import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import {
  FiAward,
  FiExternalLink,
  FiShield,
  FiMonitor,
  FiDatabase,
  FiSearch,
  FiCode
} from 'react-icons/fi';

import {
  SiGoogle,
  SiJavascript
} from 'react-icons/si';

import SectionHeading from './SectionHeading';

const certifications = [
  {
    name: 'Microsoft Prompt Engineering',
    issuer: 'Microsoft',
    date: '2025',
    description:
      'Mastered prompt engineering techniques for AI models including GPT series and advanced prompt design.',
    icon: FiMonitor,
    color: '#00A4EF',
    skills: ['Prompt Engineering', 'GPT', 'AI Safety'],
    verified: true,
    link: '/certificates/microsoft.pdf'
  },
  {
    name: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle',
    date: '2025',
    description:
      'Certified in Oracle Cloud Infrastructure including compute, networking and storage services.',
    icon: FiDatabase,
    color: '#F80000',
    skills: ['Cloud Computing', 'OCI', 'Infrastructure'],
    verified: true,
    link: '/certificates/oracle.pdf'
  },
  {
    name: 'Google Generative AI',
    issuer: 'Google',
    date: '2025',
    description:
      'Completed Google Generative AI learning path covering foundation models and responsible AI.',
    icon: SiGoogle,
    color: '#4285F4',
    skills: ['Generative AI', 'Foundation Models', 'AI Ethics'],
    verified: true,
    link: '/certificates/google-genai.pdf'
  },
  {
    name: 'Google Gemini',
    issuer: 'Google',
    date: '2025',
    description:
      'Certified in using Google Gemini for building multimodal AI applications.',
    icon: SiGoogle,
    color: '#EA4335',
    skills: ['Gemini AI', 'Multimodal AI', 'Google AI Studio'],
    verified: true,
    link: '/certificates/google-gemini.pdf'
  },
  {
    name: 'GeeksForGeeks DSA Certification',
    issuer: 'GeeksForGeeks',
    date: '2026',
    description:
      'Completed Data Structures and Algorithms certification demonstrating strong problem solving skills.',
    icon: FiShield,
    color: '#2F8D46',
    skills: ['DSA', 'Algorithms', 'Problem Solving'],
    verified: true,
    link: '/certificates/gfg-dsa.pdf'
  },
  {
    name: 'JavaScript Certificate',
    issuer: 'HackerRank',
    date: '2026',
    description:
      'Demonstrated strong knowledge of JavaScript programming and coding challenges.',
    icon: SiJavascript,
    color: '#F7DF1E',
    skills: ['JavaScript', 'Programming', 'Problem Solving'],
    verified: true,
    link: '/certificates/hackerrank-js.pdf'
  },
  {
    name: 'Hackathon',
    issuer: 'Centurion University',
    date: '2026',
    description:
      'Participated in a national hackathon developing innovative technology solutions.',
    icon: FiAward,
    color: '#7C3AED',
    skills: ['Hackathon', 'Innovation', 'Teamwork'],
    verified: true,
    link: '/certificates/hackathon-centurion.pdf'
  },
  {
    name: 'Advanced Java Certification',
    issuer: 'ISO Certified Program',
    date: '2026',
    description:
      'Advanced Java development including JDBC, Servlets and enterprise applications.',
    icon: FiCode,
    color: '#007396',
    skills: ['Advanced Java', 'JDBC', 'Servlets'],
    verified: true,
    link: '/certificates/advanced-java.jpg'
  }
];

const CertCard = ({ cert, index, inView }) => (
  <motion.a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.12, duration: 0.5 }}
    whileHover={{ scale: 1.03, y: -6 }}
    style={{
      borderRadius: '20px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      cursor: 'pointer'
    }}
  >
    {/* top gradient */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${cert.color}, transparent)`
      }}
    />

    {/* header */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}
    >
      <div style={{ display: 'flex', gap: '12px' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: `${cert.color}18`,
            border: `1px solid ${cert.color}35`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: cert.color,
            fontSize: '22px'
          }}
        >
          <cert.icon />
        </div>

        <div>
          <div
            style={{
              color: cert.color,
              fontSize: '0.75rem'
            }}
          >
            {cert.issuer}
          </div>

          <div
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.7rem'
            }}
          >
            {cert.date}
          </div>
        </div>
      </div>

      <FiExternalLink style={{ color: cert.color }} />
    </div>

    <h3
      style={{
        color: 'white',
        fontWeight: '700',
        fontSize: '1rem',
        marginBottom: '10px'
      }}
    >
      {cert.name}
    </h3>

    <p
      style={{
        color: 'rgba(255,255,255,0.45)',
        fontSize: '0.85rem',
        marginBottom: '14px'
      }}
    >
      {cert.description}
    </p>

    {/* skills */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {cert.skills.map(skill => (
        <span
          key={skill}
          style={{
            padding: '3px 9px',
            borderRadius: '20px',
            background: `${cert.color}12`,
            border: `1px solid ${cert.color}25`,
            color: cert.color,
            fontSize: '0.7rem'
          }}
        >
          {skill}
        </span>
      ))}
    </div>

    {cert.verified && (
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#4ADE80',
          fontSize: '0.7rem'
        }}
      >
        <FiShield /> Verified
      </div>
    )}
  </motion.a>
);

const Certificates = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="certificates" ref={ref} style={{ padding: '100px 0' }}>
      <div className="section-container">
        <SectionHeading
          label="Certifications"
          title="Achievements & Certificates"
          subtitle="Professional certifications from industry leaders"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
            gap: '20px'
          }}
        >
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;