import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiBookOpen, FiBriefcase, FiCalendar, FiMapPin, FiAward
} from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const educationData = [
  {
    type: 'education',
    title: 'B.Tech Computer Science Engineering',
    institution: 'Centurion University of Technology',
    location: 'Odisha, India',
    period: '2023 – 2027 (Expected)',
    description:
      'Specializing in Full Stack Web Development, Data Structures, Algorithms, and Database Management. Active participant in coding competitions and tech workshops.',
    tags: ['MERN Stack', 'Data Structures', 'Algorithms', 'DBMS'],
    icon: FiBookOpen,
    color: '#6C63FF',
    status: 'Ongoing',
  },
  {
    type: 'education',
    title: 'Class XII (Science)',
    institution: 'Bihar School Examination Board (BSEB)',
    location: 'Bihar, India',
    period: '2021 – 2023',
    description:
      'Completed Intermediate with Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills.',
    tags: ['PCM', 'Mathematics'],
    icon: FiBookOpen,
    color: '#00D9FF',
    status: 'Completed',
  },
  {
    type: 'education',
    title: 'Class X',
    institution: 'Bihar School Examination Board (BSEB)',
    location: 'Bihar, India',
    period: '2019 – 2021',
    description:
      'Completed matriculation with strong foundation in Mathematics and Sciences.',
    tags: ['Science', 'Mathematics'],
    icon: FiBookOpen,
    color: '#FF6584',
    status: 'Completed',
  },
];

const experienceData = [
  {
    type: 'experience',
    title: 'Full Stack Developer',
    institution: 'Self-Employed / Freelance',
    location: 'Remote',
    period: '2023 – Present',
    description:
      'Developing full-stack web applications using MERN & MEAN stacks. Built multiple projects including LMS, AI Chatbot and Weather applications. Working on expanding skills in cloud technologies and DevOps.',
    tags: ['MERN', 'MEAN', 'React', 'Node.js', 'MongoDB'],
    icon: FiBriefcase,
    color: '#F59E0B',
    status: 'Current',
  },
];

const TimelineItem = ({ item, index, inView, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    style={{
      display: 'flex',
      gap: '20px',
      marginBottom: '28px',
    }}
  >
    {/* Icon */}
    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        background: `${item.color}18`,
        border: `1px solid ${item.color}40`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: item.color,
        fontSize: '18px',
        boxShadow: `0 0 20px ${item.color}20`,
      }}>
        <item.icon />
      </div>
      {/* Connector line */}
      <div style={{
        width: '1px',
        flex: 1,
        background: `linear-gradient(180deg, ${item.color}40, transparent)`,
        marginTop: '8px',
        minHeight: '20px',
      }} />
    </div>

    {/* Content */}
    <motion.div
      whileHover={{ scale: 1.01, x: 4 }}
      style={{
        flex: 1,
        padding: '20px 24px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.3s ease',
        marginBottom: '4px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
        <div>
          <h3 style={{
            color: 'white',
            fontFamily: 'Space Grotesk',
            fontWeight: '700',
            fontSize: '1rem',
            marginBottom: '4px',
          }}>
            {item.title}
          </h3>
          <div style={{ color: item.color, fontSize: '0.85rem', fontWeight: '500' }}>
            {item.institution}
          </div>
        </div>
        <div style={{
          padding: '4px 10px',
          borderRadius: '20px',
          background: item.status === 'Ongoing' || item.status === 'Current'
            ? 'rgba(74,222,128,0.1)'
            : 'rgba(255,255,255,0.05)',
          border: item.status === 'Ongoing' || item.status === 'Current'
            ? '1px solid rgba(74,222,128,0.3)'
            : '1px solid rgba(255,255,255,0.08)',
          color: item.status === 'Ongoing' || item.status === 'Current'
            ? '#4ADE80'
            : 'rgba(255,255,255,0.4)',
          fontSize: '0.72rem',
          fontWeight: '600',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          {(item.status === 'Ongoing' || item.status === 'Current') && (
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#4ADE80',
              display: 'inline-block',
            }} />
          )}
          {item.status}
        </div>
      </div>

      {/* Meta info */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>
          <FiCalendar style={{ fontSize: '12px' }} /> {item.period}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>
          <FiMapPin style={{ fontSize: '12px' }} /> {item.location}
        </span>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '14px' }}>
        {item.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            padding: '3px 10px',
            borderRadius: '20px',
            background: `${item.color}12`,
            border: `1px solid ${item.color}25`,
            color: item.color,
            fontSize: '0.7rem',
            fontWeight: '500',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: '100px 0', position: 'relative' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        right: '-100px',
        bottom: '20%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,217,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <SectionHeading
          label="Journey"
          title="Education & Experience"
          subtitle="My academic background and professional development"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6C63FF', fontSize: '16px',
              }}>
                <FiBookOpen />
              </div>
              <h3 style={{ color: 'white', fontFamily: 'Space Grotesk', fontWeight: '700', fontSize: '1.1rem' }}>
                Education
              </h3>
            </motion.div>
            {educationData.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} inView={inView} isLeft />
            ))}
          </div>

          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#F59E0B', fontSize: '16px',
              }}>
                <FiBriefcase />
              </div>
              <h3 style={{ color: 'white', fontFamily: 'Space Grotesk', fontWeight: '700', fontSize: '1.1rem' }}>
                Experience
              </h3>
            </motion.div>
            {experienceData.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} inView={inView} isLeft={false} />
            ))}

            {/* Looking for Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{
                padding: '20px 24px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(0,217,255,0.08))',
                border: '1px solid rgba(108,99,255,0.2)',
                marginTop: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <FiAward style={{ color: '#6C63FF', fontSize: '18px' }} />
                <span style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem' }}>
                  Open to Opportunities
                </span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                I'm actively looking for internship and entry-level positions in Full Stack Development.
                Let's build something amazing together!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
