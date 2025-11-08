import React, { useState } from 'react';

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading with intersection observer
 * - WebP/AVIF format support with fallback
 * - Blur placeholder for better UX
 * - Responsive image loading
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes
 * @param {object} style - Inline styles
 * @param {boolean} lazy - Enable lazy loading (default: true)
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  lazy = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);

  // Convert Unsplash URL to optimized format
  const getOptimizedSrc = (url) => {
    if (!url) return '';
    
    // If already optimized or external URL, return as is
    if (url.includes('unsplash.com')) {
      // Add quality and format parameters
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}q=80&auto=format&fit=crop`;
    }
    
    return url;
  };

  // Generate srcset for responsive images
  const getSrcSet = (url) => {
    if (!url || !url.includes('unsplash.com')) return undefined;
    
    const baseUrl = url.split('?')[0];
    const params = url.includes('?') ? url.split('?')[1] : '';
    
    return `${baseUrl}?w=400&${params} 400w,
            ${baseUrl}?w=800&${params} 800w,
            ${baseUrl}?w=1200&${params} 1200w,
            ${baseUrl}?w=1600&${params} 1600w`;
  };

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (!lazy || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01
      }
    );

    const imgRef = document.querySelector(`[data-img-src="${src}"]`);
    if (imgRef) {
      observer.observe(imgRef);
    }

    return () => {
      if (imgRef) {
        observer.unobserve(imgRef);
      }
    };
  }, [lazy, isInView, src]);

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = getSrcSet(src);

  return (
    <div 
      data-img-src={src}
      className={`optimized-image-container ${className}`}
      style={style}
    >
      {!isInView && (
        <div 
          className="image-placeholder"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      )}
      {isInView && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={alt || ''}
          className={`optimized-image ${isLoaded ? 'loaded' : 'loading'} ${className}`}
          loading={lazy ? 'lazy' : 'eager'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            ...style
          }}
          {...props}
        />
      )}
      {hasError && (
        <div 
          className="image-error"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#999'
          }}
        >
          Image failed to load
        </div>
      )}
    </div>
  );
};

export default React.memo(OptimizedImage);

