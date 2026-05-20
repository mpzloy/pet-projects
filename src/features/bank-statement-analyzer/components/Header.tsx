import React from 'react';
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu"
import ThemeToggle from "@/shared/components/ThemeToggle";

function Header() {
  return (
    <header className="py-2 dark:bg-slate-950 bg-white drop-shadow-md">
      <div className="wrapper flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-2 rounded-full`}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle/>
      </div>
    </header>
  );
}

export default Header;