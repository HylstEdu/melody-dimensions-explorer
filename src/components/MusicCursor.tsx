
import { useEffect, useState } from "react";

const MusicCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY, id: Date.now() }];
        if (newTrail.length > 5) {
          return newTrail.slice(-5);
        }
        return newTrail;
      });
    };

    // Hide when mouse leaves the window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Show when mouse enters the window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Custom cursor */}
      <div 
        className="music-cursor fixed pointer-events-none z-50 w-8 h-8 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md"
        >
          <path 
            d="M9 18V5L21 3V16" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-40 rounded-full bg-music-300 dark:bg-music-500 opacity-50"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${8 - index}px`,
            height: `${8 - index}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s linear',
          }}
        />
      ))}
    </>
  );
};

export default MusicCursor;
