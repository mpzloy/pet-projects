"use client"

import React from 'react';

import ThemeToggle from "@/shared/components/ThemeToggle";
import HeaderNavigation from "@/shared/components/HeaderNavigation";
import HeaderButtons from "@/shared/components/HeaderButtons";
import Wrapper from "@/shared/components/Wrapper";


function Header() {
  return (
    <header className="py-2 dark:bg-slate-950 bg-white drop-shadow-md">
      <Wrapper wrapperClass="flex gap-2">
        <HeaderNavigation/>
        <HeaderButtons/>
        <ThemeToggle/>
      </Wrapper>
    </header>
  );
}

export default Header;