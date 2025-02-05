import { logo, smallLogo } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Link href="/" className="text-white">
      <Image
        src={logo}
        alt="logo"
        width={170}
        height={150}
        className="object-cover md:block hidden"
      />
      <Image
        src={smallLogo}
        alt="logo"
        width={40}
        height={50}
        className="object-cover md:hidden block"
      />
    </Link>
  );
};

export default NavLogo;
