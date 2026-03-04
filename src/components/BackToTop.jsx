import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import { useScrollProgress } from '../hooks/useScrollProgress';

const BackToTop = () => {
  const { scrollY } = useScrollProgress();
  const show = scrollY > 400;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="home" smooth duration={800}>
            <button className="back-to-top">
              <FiArrowUp style={{ color: 'white', fontSize: '20px' }} />
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
