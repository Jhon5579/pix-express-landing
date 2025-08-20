import { useEffect } from 'react';

interface PreloadResource {
  href: string;
  as: 'script' | 'style' | 'font' | 'image';
  type?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
}

interface ResourcePreloaderProps {
  resources: PreloadResource[];
}

export const ResourcePreloader: React.FC<ResourcePreloaderProps> = ({ resources }) => {
  useEffect(() => {
    // Preload critical resources
    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) {
        link.type = resource.type;
      }
      
      if (resource.crossorigin) {
        link.crossOrigin = resource.crossorigin;
      }
      
      document.head.appendChild(link);
    });

    // Preconnect to external domains for faster resource loading
    const preconnectDomains = [
      'https://www.youtube.com',
      'https://i.ytimg.com'
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for other external domains
    const dnsPrefetchDomains = [
      'https://youtube.com',
      'https://www.googletagmanager.com'
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

  }, [resources]);

  return null;
};

// Critical resources to preload
export const criticalResources: PreloadResource[] = [
  // Add critical CSS or fonts here if needed
  // { href: '/fonts/critical-font.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
];