'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"

//we are accepting a class of type string
function navbar({ className }: { className?: string }) {
    //hook it takes state which is string and setactive as NULL
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active}item="Home">

            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active}item="Content Drawer">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/workshops">Workshops/Events</HoveredLink>
                <HoveredLink href="/reports">Reports</HoveredLink>
                <HoveredLink href="/notes">Notes</HoveredLink>
                </div>
            </MenuItem>
            <Link href={"/team_members"}>
              <MenuItem setActive={setActive} active={active}item="Team Members">
              
              </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default navbar