"use client"

import React from 'react';

import ThemeToggle from "@/shared/components/ThemeToggle";
import HeaderNavigation from "@/shared/components/HeaderNavigation";
import Wrapper from "@/shared/components/Wrapper";


function Header() {
  return (
    <header className="py-2 dark:bg-slate-950 bg-white drop-shadow-md">
      <Wrapper wrapperClass="flex">
        <HeaderNavigation/>
        <ThemeToggle/>
      </Wrapper>
    </header>
  );
}

export default Header;