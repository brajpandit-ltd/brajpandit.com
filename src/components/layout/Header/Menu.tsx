"use client";

import React, { useState } from "react";
import { Button } from "@/components/common";
import Link from "next/link";

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

const Menu = ({ wrapperClass, isMobile = false, menuItems }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <Button
          variant="default"
          icon={<span className="material-icons">Menu</span>}
          label=""
          size="large"
          className="border-none rounded-full !p-4"
          onClick={toggleMenu}
        />
      )}

      <ul
        className={`flex items-center gap-5 text-base font-normal ${wrapperClass} ${isMobile ? (isOpen ? "flex" : "hidden") : "md:flex"}`}
      >
        <li className="absolute top-4 right-4 md:hidden">
          <Button
            variant="default"
            label="X"
            size="large"
            className="border-none rounded-full !p-4"
            onClick={toggleMenu}
          />
        </li>

        {menuItems?.map((item, index) => (
          <li key={index} className="hover:text-primary transition-colors">
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
