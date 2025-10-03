"use client";

import React, { useState } from "react";
import { Button } from "@/components/common";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <Button
          variant="default"
          icon={<MenuIcon className="w-6 h-6" />}
          label=""
          size="large"
          className="border-none rounded-full !p-4"
          onClick={toggleMenu}
        />
      )}

      <ul
        className={`flex items-center gap-5 text-base font-normal ${wrapperClass} ${
          isMobile
            ? isOpen
              ? "flex flex-col absolute top-0 right-0 w-full h-screen bg-white p-6"
              : "hidden"
            : "md:flex"
        }`}
      >
        {/* Close button inside mobile menu */}
        {isMobile && isOpen && (
          <li className="absolute top-4 right-4 md:hidden">
            <Button
              variant="default"
              icon={<CloseIcon className="w-6 h-6" />}
              label=""
              size="large"
              className="border-none rounded-full !p-4"
              onClick={toggleMenu}
            />
          </li>
        )}

        {menuItems?.map((item, index) => (
          <li
            key={index}
            className="hover:text-primary transition-colors"
            onClick={() => {
              router.push(item.link);
              toggleMenu();
            }}
          >
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
