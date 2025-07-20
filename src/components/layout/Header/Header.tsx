import Image from "next/image";
import React from "react";
import { Button } from "@/components/common";
import staticData from "@/constants/static.json";
import Menu from "./Menu";

const Logo = ({ logo }: { logo: string }) => (
  <Image src={logo} alt="brajpandit logo" width={135} height={53} />
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














// import Image from "next/image";
// import React from "react";
// import { Button } from "@/components/common";
// import Menu from "./Menu";
// import { header } from "@/constants/static.json";

// const Logo = () => (
//   <Image src={header.logo} alt="brajpandit logo" width={135} height={53} />
// );

// const Header = () => {
//   return (
//     <header className="sticky top-0 w-full py-4 px-4 z-9999 backdrop-blur-md bg-white/80 shadow-base">
//       <nav className="hidden items-center justify-between gap-6 text-sm font-medium md:flex">
//         <Logo />

//         <Menu
//           menuItems={header.menuItems || []}
//           wrapperClass="flex-1 justify-center"
//         />

//         <Button variant="secondary" label="Book Your Panditji" size="small" />
//       </nav>

//       <nav className="flex items-center justify-between gap-6 text-sm font-medium md:hidden">
//         <Logo />

//         <Menu
//           isMobile={true}
//           menuItems={header.menuItems || []}
//           wrapperClass="absolute top-0 right-0 flex items-start flex-col gap-4 max-w-[300px] w-full h-screen bg-white p-6 rounded-md shadow-base overflow-auto"
//         />
//       </nav>
//     </header>
//   );
// };

// export default Header;










