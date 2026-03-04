import { useEffect, useRef } from 'react';

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const followerPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if ('ontouchstart' in window) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onMouseEnterLink = () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    };

    const animateFollower = () => {
      followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.12;
      followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.12;
      follower.style.left = `${followerPosRef.current.x}px`;
      follower.style.top = `${followerPosRef.current.y}px`;
      rafRef.current = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', onMouseMove);

    const links = document.querySelectorAll('a, button, [role="button"], .glass-card, .project-card');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    rafRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
};

export default AnimatedCursor;
