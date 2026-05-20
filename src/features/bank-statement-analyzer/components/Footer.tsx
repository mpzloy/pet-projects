import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 dark:bg-slate-800 bg-slate-50">
      <div className="wrapper flex"></div>
      <div className="wrapper text-center">&copy; {currentYear}</div>
    </footer>
  );
}

export default Footer;