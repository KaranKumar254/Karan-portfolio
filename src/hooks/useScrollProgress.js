import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;

      setScrollProgress(scroll);
      setScrollY(totalScroll);
      setIsScrolled(totalScroll > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress, scrollY, isScrolled };
};
