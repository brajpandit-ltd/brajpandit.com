// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import staticData from "@/constants/static.json";
// import Menu from "./Menu";
// import { Button } from "@/components/common";

// const Logo = ({ logo }: { logo: string }) => (
//   <Link href="/" className="flex items-center">
//     <Image src={logo} alt="brajpandit logo" width={135} height={53} />
//   </Link>
// );

// const Header = () => {
//   const {
//     header: { logo, menuItems },
//   } = staticData;


//   const updatedMenuItems = [
//     ...(menuItems || []),
//     {
//       label: (
//         <button className="ml-6 px-3 py-1 border border-primary rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-white transition">
//          हि/En
//         </button>
//       ) as any,
//       link: "#", 
//     },
//   ];

//   return (
//     <header className="sticky top-0 w-full py-4 px-4 z-9999 backdrop-blur-md bg-white/80 shadow-base">
//       {/* Desktop Navigation */}
//       <nav className="hidden items-center justify-between gap-6 text-sm font-medium md:flex">
//         <Logo logo={logo} />

//         <Menu
//           menuItems={updatedMenuItems}
//           wrapperClass="flex-1 justify-center"
//         />
//         <Link href="/pandits">

//         <Button variant="primary" label="Book Your Panditji" size="medium" />
//         </Link>
//       </nav>

//       {/* Mobile Navigation */}
//       <nav className="flex items-center justify-between gap-6 text-sm font-medium md:hidden">
//         <Logo logo={logo} />

//         <Menu
//           isMobile={true}
//           menuItems={updatedMenuItems}
//           wrapperClass="absolute top-0 right-0 flex items-start flex-col gap-4 max-w-[300px] w-full h-screen bg-white p-6 rounded-md shadow-base overflow-auto"
//         />
//       </nav>
//     </header>
//   );
// };

// export default Header;




import Image from "next/image";
import React from "react";
import { Button } from "@/components/common";
import staticData from "@/constants/static.json";
import Menu from "./Menu";
import { header } from "@/constants/static.json";
import Link from "next/link";
const Logo = () => (
  <Image src={header.logo} alt="brajpandit logo" width={135} height={53} />
);

const Header = () => {
  const {
    header: { logo, menuItems },
  } = staticData;

  return (
    <header className="sticky top-0 w-full py-4 px-4 z-9999 backdrop-blur-md bg-white/80 shadow-base">
      <nav className="hidden items-center justify-between gap-6 text-sm font-medium md:flex">
        <Logo logo={logo} />

        <Menu
          menuItems={menuItems || []}
          wrapperClass="flex-1 justify-center"
        />

        <Link href="/pandits">

    <Button variant="primary" label="Book Your Panditji" size="medium" />
         </Link>
      </nav>

      <nav className="flex items-center justify-between gap-6 text-sm font-medium md:hidden">
        <Logo logo={logo} />

        <Menu
          isMobile={true}
          menuItems={menuItems || []}
          wrapperClass="absolute top-0 right-0 flex items-start flex-col gap-4 max-w-[300px] w-full h-screen bg-white p-6 rounded-md shadow-base overflow-auto"
        />
      </nav>
    </header>
  );
};

export default Header;
