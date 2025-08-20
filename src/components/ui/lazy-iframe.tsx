import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface LazyIframeProps {
  src: string;
  title: string;
  className?: string;
  allow?: string;
  allowFullScreen?: boolean;
}

export const LazyIframe: React.FC<LazyIframeProps> = ({
  src,
  title,
  className = '',
  allow,
  allowFullScreen = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setUserClicked(true);
  };

  const shouldLoadIframe = isInView && userClicked;

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
    >
      {!shouldLoadIframe && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-900 cursor-pointer rounded-xl overflow-hidden"
          onClick={handlePlay}
        >
          <div className="flex flex-col items-center text-white">
            <Play className="w-16 h-16 mb-4" fill="white" />
            <p className="text-lg font-semibold">Clique para assistir</p>
            <p className="text-sm opacity-80">Vídeo carregará instantaneamente</p>
          </div>
        </div>
      )}
      {shouldLoadIframe && (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow={allow}
          allowFullScreen={allowFullScreen}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};