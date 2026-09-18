import React from 'react';
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {href: "https://github.com/mpzloy", label: "GitHub"},
    {href: "https://www.linkedin.com/in/vadym-khutornyi-a51799143/", label: "LinkedIn"}
  ];

  return (
    <footer className="py-4 dark:bg-slate-800 bg-slate-50">
      <div className="wrapper flex items-center">
        <nav>
          <ul className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-sm" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrapper text-center">&copy; {currentYear}</div>
    </footer>
  );
}

export default Footer;