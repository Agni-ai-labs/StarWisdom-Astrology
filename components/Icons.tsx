import React from 'react';

export const IconStar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const IconMoon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const IconSun = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const IconRising = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
    <path d="M2 19h20" />
  </svg>
);

export const IconSparkles = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export const IconCards = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="16" height="20" x="2" y="2" rx="2" />
    <path d="M22 7v11a2 2 0 0 1-2 2H7" />
  </svg>
);

export const IconCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconAlert = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

export const IconCalendar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export const IconOm = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
    <path d="M9 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"/>
    <path d="M15 9c0-1.7-1.3-3-3-3"/>
    <path d="M15 9c1.7 0 3 1.3 3 3s-1.3 3-3 3"/>
    <path d="M17 7c.5-.5 1.5-.5 2 0"/>
  </svg>
);

// Zodiac Icons
export const IconAries = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v2m0 16v-8m-8-2c0 4.4 3.6 8 8 8s8-3.6 8-8-2-4-4-4-4 2-4 2-2 0-4-2-4-4-3.6-8-8-8z"/>
    <path d="M5 5c2 2 2 4 2 4s0 4 5 4 5-4 5-4 2-2 2-4"/>
  </svg>
);

export const IconTaurus = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="14" r="6" />
    <path d="M12 8V3" />
    <path d="M6 8C6 4 8 2 12 2s6 2 6 6" />
  </svg>
);

export const IconGemini = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3h12" />
    <path d="M6 21h12" />
    <path d="M8 3v18" />
    <path d="M16 3v18" />
  </svg>
);

export const IconCancer = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" />
    <path d="M18 12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z" />
    <path d="M6 12h12" />
  </svg>
);

export const IconLeo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="6" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="m4.93 4.93 2.83 2.83" />
    <path d="m16.24 16.24 2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="m4.93 19.07 2.83-2.83" />
    <path d="m16.24 7.76 2.83-2.83" />
  </svg>
);

export const IconVirgo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4v16" />
    <path d="M9 4v16" />
    <path d="M14 4v12a4 4 0 0 0 4 4h2" />
    <path d="M4 8h10" />
  </svg>
);

export const IconLibra = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 18h16" />
    <path d="M4 22h16" />
    <path d="M12 2a5 5 0 0 0-5 5v4" />
    <path d="M17 11V7a5 5 0 0 0-5-5" />
  </svg>
);

export const IconScorpio = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4v16" />
    <path d="M9 4v16" />
    <path d="M14 4v10" />
    <path d="M14 14h2a4 4 0 0 1 4 4v4" />
    <path d="M22 20l-2 2" />
  </svg>
);

export const IconSagittarius = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="2" x2="22" y1="22" y2="2" />
    <path d="M14 2h8v8" />
    <path d="m11 13 3-3" />
  </svg>
);

export const IconCapricorn = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12V6a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v12a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4" />
    <path d="M12 12h2" />
  </svg>
);

export const IconAquarius = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m2 10 3-3 3 3 3-3 3 3 3-3 3 3" />
    <path d="m2 16 3-3 3 3 3-3 3 3 3-3 3 3" />
  </svg>
);

export const IconPisces = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3c0 9 0 9 0 18" />
    <path d="M18 3c0 9 0 9 0 18" />
    <path d="M2 12h20" />
  </svg>
);

export const getZodiacIcon = (signName: string, className?: string) => {
  const props = { className };
  switch (signName) {
    case 'Aries': return <IconAries {...props} />;
    case 'Taurus': return <IconTaurus {...props} />;
    case 'Gemini': return <IconGemini {...props} />;
    case 'Cancer': return <IconCancer {...props} />;
    case 'Leo': return <IconLeo {...props} />;
    case 'Virgo': return <IconVirgo {...props} />;
    case 'Libra': return <IconLibra {...props} />;
    case 'Scorpio': return <IconScorpio {...props} />;
    case 'Sagittarius': return <IconSagittarius {...props} />;
    case 'Capricorn': return <IconCapricorn {...props} />;
    case 'Aquarius': return <IconAquarius {...props} />;
    case 'Pisces': return <IconPisces {...props} />;
    default: return <IconStar {...props} />;
  }
};