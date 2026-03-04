import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiAngular,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython,
  SiDjango, SiGit, SiGithub, SiPostman,
  SiFirebase, SiTailwindcss, SiSpringboot
} from 'react-icons/si';
import { FiCode, FiCoffee } from 'react-icons/fi';
import { FiServer } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { staggerContainer, fadeInUp } from '../animations/variants';

const skillCategories = [
  {
    label: 'Frontend',
    color: '#61DAFB',
    borderColor: 'rgba(97,218,251,0.2)',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 90 },
      { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 85 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 85 },
      { name: 'React', icon: SiReact, color: '#61DAFB', level: 82 },
      { name: 'Angular', icon: SiAngular, color: '#DD0031', level: 70 },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8', level: 80 },
    ],
  },
  {
    label: 'Backend',
    color: '#68A063',
    borderColor: 'rgba(104,160,99,0.2)',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063', level: 80 },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', level: 75 },
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 70 },
      { name: 'Java', icon: FiCoffee, color: '#ED8B00', level: 65 },
      { name: 'Django', icon: SiDjango, color: '#092E20', level: 55 },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', level: 50 },
    ],
  },
  {
    label: 'Databases',
    color: '#47A248',
    borderColor: 'rgba(71,162,72,0.2)',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 75 },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 65 },
    ],
  },
  {
    label: 'Tools & DevOps',
    color: '#F05032',
    borderColor: 'rgba(240,80,50,0.2)',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', level: 85 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 80 },
      { name: 'VS Code', icon: FiCode, color: '#007ACC', level: 90 },
    ],
  },
];

const SkillBar = ({ level, color, inView }) => (
  <div style={{
    height: '5px',
    background: 'rgba(255,255,255,0.06)',
    borderRadius: '3px',
    overflow: 'hidden',
    marginTop: '6px',
  }}>
    <motion.div
      initial={{ width: 0 }}
      animate={inView ? { width: `${level}%` } : { width: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      style={{
        height: '100%',
        background: `linear-gradient(90deg, #6C63FF, ${color})`,
        borderRadius: '3px',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        right: 0,
        top: '-3px',
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}80`,
      }} />
    </motion.div>
  </div>
);

const SkillCard = ({ skill, inView, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ scale: 1.04, y: -4 }}
    style={{
      padding: '14px 16px',
      borderRadius: '14px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      transition: 'all 0.3s ease',
      cursor: 'default',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <skill.icon style={{ color: skill.color, fontSize: '18px', flexShrink: 0 }} />
        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: '500' }}>
          {skill.name}
        </span>
      </div>
      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', fontFamily: 'JetBrains Mono' }}>
        {skill.level}%
      </span>
    </div>
    <SkillBar level={skill.level} color={skill.color} inView={inView} />
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: '100px 0', position: 'relative' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        left: '-200px',
        top: '30%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          subtitle="Technologies and tools I work with to build amazing products"
        />

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '36px',
            flexWrap: 'wrap',
          }}
        >
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                padding: '9px 18px',
                borderRadius: '50px',
                border: activeTab === i
                  ? `1px solid ${cat.color}80`
                  : '1px solid rgba(255,255,255,0.08)',
                background: activeTab === i
                  ? `${cat.color}18`
                  : 'rgba(255,255,255,0.02)',
                color: activeTab === i ? cat.color : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {cat.label}
              <span style={{
                background: activeTab === i ? `${cat.color}30` : 'rgba(255,255,255,0.06)',
                color: activeTab === i ? cat.color : 'rgba(255,255,255,0.3)',
                padding: '1px 7px',
                borderRadius: '10px',
                fontSize: '0.7rem',
                fontFamily: 'JetBrains Mono',
              }}>
                {skillCategories[i].skills.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
          }}
        >
          {skillCategories[activeTab].skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              inView={inView}
              delay={i * 0.07}
            />
          ))}
        </motion.div>

        {/* All skills icon cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ marginTop: '60px' }}
        >
          <div style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontFamily: 'JetBrains Mono',
            marginBottom: '24px',
          }}>
            All Technologies
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
          }}>
            {skillCategories.flatMap(cat => cat.skills).map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.025 }}
                whileHover={{ scale: 1.2, y: -5 }}
                title={skill.name}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: skill.color,
                  fontSize: '22px',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  filter: `drop-shadow(0 0 6px ${skill.color}40)`,
                }}
              >
                <skill.icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
