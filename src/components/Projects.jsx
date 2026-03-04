import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiServer } from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiMongodb, SiAngular, SiExpress,
  SiMysql, SiPython, SiJavascript
} from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { staggerContainer, fadeInUp } from '../animations/variants';

const projects = [
  {
    id: 1,
    title: 'University Portal (LMS)',
    category: 'Full Stack',
    description:
      'A comprehensive Learning Management System built with MEAN stack. Features role-based access control for Admin, Teacher & Student dashboards. Includes course management, assignment submission, and grade tracking.',
    tech: [
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    github: 'https://github.com/KaranKumar254',
    live: '#',
    gradient: 'from-purple-500/20 to-blue-500/20',
    icon: FiServer,
    iconColor: '#6C63FF',
    featured: true,
    tags: ['MEAN Stack', 'Role-Based Auth', 'LMS'],
  },
  {
    id: 2,
    title: 'AI Chatbot',
    category: 'Full Stack',
    description:
      'Intelligent conversational AI chatbot built with MERN stack. Provides real-time automated responses with natural language processing. Features chat history, user authentication and smooth UI/UX.',
    tech: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    github: 'https://github.com/KaranKumar254',
    live: '#',
    gradient: 'from-cyan-500/20 to-green-500/20',
    icon: FiCode,
    iconColor: '#00D9FF',
    featured: true,
    tags: ['MERN Stack', 'AI/ML', 'Real-time'],
  },
  {
    id: 3,
    title: 'Weather App',
    category: 'Full Stack',
    description:
      'Real-time weather forecasting application using OpenWeather API. Built with MERN stack, displays current weather, 5-day forecasts, temperature trends and location-based weather data with beautiful UI.',
    tech: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'JS', icon: SiJavascript, color: '#F7DF1E' },
    ],
    github: 'https://github.com/KaranKumar254',
    live: '#',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    icon: FiDatabase,
    iconColor: '#F59E0B',
    featured: false,
    tags: ['MERN Stack', 'OpenWeather API', 'REST API'],
  },
];

const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 60px rgba(108,99,255,0.2), 0 0 0 1px rgba(108,99,255,0.2)'
          : '0 8px 32px rgba(0,0,0,0.3)',
        position: 'relative',
      }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          padding: '4px 10px',
          borderRadius: '20px',
          background: 'rgba(108,99,255,0.2)',
          border: '1px solid rgba(108,99,255,0.4)',
          color: '#A89FFF',
          fontSize: '0.7rem',
          fontWeight: '600',
          zIndex: 2,
        }}>
          Featured
        </div>
      )}

      {/* Card Top Visual */}
      <div
        style={{
          height: '180px',
          background: `linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,217,255,0.1) 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        {/* Grid pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(108,99,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

        <motion.div
          animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: `${project.iconColor}20`,
            border: `1px solid ${project.iconColor}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: project.iconColor,
            fontSize: '36px',
            position: 'relative',
            zIndex: 1,
            boxShadow: `0 0 30px ${project.iconColor}30`,
          }}
        >
          <project.icon />
        </motion.div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '24px' }}>
        {/* Category */}
        <div style={{
          color: '#6C63FF',
          fontSize: '0.75rem',
          fontFamily: 'JetBrains Mono',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>
          {project.category}
        </div>

        <h3 style={{
          color: 'white',
          fontFamily: 'Space Grotesk',
          fontWeight: '700',
          fontSize: '1.2rem',
          marginBottom: '12px',
          lineHeight: '1.3',
        }}>
          {project.title}
        </h3>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.875rem',
          lineHeight: '1.7',
          marginBottom: '20px',
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '3px 10px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.7rem',
              fontWeight: '500',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {project.tech.map((t) => (
            <div
              key={t.name}
              title={t.name}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: `${t.color}15`,
                border: `1px solid ${t.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: t.color,
                fontSize: '16px',
              }}
            >
              <t.icon />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '20px' }} />

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <FiGithub style={{ fontSize: '15px' }} />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6C63FF20, #00D9FF20)',
              border: '1px solid rgba(108,99,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: '#A89FFF',
              fontSize: '0.85rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <FiExternalLink style={{ fontSize: '15px' }} />
            Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: '100px 0', position: 'relative' }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(108,99,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative' }}>
        <SectionHeading
          label="Projects"
          title="What I've Built"
          subtitle="Real-world applications crafted with modern technologies"
        />

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '20px', fontSize: '0.9rem' }}>
            Want to see more? Check out my GitHub for all projects
          </p>
          <motion.a
            href="https://github.com/KaranKumar254"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
          >
            <FiGithub />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
