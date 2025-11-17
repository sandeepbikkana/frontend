'use client';

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('packages');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const packagesSection = document.getElementById('service-packages');
      const solutionsSection = document.getElementById('smart-solutions');
      
      if (packagesSection && solutionsSection) {
        const packagesRect = packagesSection.getBoundingClientRect();
        const solutionsRect = solutionsSection.getBoundingClientRect();
        
        if (solutionsRect.top <= 100) {
          setActiveSection('solutions');
        } else {
          setActiveSection('packages');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default Navigation; 