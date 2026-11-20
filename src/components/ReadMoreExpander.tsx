'use client';

import React, { useState } from 'react';

interface ReadMoreExpanderProps {
  children: React.ReactNode;
  intro: React.ReactNode;
  buttonText?: string;
}

export default function ReadMoreExpander({ children, intro, buttonText }: ReadMoreExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandText = buttonText ? `Read Full ${buttonText} Golf Guide +` : 'Read Full Guide +';

  return (
    <div className="read-more-expander">
      {/* Intro is always visible */}
      <div className="intro-content">
        {intro}
      </div>

      {/* Expanded content */}
      <div 
        className="expanded-content" 
        style={{
          maxHeight: isExpanded ? '5000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.8s ease-in-out',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div style={{ paddingTop: '2rem' }}>
          {children}
        </div>
      </div>

      {/* Toggle Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #D4AF37',
            color: '#D4AF37',
            padding: '0.75rem 2rem',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#D4AF37';
            e.currentTarget.style.color = '#020617';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#D4AF37';
          }}
        >
          {isExpanded ? 'Show Less -' : expandText}
        </button>
      </div>
    </div>
  );
}
