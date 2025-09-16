"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import Button from "@/components/common/Button";

interface MenuItem {
  label: string;
  link: string;
  subMenu?: MenuItem[];
}

interface MenuProps {
  wrapperClass?: string;
  isMobile?: boolean;
  menuItems?: MenuItem[];
}

const Menu = ({ wrapperClass = "", isMobile = false, menuItems }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Menu Button (Top Right) */}
      {isMobile && (
        <Button
          variant="default"
          size="small"
          className="md:hidden border-none shadow-none bg-transparent hover:bg-transparent fixed top-4 right-4 z-50"
          onClick={toggleMenu}
          icon={isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className={`flex flex-col gap-5 p-6 text-base font-normal ${wrapperClass}`}>
          {menuItems?.map((item, index) => (
            <li
              key={index}
              className="hover:text-primary transition-colors"
            >
              <Link href={item.link} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
