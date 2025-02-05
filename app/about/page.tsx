import AnimatedCard from "@/components/ui/AnimatedCard";
import ContactCard from "@/components/ui/ContactCard";
import CredentialsCard from "@/components/ui/CredentialsCard";
import Profiles from "@/components/ui/Profiles";
import { bg1, ouzzatdev, hand, icon2, star } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiLaravel,
  SiDocker,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";

import StickyCard from "@/components/ui/StickyCard";
import Link from "next/link";

const Page = () => {
  return (
    <main className="my-10">
      <section className="lg:flex block items-start gap-6">
        <StickyCard />

        <AnimatedCard>
          <div className="card lg:hidden block w-full md:p-6 p-3 ">
            <Image src={bg1} alt="bg1" className="bg-card" />

            <div className="w-full h-60 rounded-30 overflow-hidden relative">
              <Image
                src={ouzzatdev}
                alt="ouzzatdev"
                fill
                className="absolute object-cover"
              />
            </div>

            <h1 className="text-lightest-slate font-semibold text-xl text-center mb-1 mt-10 z-10 relative">
              Ouzzat Younes
            </h1>
            <p
              className={`${RobotoMono.className} text-lightest-slate/60 text-[15px] text-center z-10 relative`}
            >
              Full Stack Developer
            </p>

            <ul className="flex items-center justify-center gap-3 h-16 md:px-10 px-6 mt-6">
              <li className="w-14 h-14 z-10">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/younes-ouzzat-57502913a/"
                  className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
                >
                  <FaLinkedinIn className="text-xl" />
                </Link>
              </li>
              <li className="w-14 h-14 z-10">
                <Link
                  target="_blank"
                  href="https://github.com/younesouzzat"
                  className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
                >
                  <FaGithub className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </AnimatedCard>

        <div className="lg:w-4/6 w-full">
          <AnimatedCard>
            <div className="flex items-center justify-center md:gap-8 gap-4 lg:mt-0 mt-16">
              <Image
                src={star}
                alt="star"
                width={50}
                height={50}
                className="object-cover"
              />
              <h2 className="font-bold lg:text-[3rem] md:text-4xl text-center text-[1.75rem] text-gradient">
                About Me
              </h2>
              <Image
                src={star}
                alt="star"
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <div className="card md:px-6 px-3 md:pb-6 pb-3 pt-28 mt-10">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <Image
                src={icon2}
                alt="icon2"
                className="absolute top-0 left-8 duration-300 ease-linear"
              />

              <div className="z-10 relative">
                <p className="text-lightest-slate/60 mb-4 leading-7">
                  👋 Hello, {`I'm`} Younes Ouzzat, a Full Stack Web and Developer
                  with a passion for transforming innovative ideas into
                  functional, engaging digital solutions. Since beginning my
                  coding journey in 2018, I have specialized in web development,
                  combining technical expertise with a commitment to delivering
                  high-quality user experiences. Driven by continuous learning,
                  I stay at the forefront of emerging technologies to create
                  solutions that are both cutting-edge and impactful. Beyond
                  coding, I am dedicated to leveraging the power of technology
                  to craft meaningful digital experiences that make a
                  difference.
                </p>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-lightest-slate font-semibold text-lg">
                EXPERIENCE
              </h2>
              <div className="mt-6">
                <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                  June 2024 - Present
                </p>
                <h3 className={`${RobotoMono.className} text-green text-base`}>
                  Full Stack web developer at SEOCOM - MARRAKECH
                </h3>
                <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                  🌐 Currently, I continue to work with Laravel and Next.js,
                  focusing on developing high-performance websites. My role also
                  involves optimizing website performance to enhance user
                  experience and support better SEO outcomes.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                  January 2021 - January 2024
                </p>
                <h3 className={`${RobotoMono.className} text-green text-base`}>
                  Full Stack web developer at YANCOM - CASABLANCA
                </h3>
                <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                  💻 With 3 years of experience as a Full Stack Web Developer, I
                  have been dedicated to building robust, scalable web
                  applications. My expertise lies in creating full-stack
                  websites using Laravel for developing secure, high-performance
                  backends, and WordPress for crafting dynamic, content-driven
                  sites. Throughout my journey, I have handled both front-end
                  and back-end development, ensuring seamless integration,
                  responsive design, and optimized performance to deliver
                  exceptional user experiences.
                </p>
              </div>

              <div className="mt-14">
                <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                  January 2019 - October 2019
                </p>
                <h3 className={`${RobotoMono.className} text-green text-base`}>
                  Full Stack web developer at SEOCOM - MARRAKECH
                </h3>
                <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                  💻 As a Full Stack Web Developer from January to October 2019,
                  I embarked on a dynamic journey through the digital landscape.
                  During this time, I was responsible for creating both dynamic
                  and static websites, while also focusing on SEO and website
                  optimization to enhance performance and visibility.
                </p>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-lightest-slate font-semibold text-lg">
                EDUCATION
              </h2>
              <div className="mt-6">
                <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                  2012 - 2013
                </p>
                <h3 className={`${RobotoMono.className} text-green text-base`}>
                  Baccalaureate In Expiremental Sciences
                </h3>
                <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                  EL JADIDA High School
                </p>
              </div>

              <div className="mt-14">
                <p className="text-lightest-slate/60 text-base mb-1 font-normal">
                  2014 - 2016
                </p>
                <h3 className={`${RobotoMono.className} text-green text-base`}>
                  Technical Specialist in IT Development
                </h3>
                <p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
                  NTIC , Marrakech
                </p>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-lightest-slate font-semibold text-lg">
                TECH
              </h2>

              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-3 mt-6">
                <div className="card col-span-2 flex justify-center items-center py-8 gap-6">
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="h-10 flex justify-center items-center">
                      <SiJavascript className="text-lightest-slate text-2xl" />
                    </div>
                    <p className="text-lightest-slate text-[13px]">
                      Javascript (ES6+)
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="h-10 flex justify-center items-center">
                      <SiTypescript className="text-lightest-slate text-2xl" />
                    </div>
                    <p className="text-lightest-slate text-[13px]">
                      Typescript
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="h-10 flex justify-center items-center">
                      <DiNodejs className="text-lightest-slate text-6xl" />
                    </div>
                    <p className="text-lightest-slate text-[13px]">Nodejs</p>
                  </div>
                </div>
                <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <SiExpress className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">Expressjs</p>
                </div>
                <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <SiNestjs className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">Nestjs</p>
                </div>
                <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <SiLaravel className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">Laravel</p>
                </div>
                <div className="card md:hidden flex flex-col justify-center items-center">
                  <div className="move-updown ">
                    <Image
                      src={hand}
                      alt="hand"
                      width={80}
                      height={80}
                      className="rotate-90"
                    />
                  </div>
                </div>
                <div className="card col-span-2 flex justify-center items-center py-8 gap-6">
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <IoLogoReact className="text-lightest-slate text-4xl" />
                    <p className="text-lightest-slate text-[13px]">Reactjs</p>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <SiNextdotjs className="text-lightest-slate text-4xl" />
                    <p className="text-lightest-slate text-[13px]">Nextjs</p>
                  </div>
                  {/* <div className="flex flex-col gap-3 items-center justify-center">
                    <IoLogoReact className="text-lightest-slate text-4xl" />
                    <p className="text-lightest-slate text-[13px]">
                      React Native
                    </p>
                  </div> */}
                </div>
                {/* <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <BiLogoPostgresql className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">Postgresql</p>
                </div> */}
                <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <SiMongodb className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">MongoDB</p>
                </div>
                {/* <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <SiPrisma className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">Prisma</p>
                </div> */}
                <div className="card md:hidden flex flex-col justify-center items-center">
                  <div className="move-updown ">
                    <Image
                      src={hand}
                      alt="hand"
                      width={80}
                      height={80}
                      className="rotate-90"
                    />
                  </div>
                </div>
                <div className="card col-span-2 flex justify-center items-center py-8 gap-6">
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <FaHtml5 className="text-lightest-slate text-4xl" />
                    <p className="text-lightest-slate text-[13px]">Html</p>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <IoLogoCss3 className="text-lightest-slate text-4xl" />
                    <p className="text-lightest-slate text-[13px]">Css</p>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <SiTailwindcss className="text-lightest-slate text-4xl" />
                    <p className="text-lightest-slate text-[13px]">
                      Tailwindcss
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-lightest-slate font-semibold text-lg">
                DEVOPS
              </h2>

              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-3 mt-6">
                <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <FaGitAlt className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">Git</p>
                </div>
                {/* <div className="card flex flex-col justify-center items-center py-8 gap-3">
                  <SiDocker className="text-lightest-slate text-4xl" />
                  <p className="text-lightest-slate text-[13px]">Docker </p>
                </div> */}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
        <AnimatedCard styles="lg:order-1 order-1">
          <Profiles />
        </AnimatedCard>
        <AnimatedCard styles="md:col-span-2 col-span-1 lg:order-2 order-3">
          <ContactCard />
        </AnimatedCard>
        <AnimatedCard styles="lg:order-3 order-2">
          <CredentialsCard />
        </AnimatedCard>
      </section>
    </main>
  );
};

export default Page;
