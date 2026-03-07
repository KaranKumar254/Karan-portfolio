import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import {
  FiAward,
  FiExternalLink,
  FiShield,
  FiCode,
  FiCloud,
  FiDatabase,
  FiMonitor,
  FiZap,
  FiCpu,
  FiStar,
} from 'react-icons/fi';

import { SiGoogle, SiJavascript } from 'react-icons/si';

import SectionHeading from './SectionHeading';

const certifications = [
  {
    name: 'Introduction to Prompt Engineering with GitHub Copilot',
    issuer: 'Microsoft × Simplilearn',
    date: 'Oct 16, 2025',
    description:
      'Completed the online course on prompt engineering techniques using GitHub Copilot. Powered by Microsoft on the Simplilearn SkillUp platform. Certificate code: 9183056.',
    icon: FiMonitor,
    color: '#00A4EF',
    skills: ['Prompt Engineering', 'GitHub Copilot', 'AI Tools'],
    verified: true,
    link: '/certificates/microsoft.pdf',
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud × Simplilearn',
    date: 'Oct 16, 2025',
    description:
      'Successfully completed the Google Cloud online course on Introduction to Generative AI via the Simplilearn SkillUp platform. Certificate code: 9182771.',
    icon: SiGoogle,
    color: '#4285F4',
    skills: ['Generative AI', 'Google Cloud', 'Foundation Models'],
    verified: true,
    link: '/certificates/google-genai.pdf',
  },
  {
    name: 'Gemini Certified Student',
    issuer: 'Google for Education',
    date: 'Dec 10, 2025',
    description:
      'Awarded Gemini Certified Student — University level by Google for Education, demonstrating knowledge and competencies to use Google AI. Valid through Nov 10, 2028.',
    icon: SiGoogle,
    color: '#EA4335',
    skills: ['Gemini AI', 'Google AI', 'Multimodal AI'],
    verified: true,
    link: '/certificates/google-gemini.pdf',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'Sep 26, 2025',
    description:
      'Recognized by Oracle Corporation as Oracle Certified Foundations Associate for Oracle Cloud Infrastructure 2025. Credential ID: 102760803OCI25FNDCFA.',
    icon: FiCloud,
    color: '#F80000',
    skills: ['Cloud Computing', 'OCI', 'Infrastructure'],
    verified: true,
    link: '/certificates/oracle.pdf',
  },
  {
    name: 'GeeksForGeeks </> CUTM Training Program',
    issuer: 'GeeksForGeeks',
    date: '2025',
    description:
      'Certificate of Course Completion for the GeeksForGeeks CUTM Training Program at Paralakhemundi Campus. Issued by Mr. Sandeep Jain, Founder & CEO, GeeksforGeeks.',
    icon: FiCpu,
    color: '#2F8D46',
    skills: ['DSA', 'Algorithms', 'Problem Solving', 'Coding'],
    verified: true,
    link: '/certificates/gfg-dsa.pdf',
  },
  {
    name: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    date: 'Feb 03, 2026',
    description:
      'Certificate of Accomplishment for passing the HackerRank JavaScript (Intermediate) skill certification test. Credential ID: E126CCCE3DC0.',
    icon: SiJavascript,
    color: '#F7DF1E',
    skills: ['JavaScript', 'Intermediate', 'Problem Solving'],
    verified: true,
    link: '/certificates/hackerrank-js.pdf',
  },
  {
    name: 'Advanced Java Certification',
    issuer: 'iTronix Solutions (ISO 9001:2015)',
    date: 'Feb 09, 2026',
    description:
      'Certificate of Completion for Advanced Java Certification from iTronix Solutions — an ISO 9001:2015 certified company. Certificate ID: #00101578.',
    icon: FiCode,
    color: '#007396',
    skills: ['Advanced Java', 'JDBC', 'Servlets', 'Enterprise Java'],
    verified: true,
    link: '/certificates/advanced-java.jpg',
  },
  {
    name: 'Hackathon — TechFest 2026',
    issuer: 'Centurion University (CSE Dept.)',
    date: 'Jan 30–31, 2026',
    description:
      'Certificate of Participation for the Hackathon organized as part of KARUKRIT 2026 by the Department of Computer Science & Engineering, SoET, CUTM, Paralakhemundi, Odisha.',
    icon: FiZap,
    color: '#7C3AED',
    skills: ['Hackathon', 'Innovation', 'Teamwork'],
    verified: true,
    link: '/certificates/hackathon-centurion.pdf',
  },
  {
    name: 'Hackathon — XPERIA 360°',
    issuer: 'Centurion University',
    date: 'Feb 10–11, 2026',
    description:
      'Certificate of Participation in Hackathon "XPERIA 360°" — Learn. Think. Build. — held on February 10th & 11th, 2026 at Centurion University of Technology and Management.',
    icon: FiStar,
    color: '#A855F7',
    skills: ['Hackathon', 'Problem Solving', 'Teamwork', 'Innovation'],
    verified: true,
    link: '/certificates/hackathon-2.pdf',
  },
];

const CertCard = ({ cert, index, inView }) => (
  <motion.a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.03, y: -6 }}
    style={{
      borderRadius: '20px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      cursor: 'pointer',
      display: 'block',
    }}
  >
    {/* Top gradient bar */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
      background: `linear-gradient(90deg, ${cert.color}, transparent)`,
    }} />

    {/* Header */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: `${cert.color}18`, border: `1px solid ${cert.color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: cert.color, fontSize: '22px', flexShrink: 0,
        }}>
          <cert.icon />
        </div>
        <div>
          <div style={{ color: cert.color, fontSize: '0.75rem', fontWeight: '600' }}>
            {cert.issuer}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
            {cert.date}
          </div>
        </div>
      </div>
      <FiExternalLink style={{ color: cert.color, flexShrink: 0 }} />
    </div>

    <h3 style={{
      color: 'white', fontWeight: '700', fontSize: '0.95rem',
      marginBottom: '10px', lineHeight: '1.4',
    }}>
      {cert.name}
    </h3>

    <p style={{
      color: 'rgba(255,255,255,0.45)', fontSize: '0.83rem',
      marginBottom: '14px', lineHeight: '1.6',
    }}>
      {cert.description}
    </p>

    {/* Skills */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {cert.skills.map(skill => (
        <span key={skill} style={{
          padding: '3px 9px', borderRadius: '20px',
          background: `${cert.color}12`, border: `1px solid ${cert.color}25`,
          color: cert.color, fontSize: '0.7rem',
        }}>
          {skill}
        </span>
      ))}
    </div>

    {cert.verified && (
      <div style={{
        marginTop: '12px', display: 'flex', alignItems: 'center',
        gap: '6px', color: '#4ADE80', fontSize: '0.7rem',
      }}>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
