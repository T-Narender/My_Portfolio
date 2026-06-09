import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Narender. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
