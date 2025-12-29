
import React, { useState } from 'react';

interface LogoImageProps {
  src: string;
  alt: string;
  fallbackColor: string;
  className?: string;
  textClassName?: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src, alt, fallbackColor, className, textClassName }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center font-black select-none ${className}`}
        style={{ color: fallbackColor }}
      >
        <span className={textClassName || "text-lg uppercase tracking-tighter"}>{alt}</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
    />
  );
};

export default LogoImage;
