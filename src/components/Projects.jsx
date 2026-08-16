import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiAngular,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiSpringboot,
} from 'react-icons/si';

import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiDatabase,
  FiServer,
  FiBookOpen,
  FiCpu,
  FiMessageCircle,
  FiTarget,
  FiBarChart2,
  FiRefreshCw,
  FiZap,
  FiHelpCircle,
} from 'react-icons/fi';

import SectionHeading from './SectionHeading';

// ======================================================
// PROJECT DATA
// ======================================================

const projects = [
  {
    id: 1,
    title: 'University Portal (LMS)',
    category: 'Full Stack',

    description:
      'A comprehensive Learning Management System built with MEAN stack. Features role-based access control for Admin, Teacher & Student dashboards. Includes course management, assignment submission, and grade tracking.',

    tech: [
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],

    github: 'https://github.com/KaranKumar254/AcadZone',
    live: 'https://acadzone.onrender.com/',

    icon: FiBookOpen,
    iconColor: '#6C63FF',

    featured: true,

    animation: 'portal',

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

    github: 'https://github.com/KaranKumar254/ai-chatbot-',
    live: 'https://ai-chatbot-ku2m.onrender.com',

    icon: FiMessageCircle,
    iconColor: '#00D9FF',

    featured: true,

    animation: 'chatbot',

    tags: ['MERN Stack', 'AI/ML', 'Real-time'],
  },

  {
    id: 3,
    title: 'Skill Gap Analyzer',
    category: 'AI / Full Stack',

    description:
      'An AI-based Skill Gap Analyzer that helps users identify missing skills required for specific job roles. The system analyzes user skills and compares them with industry requirements to suggest learning resources and improvement areas.',

    tech: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],

    github: 'https://github.com/KaranKumar254/Skill-Gap-Analyzer',
    live: 'https://skill-gap-analyzer-frontend-ecui.onrender.com/',

    icon: FiTarget,
    iconColor: '#10B981',

    featured: true,

    animation: 'skill',

    tags: ['Skill Analysis', 'AI/ML', 'Career Guidance'],
  },

  {
  id: 4,
  title: 'EcoRevive Transformation AI',
  category: 'AI / Full Stack',

  description:
    'An AI-powered waste transformation platform that helps users discover profitable ways to convert waste materials into useful products. It provides AI-generated transformation ideas, step-by-step processes, investment requirements, earning potential, and related YouTube videos.',

  tech: [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FiCode, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  ],

  github:
    'https://github.com/KaranKumar254/EcoRevive-Transformation-AI',

  live: 'https://ecorevive-ai.onrender.com/',

  icon: FiRefreshCw,
  iconColor: '#22C55E',

  featured: true,

  animation: 'eco',

  tags: [
    'AI',
    'Waste Management',
    'Sustainability',
    'Generative AI',
  ],
},
{
  id: 5,

  title: 'QuizMind AI',

  category: 'AI / Full Stack',

  description:
    'An AI-powered quiz generation platform that creates interactive quizzes using OpenRouter AI. The application securely processes quiz requests through an Express backend and provides an engaging interface for generating and practicing quizzes.',

  tech: [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FiCode, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  ],

  github:
    'https://github.com/KaranKumar254/QuizMind-AI',

  live:
    'https://quizmind-ai.onrender.com',

  icon: FiHelpCircle,

  iconColor: '#A855F7',

  featured: true,

  animation: 'quiz',

  tags: [
    'AI Quiz',
    'OpenRouter',
    'Quiz Generator',
    'Express API',
  ],
},
];


// ======================================================
// PROJECT VISUALS
// ======================================================

const ProjectVisual = ({ project, hovered }) => {

  // ====================================================
  // UNIVERSITY PORTAL
  // ====================================================

  if (project.animation === 'portal') {
    return (
      <div
        style={{
          position: 'relative',
          width: '190px',
          height: '130px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        {/* Back layer */}

        <motion.div
          animate={
            hovered
              ? {
                  rotate: -8,
                  x: -12,
                  y: 8,
                }
              : {
                  rotate: -4,
                  x: -5,
                  y: 3,
                }
          }
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            width: '120px',
            height: '75px',
            borderRadius: '12px',
            background: 'rgba(108,99,255,0.08)',
            border: '1px solid rgba(108,99,255,0.2)',
          }}
        />

        {/* Main dashboard */}

        <motion.div
          animate={
            hovered
              ? {
                  y: -8,
                  rotate: 2,
                  scale: 1.05,
                }
              : {
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }
          }
          transition={{ duration: 0.5 }}
          style={{
            position: 'relative',
            width: '135px',
            height: '85px',
            borderRadius: '14px',
            background: 'rgba(108,99,255,0.15)',
            border: '1px solid rgba(108,99,255,0.4)',
            backdropFilter: 'blur(12px)',
            padding: '12px',
            boxShadow: '0 15px 40px rgba(108,99,255,0.2)',
            zIndex: 2,
          }}
        >

          {/* Header */}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '6px',
                background: 'rgba(108,99,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A89FFF',
                fontSize: '11px',
              }}
            >
              <FiBookOpen />
            </div>

            <div
              style={{
                width: '45px',
                height: '5px',
                borderRadius: '5px',
                background: 'rgba(255,255,255,0.3)',
              }}
            />
          </div>

          {/* Dashboard cards */}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '6px',
            }}
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                animate={
                  hovered
                    ? {
                        opacity: [0.3, 1, 0.3],
                      }
                    : {
                        opacity: 0.5,
                      }
                }
                transition={{
                  duration: 1.4,
                  delay: item * 0.15,
                  repeat: hovered ? Infinity : 0,
                }}
                style={{
                  height: '25px',
                  borderRadius: '6px',
                  background: 'rgba(108,99,255,0.25)',
                  border: '1px solid rgba(108,99,255,0.2)',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Database floating card */}

        <motion.div
          animate={{
            y: hovered ? [0, -6, 0] : [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            right: '5px',
            bottom: '8px',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(0,217,255,0.12)',
            border: '1px solid rgba(0,217,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00D9FF',
            zIndex: 4,
          }}
        >
          <FiDatabase />
        </motion.div>
      </div>
    );
  }
  if (project.animation === 'quiz') {
  return (
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '135px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >

      {/* Glow */}

      <motion.div
        animate={{
          scale: hovered
            ? [1, 1.25, 1]
            : [1, 1.08, 1],

          opacity: hovered
            ? [0.2, 0.5, 0.2]
            : [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(168,85,247,0.2)',
          filter: 'blur(14px)',
        }}
      />

      {/* Quiz Card */}

      <motion.div
        animate={
          hovered
            ? {
                y: -7,
                rotate: 2,
                scale: 1.06,
              }
            : {
                y: 0,
                rotate: 0,
                scale: 1,
              }
        }
        transition={{
          duration: 0.45,
        }}
        style={{
          position: 'relative',
          width: '140px',
          height: '90px',
          borderRadius: '15px',
          background: 'rgba(168,85,247,0.12)',
          border: '1px solid rgba(168,85,247,0.4)',
          backdropFilter: 'blur(10px)',
          padding: '14px',
          boxShadow:
            '0 15px 40px rgba(168,85,247,0.18)',
          zIndex: 3,
        }}
      >

        {/* Question */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            marginBottom: '12px',
          }}
        >

          <div
            style={{
              width: '25px',
              height: '25px',
              borderRadius: '7px',
              background: 'rgba(168,85,247,0.2)',
              color: '#A855F7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
            }}
          >
            <FiHelpCircle />
          </div>

          <div
            style={{
              width: '60px',
              height: '5px',
              borderRadius: '5px',
              background:
                'rgba(255,255,255,0.25)',
            }}
          />

        </div>

        {/* Answer Options */}

        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            animate={
              hovered
                ? {
                    opacity: [0.3, 1, 0.3],
                  }
                : {
                    opacity: 0.5,
                  }
            }
            transition={{
              duration: 1.3,
              delay: item * 0.15,
              repeat: hovered ? Infinity : 0,
            }}
            style={{
              height: '7px',
              width: `${45 + item * 12}%`,
              borderRadius: '5px',
              background:
                item === 2
                  ? '#A855F7'
                  : 'rgba(255,255,255,0.12)',
              marginBottom: '6px',
            }}
          />
        ))}

      </motion.div>

      {/* Floating Question Mark */}

      <motion.div
        animate={{
          y: hovered
            ? [-8, 8, -8]
            : [-3, 3, -3],

          rotate: hovered
            ? [-8, 8, -8]
            : 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          left: '10px',
          top: '18px',
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          background:
            'rgba(168,85,247,0.15)',
          border:
            '1px solid rgba(168,85,247,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#A855F7',
          fontSize: '18px',
          zIndex: 4,
        }}
      >
        ?
      </motion.div>

      {/* Check Mark */}

      <motion.div
        animate={{
          y: hovered
            ? [5, -5, 5]
            : [2, -2, 2],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          right: '8px',
          bottom: '12px',
          width: '38px',
          height: '38px',
          borderRadius: '11px',
          background:
            'rgba(34,197,94,0.14)',
          border:
            '1px solid rgba(34,197,94,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#22C55E',
          fontSize: '18px',
          zIndex: 4,
        }}
      >
        ✓
      </motion.div>

    </div>
  );
}


  // ====================================================
  // AI CHATBOT
  // ====================================================

  if (project.animation === 'chatbot') {
    return (
      <div
        style={{
          position: 'relative',
          width: '190px',
          height: '130px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        {/* Pulse rings */}

        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            animate={{
              scale: [1, 1.6, 2],
              opacity: [0.35, 0.15, 0],
            }}
            transition={{
              duration: 2.2,
              delay: item * 0.6,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              width: '65px',
              height: '65px',
              borderRadius: '50%',
              border: '1px solid rgba(0,217,255,0.35)',
            }}
          />
        ))}

        {/* AI core */}

        <motion.div
          animate={
            hovered
              ? {
                  scale: [1, 1.12, 1],
                  rotate: [0, -5, 5, 0],
                }
              : {
                  scale: [1, 1.04, 1],
                }
          }
          transition={{
            duration: hovered ? 0.8 : 2,
            repeat: Infinity,
          }}
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '22px',
            background:
              'linear-gradient(135deg, rgba(0,217,255,0.2), rgba(108,99,255,0.2))',
            border: '1px solid rgba(0,217,255,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00D9FF',
            fontSize: '30px',
            boxShadow: '0 0 40px rgba(0,217,255,0.25)',
            zIndex: 3,
          }}
        >
          <FiCpu />
        </motion.div>

        {/* Message bubble */}

        <motion.div
          animate={{
            x: hovered ? 8 : 0,
            y: hovered ? -5 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            right: '5px',
            top: '12px',
            width: '58px',
            height: '38px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          {[1, 2, 3].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                y: [0, -4, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                delay: dot * 0.15,
                repeat: Infinity,
              }}
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: '#00D9FF',
              }}
            />
          ))}
        </motion.div>

        {/* Lightning */}

        <motion.div
          animate={{
            opacity: hovered
              ? [0.3, 1, 0.3]
              : 0.6,
            scale: hovered
              ? [1, 1.2, 1]
              : 1,
          }}
          transition={{
            duration: 1,
            repeat: hovered ? Infinity : 0,
          }}
          style={{
            position: 'absolute',
            left: '20px',
            top: '15px',
            color: '#A89FFF',
            fontSize: '20px',
          }}
        >
          <FiZap />
        </motion.div>
      </div>
    );
  }


  // ====================================================
  // SKILL GAP ANALYZER
  // ====================================================

  if (project.animation === 'skill') {
    return (
      <div
        style={{
          position: 'relative',
          width: '190px',
          height: '130px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        {/* Main analyzer panel */}

        <motion.div
          animate={
            hovered
              ? {
                  scale: 1.05,
                  y: -5,
                }
              : {
                  scale: 1,
                  y: 0,
                }
          }
          transition={{ duration: 0.4 }}
          style={{
            width: '145px',
            height: '95px',
            borderRadius: '14px',
            background: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.35)',
            padding: '13px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 15px 40px rgba(16,185,129,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          {/* Header */}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '6px',
                background: 'rgba(16,185,129,0.2)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FiTarget />
            </div>

            <div
              style={{
                width: '55px',
                height: '5px',
                borderRadius: '5px',
                background: 'rgba(255,255,255,0.2)',
              }}
            />
          </div>

          {/* Skill bars */}

          {[75, 50, 90].map((width, index) => (
            <div
              key={index}
              style={{
                height: '8px',
                borderRadius: '5px',
                background: 'rgba(255,255,255,0.05)',
                marginBottom: '8px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: hovered ? `${width}%` : `${width - 20}%`,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                style={{
                  height: '100%',
                  borderRadius: '5px',
                  background:
                    'linear-gradient(90deg, #10B981, #34D399)',
                }}
              />
            </div>
          ))}

          {/* Scan line */}

          <motion.div
            animate={{
              y: hovered ? [0, 70, 0] : 0,
              opacity: hovered ? [0, 1, 0] : 0,
            }}
            transition={{
              duration: 1.8,
              repeat: hovered ? Infinity : 0,
            }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '10px',
              height: '2px',
              background: '#10B981',
              boxShadow: '0 0 10px #10B981',
            }}
          />
        </motion.div>

        {/* Target icon */}

        <motion.div
          animate={{
            rotate: hovered ? 360 : 0,
          }}
          transition={{
            duration: 1.2,
          }}
          style={{
            position: 'absolute',
            right: '5px',
            bottom: '8px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(16,185,129,0.15)',
            border: '1px solid rgba(16,185,129,0.35)',
            color: '#10B981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FiBarChart2 />
        </motion.div>
      </div>
    );
  }


  // ====================================================
  // ECO REVIVE
  // ====================================================

  if (project.animation === 'eco') {
    const particles = [
      { symbol: '♻', left: '8px', top: '20px' },
      { symbol: '🌱', right: '8px', top: '12px' },
      { symbol: '💡', left: '18px', bottom: '8px' },
      { symbol: '💰', right: '18px', bottom: '5px' },
    ];

    return (
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '135px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        {/* Green glow */}

        <motion.div
          animate={{
            scale: hovered
              ? [1, 1.25, 1]
              : [1, 1.08, 1],
            opacity: hovered
              ? [0.2, 0.5, 0.2]
              : [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(34,197,94,0.2)',
            filter: 'blur(14px)',
          }}
        />

        {/* Main recycle icon */}

        <motion.div
          animate={{
            rotate: hovered
              ? 360
              : [0, 10, 0, -10, 0],
            scale: hovered
              ? [1, 1.12, 1]
              : 1,
          }}
          transition={
            hovered
              ? {
                  rotate: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }
              : {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
          style={{
            width: '78px',
            height: '78px',
            borderRadius: '24px',
            background: 'rgba(34,197,94,0.14)',
            border: '1px solid rgba(34,197,94,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22C55E',
            fontSize: '38px',
            boxShadow: '0 0 45px rgba(34,197,94,0.3)',
            zIndex: 3,
          }}
        >
          <FiRefreshCw />
        </motion.div>

        {/* Floating particles */}

        {particles.map((particle, index) => (
          <motion.div
            key={index}
            animate={{
              y: hovered
                ? [-7, 8, -7]
                : [-3, 3, -3],
              rotate: hovered
                ? [-8, 8, -8]
                : 0,
              scale: hovered
                ? [1, 1.15, 1]
                : 1,
            }}
            transition={{
              duration: 2 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: particle.left,
              right: particle.right,
              top: particle.top,
              bottom: particle.bottom,
              fontSize: '19px',
              zIndex: 4,
              filter: 'drop-shadow(0 0 8px rgba(34,197,94,0.3))',
            }}
          >
            {particle.symbol}
          </motion.div>
        ))}

        {/* Transformation line */}

        <motion.div
          animate={{
            opacity: hovered
              ? [0.2, 1, 0.2]
              : 0.4,
            width: hovered
              ? ['30%', '80%', '30%']
              : '40%',
          }}
          transition={{
            duration: 1.8,
            repeat: hovered ? Infinity : 0,
          }}
          style={{
            position: 'absolute',
            bottom: '10px',
            height: '2px',
            background:
              'linear-gradient(90deg, transparent, #22C55E, transparent)',
            borderRadius: '5px',
          }}
        />
      </div>
    );
  }


  return null;
};


// ======================================================
// PROJECT CARD
// ======================================================

const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.96,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.025)',
        border: hovered
          ? `1px solid ${project.iconColor}55`
          : '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        transition:
          'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: hovered
          ? 'translateY(-10px)'
          : 'translateY(0)',
        boxShadow: hovered
          ? `0 25px 70px ${project.iconColor}20, 0 0 0 1px ${project.iconColor}15`
          : '0 8px 32px rgba(0,0,0,0.3)',
        position: 'relative',
        backdropFilter: 'blur(12px)',
      }}
    >

      {/* ==================================================
          FEATURED BADGE
      ================================================== */}

      {project.featured && (
        <motion.div
          animate={{
            scale: hovered ? 1.05 : 1,
          }}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '4px 10px',
            borderRadius: '20px',
            background: `${project.iconColor}20`,
            border: `1px solid ${project.iconColor}40`,
            color: project.iconColor,
            fontSize: '0.7rem',
            fontWeight: '600',
            zIndex: 10,
          }}
        >
          Featured
        </motion.div>
      )}


      {/* ==================================================
          TOP VISUAL
      ================================================== */}

      <div
        style={{
          height: '190px',
          background:
            `linear-gradient(135deg, ${project.iconColor}15 0%, rgba(0,217,255,0.05) 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom:
            '1px solid rgba(255,255,255,0.04)',
        }}
      >

        {/* Grid background */}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              `linear-gradient(${project.iconColor}08 1px, transparent 1px),
               linear-gradient(90deg, ${project.iconColor}08 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Radial glow */}

        <motion.div
          animate={{
            scale: hovered ? 1.4 : 1,
            opacity: hovered ? 0.5 : 0.25,
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background:
              `radial-gradient(circle, ${project.iconColor}20, transparent 70%)`,
            filter: 'blur(10px)',
          }}
        />

        <ProjectVisual
          project={project}
          hovered={hovered}
        />
      </div>


      {/* ==================================================
          CARD BODY
      ================================================== */}

      <div style={{ padding: '24px' }}>

        {/* Category */}

        <div
          style={{
            color: project.iconColor,
            fontSize: '0.75rem',
            fontFamily: 'JetBrains Mono',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          {project.category}
        </div>


        {/* Title */}

        <motion.h3
          animate={{
            x: hovered ? 3 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            color: 'white',
            fontFamily: 'Space Grotesk',
            fontWeight: '700',
            fontSize: '1.2rem',
            marginBottom: '12px',
            lineHeight: '1.3',
          }}
        >
          {project.title}
        </motion.h3>


        {/* Description */}

        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.875rem',
            lineHeight: '1.7',
            marginBottom: '20px',
          }}
        >
          {project.description}
        </p>


        {/* ==================================================
            TAGS
        ================================================== */}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '20px',
          }}
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              style={{
                padding: '3px 10px',
                borderRadius: '20px',
                background: `${project.iconColor}08`,
                border:
                  `1px solid ${project.iconColor}20`,
                color: 'rgba(255,255,255,0.55)',
                fontSize: '0.7rem',
                fontWeight: '500',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>


        {/* ==================================================
            TECH STACK
        ================================================== */}

        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}
        >
          {project.tech.map((tech, techIndex) => (
            <motion.div
              key={tech.name}
              title={tech.name}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                delay:
                  index * 0.15 +
                  techIndex * 0.08,
                duration: 0.3,
              }}
              whileHover={{
                scale: 1.18,
                y: -4,
                rotate: 3,
              }}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: `${tech.color}15`,
                border: `1px solid ${tech.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: tech.color,
                fontSize: '16px',
                cursor: 'default',
              }}
            >
              <tech.icon />
            </motion.div>
          ))}
        </div>


        {/* Divider */}

        <div
          style={{
            height: '1px',
            background:
              'rgba(255,255,255,0.05)',
            marginBottom: '20px',
          }}
        />


        {/* ==================================================
            BUTTONS
        ================================================== */}

        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >

          {/* Code */}

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              x: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              background:
                'rgba(255,255,255,0.04)',
              border:
                '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color:
                'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <FiGithub
              style={{
                fontSize: '15px',
              }}
            />
            Code
          </motion.a>


          {/* Live */}

          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              x: 2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '10px',
              background:
                `linear-gradient(135deg, ${project.iconColor}20, rgba(0,217,255,0.08))`,
              border:
                `1px solid ${project.iconColor}35`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: project.iconColor,
              fontSize: '0.85rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <FiExternalLink
              style={{
                fontSize: '15px',
              }}
            />
            Live
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
};


// ======================================================
// PROJECTS SECTION
// ======================================================

const Projects = () => {

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '100px 0',
        position: 'relative',
      }}
    >

      {/* Background */}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(108,99,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />


      <div
        className="section-container"
        style={{
          position: 'relative',
        }}
      >

        {/* Heading */}

        <SectionHeading
          label="Projects"
          title="What I've Built"
          subtitle="Real-world applications crafted with modern technologies"
        />


        {/* Projects Grid */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>


        {/* GitHub CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
          style={{
            textAlign: 'center',
            marginTop: '60px',
          }}
        >

          <p
            style={{
              color:
                'rgba(255,255,255,0.4)',
              marginBottom: '20px',
              fontSize: '0.9rem',
            }}
          >
            Want to see more? Check out my GitHub for all projects
          </p>

          <motion.a
            href="https://github.com/KaranKumar254"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
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
