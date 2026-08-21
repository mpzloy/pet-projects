"use client"

import React, { useEffect, useState } from 'react';
import { Button } from "@/shared/ui/button";

type Theme = 'light' | 'dark';
const THEME_STORAGE_KEY = 'theme';

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initialTheme = saved ?? getSystemTheme();

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <Button
      onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:bg-muted bg-transparent cursor-pointer dark:bg-white/20 p-2 rounded-full flex justify-center items-center ml-auto dark:text-white text-black"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </Button>
  );
}