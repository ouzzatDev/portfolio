"use client";

import React, { useState } from "react";
import AnimatedCard from "./AnimatedCard";
import Image from "next/image";
import { bg1 } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Link from "next/link";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const SmallWorks = () => {
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(!loadMore);
  };
  return (
    <section className="mt-20">
      <AnimatedCard>
        <h2 className="md:text-3xl text-2xl text-lightest-slate/60 font-bold text-center">
          Other Noteworthy Projects
        </h2>
      </AnimatedCard>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <AnimatedCard>
          <div className="card p-6 h-full">
            <Image src={bg1} alt="bg1" className="bg-card" />
            <div className="relative z-10">
              <h6 className="text-xl font-semibold text-lightest-slate">
                Simple shopping cart
              </h6>
              <p className="text-lightest-slate/60 text-base mt-2">
                Building a simple shopping cart using react and redux toolkit
                for state management
              </p>
              <ul
                className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
              >
                <li>React.js</li>
                <li>Styled Components</li>
                <li>Redux Toolkit</li>
              </ul>

              <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                <li>
                  <Link
                    href="https://github.com/ouzzatDev/redux-toolkit-shopping-cart"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://shopping-cart-ten-chi.vercel.app/"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <div className="card p-6 h-full">
            <Image src={bg1} alt="bg1" className="bg-card" />
            <div className="relative z-10">
              <h6 className="text-xl font-semibold text-lightest-slate">
                Weather app
              </h6>
              <p className="text-lightest-slate/60 text-base mt-2">
                weather app is provide a possibility to search about the weather
                of most cities in the world
              </p>
              <ul
                className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
              >
                <li>Next.js</li>
                <li>Open Weather api</li>
              </ul>

              <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                <li>
                  <Link
                    href="https://github.com/ouzzatDev/weather-app"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://weather-app-delta-roan.vercel.app/"
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer">
                      <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedCard>

        {loadMore && (
          <>
            <AnimatedCard>
              <div className="card p-6 h-full">
                <Image src={bg1} alt="bg1" className="bg-card" />
                <div className="relative z-10">
                  <h6 className="text-xl font-semibold text-lightest-slate">
                    Wizard Form
                  </h6>
                  <p className="text-lightest-slate/60 text-base mt-2">
                    Building a wizard form for efficient state management and
                    data handling across different form stages. This approach
                    ensures a scalable, maintainable, and user-friendly
                    application.
                  </p>
                  <ul
                    className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
                  >
                    <li>Next.js</li>
                    <li>React Hook Form</li>
                    <li>Zod</li>
                    <li>Redux</li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link
                        href="https://github.com/ouzzatDev/wizard-form"
                        legacyBehavior
                      >
                        <a target="_blank" rel="noreferrer">
                          <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://wizard-form-jet.vercel.app/"
                        legacyBehavior
                      >
                        <a target="_blank" rel="noreferrer">
                          <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div className="card p-6 h-full">
                <Image src={bg1} alt="bg1" className="bg-card" />
                <div className="relative z-10">
                  <h6 className="text-xl font-semibold text-lightest-slate">
                    Old Portfolio
                  </h6>
                  <p className="text-lightest-slate/60 text-base mt-2">
                    Discover my old portfolio, highlighting cutting-edge
                    projects and deep technical expertise. Immerse in the
                    seamless integration of design and functionality tailored
                    for a captivating user experience.
                  </p>
                  <ul
                    className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
                  >
                    <li>Next.js</li>
                    <li>Tailwindcss</li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link
                        href="https://github.com/ouzzatDev/portfolio"
                        legacyBehavior
                      >
                        <a target="_blank" rel="noreferrer">
                          <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://ouzzatdev.vercel.app/"
                        legacyBehavior
                      >
                        <a target="_blank" rel="noreferrer">
                          <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </>
        )}
      </div>

      <div className="flex justify-center mt-12">
        <button className="btn btn-white bg-gradient" onClick={handleLoadMore}>
          {loadMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default SmallWorks;
