import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto px-4 max-w-7xl">
      {children}
    </div>
  );
};

export default SectionContainer;