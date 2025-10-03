import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/common";
import staticData from "@/constants/static.json";
import Menu from "./Menu";
import TopHeader from "./TopHeader";
const Logo = () => {
  const {
    header: { logo },
  } = staticData;

  return (
    <Link href="/">
      <Image src={logo} alt="brajpandit logo" width={135} height={53} />
    </Link>
  );
};

const Header = () => {
  const {
    header: { menuItems },
  } = staticData;

  return (

    <>
    <TopHeader/>
    
  
    <header className="cursor-pointer sticky top-0 w-full py-4 px-4 z-9999 backdrop-blur-md bg-white/80 shadow-base">

      <nav className="hidden items-center justify-between gap-6 text-sm font-medium md:flex">
        <Logo />

        <Menu
          menuItems={menuItems || []}
          wrapperClass="flex-1 justify-center"
        />

        <Link href="/pandits">
          <Button variant="primary" label="Book Your Pooja" size="medium" />
        </Link>
      </nav>

      <nav className="flex items-center justify-between gap-6 text-sm font-medium md:hidden">
        <Logo />

        <Menu
          isMobile={true}
          menuItems={menuItems || []}
          wrapperClass="absolute top-0 right-0 flex items-start flex-col gap-4 max-w-[300px] w-full h-screen bg-white p-6 rounded-md shadow-base overflow-auto"
        />
      </nav>
    </header>

    </>
  );
};

export default Header;
