import React from 'react';
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 dark:bg-slate-800 bg-slate-50">
      <div className="wrapper flex">
        <Link href="https://github.com/mpzloy">GitHub</Link>
        <Link href="https://www.linkedin.com/in/vadym-khutornyi-a51799143/">LinkedIn</Link>
      </div>
      <div className="wrapper text-center">&copy; {currentYear}</div>
    </footer>
  );
}

export default Footer;