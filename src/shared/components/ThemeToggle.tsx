'use client'

import React, {useEffect, useState} from 'react';
import {Button} from "@/shared/ui/button"

export default function ThemeToggle() {

  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme');

    if (saved) {
      setIsDark(saved === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    const rootEl = document.documentElement

    if (isDark) {
      rootEl.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      rootEl.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

  }, [isDark]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    const handler = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");

      if (!saved) {
        setIsDark(e.matches)
      }
    }

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);

  }, [])


  return (
    <Button onClick={() => setIsDark(prev => !prev)}
            className="hover:bg-muted bg-transparent cursor-pointer dark:bg-white/20 p-2 rounded-full flex justify-center items-center ml-auto dark:text-white text-black">
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
}