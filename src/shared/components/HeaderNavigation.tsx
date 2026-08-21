import React from 'react';

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import {headerNavigation} from "@/shared/config/navigation";

function HeaderNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        {headerNavigation.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} className="text-sm hover:border-b-2">{item.label}</Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default HeaderNavigation;