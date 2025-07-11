import { icon2 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsHandIndexThumb } from "react-icons/bs";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "ouzzatdev | Contact Me",
};

const page = () => {
  return (
    <main className="my-10 grid lg:grid-cols-3 grid-cols-1 gap-12">
      <div className="lg:space-y-20 space-y-10">
        <AnimatedCard>
          <h5 className="text-gradient font-bold md:text-lg text-base uppercase">
            Contact info
          </h5>
          <ul className="space-y-4 mt-6">
            <li className="z-10 flex items-center gap-4">
              <div className="card md:w-[4rem] md:h-[4rem] w-16 h-16 flex justify-center items-center">
                <HiOutlineMail className="text-2xl text-lightest-slate" />
              </div>

              <div className="space-y-[3px] z-10">
                <p className="text-lightest-slate text-base">Email address</p>
                <p className="text-lightest-slate/60 text-sm">
                  ouzzatdev@gmail.com
                </p>
              </div>
            </li>
            <li className="z-10 flex items-center gap-4">
              <div className="card md:w-[4rem] md:h-[4rem] w-16 h-16 flex justify-center items-center">
                <HiOutlinePhone className="text-2xl text-lightest-slate" />
              </div>

              <div className="space-y-[3px] z-10">
                <p className="text-lightest-slate text-base">Phone number</p>
                <p className="text-lightest-slate/60 text-sm">+212 706067297</p>
              </div>
            </li>
          </ul>
        </AnimatedCard>

        <AnimatedCard>
          <h5 className="text-gradient font-bold md:text-lg text-base uppercase flex items-center gap-3">
            I&apos;m On{" "}
            <BsHandIndexThumb className="rotate-180 text-lightest-slate/40" />
          </h5>
          <ul className="flex items-center gap-3 h-16 mt-8">
            <li className="md:w-[4rem] md:h-[4rem] w-16 h-16 z-10">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/ouzzat/"
                className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
              >
                <FaLinkedinIn className="text-2xl" />
              </Link>
            </li>
            <li className="md:w-[4rem] md:h-[4rem] w-16 h-16 z-10">
              <Link
                target="_blank"
                href="https://github.com/ouzzatDev"
                className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
              >
                <FaGithub className="text-2xl" />
              </Link>
            </li>
          </ul>
        </AnimatedCard>
      </div>

      <AnimatedCard styles="lg:col-span-2 col-span-1 card md:p-8 p-4 lg:mt-0 mt-10">
        <Image
          src={icon2}
          alt="icon2"
          className="absolute top-0 right-10 duration-300 ease-linear"
        />

        <h1 className="text-lightest-slate md:text-4xl text-2xl font-bold z-10 relative">
          Let’s work <span className="text-gradient-green">together.</span>
        </h1>

        <ContactForm />
      </AnimatedCard>
    </main>
  );
};

export default page;
