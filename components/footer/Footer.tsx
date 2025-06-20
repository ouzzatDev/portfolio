import { icon2, logo } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { navItems } from "@/utils/data";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Footer = () => {
  const path = usePathname();

  return (
    <footer className="w-full relative flex flex-col items-center justify-center gap-8 py-20 mt-40 border-t border-lightest-slate/5">
      <Image
        src={icon2}
        alt="icon2"
        className="absolute top-0 left-8 duration-300 ease-linear"
      />

      <Link href="/" className="text-white">
        <Image
          src={logo}
          alt="logo"
          width={180}
          height={160}
          className="object-cover"
        />
      </Link>

      <ul className="flex items-center md:gap-9 gap-6 uppercase font-normal text-sm">
      {navItems.map(({ title, href }, i) => (
        <li key={i}>
          <Link
            href={href}
            className={`${
              href === path ? "text-lightest-slate" : "text-lightest-slate/60"
            }  relative`}
          >
            {href === path && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[1px] w-full bg-lightest-slate/60 mt-1"
              />
            )}
            {title}
          </Link>
        </li>
      ))}
        
      </ul>

      <ul className="flex items-center justify-center gap-4">
        <li className="w-[3rem] h-[3rem] z-10">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ouzzat/"
            className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
          >
            <FaLinkedinIn className="text-xl" />
          </Link>
        </li>
        <li className="w-[3rem] h-[3rem] z-10">
          <Link
            target="_blank"
            href="https://github.com/younesouzzat"
            className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
          >
            <FaGithub className="text-xl" />
          </Link>
        </li>
      </ul>

      <p
        className={`${RobotoMono.className} text-lightest-slate/60 text-center  leading-6 text-sm mt-2`}
      >
        &copy; All rights reserved by{" "}
        <Link href="/" className="text-green">
          ouzzatdev
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
