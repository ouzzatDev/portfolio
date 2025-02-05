import React from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  bg1,
  booking,
  jacanradacar,
  mjcleanerservices,
  vaccumProduct,
  star,
  syndicconnect,
  rgp,
  croams,
  groupearraid,
  mremballage,
  cartonazilal,
  ecommercevue,
  ellamarket,
  onzosyndic,
  citytiles,

} from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight, BsCaretRight, BsGithub } from "react-icons/bs";

export const metadata: Metadata = {
  title: "ouzzatdev | Projects",
};

const Page = () => {
  return (
    <main className="my-10">
      <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
        <div className="flex gap-6 lg:flex-col md:flex-row flex-col lg:order-1 order-2 lg:mt-0 mt-8">
          <AnimatedCard>
            <div className="card w-full p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <Link
                href="https://jacarandacar.fr/"
                target="_blank"
                className="relative z-10"
              >
                <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                  <Image
                    src={jacanradacar}
                    alt="Jacaranda Car Rental Cars"
                    fill
                    className="absolute object-fill"
                  />
                </div>
              </Link>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  Jacaranda Car Rental Cars
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Laravel
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />{" "}
                    Tailwindcss
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link href="https://jacarandacar.fr/" legacyBehavior>
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
            <div className="card w-full p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <Link
                href="https://book-hotel-six.vercel.app/"
                target="_blank"
                className="relative z-10"
              >
                <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                  <Image
                    src={booking}
                    alt="book-hotel"
                    fill
                    className="absolute object-fill"
                  />
                </div>
              </Link>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  Book Hotel
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />{" "}
                    Tailwindcss
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " /> Shadcn
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/younesouzzat/book_hotel"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://book-hotel-six.vercel.app/"
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
            <div className="card w-full p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <Link
                href="https://vaccum-alpha.vercel.app/"
                target="_blank"
                className="relative z-10"
              >
                <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                  <Image
                    src={vaccumProduct}
                    alt="nft-marketplace"
                    fill
                    className="absolute object-fill"
                  />
                </div>
              </Link>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  Vaccum
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />{" "}
                    Tailwindcss
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " /> Shadcn
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/younesouzzat/vaccum"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://vaccum-alpha.vercel.app/"
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
            <div className="card p-5">
              <Image src={bg1} alt="bg1" className="bg-card" />

              <Link
                href="https://mjcleanerservices.vercel.app/"
                target="_blank"
                className="relative z-10"
              >
                <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                  <Image
                    src={mjcleanerservices}
                    alt="mjcleanerservices"
                    fill
                    className="absolute object-fill"
                  />
                </div>
              </Link>

              <div className="z-10 relative">
                <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                  Mj cleaning services
                </h1>
                <p
                  className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                >
                  Technologies:
                </p>

                <ul
                  className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                >
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Next.js
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Tailwindcss
                  </li>
                  <li className="flex items-center gap-1 mr-3 mb-1">
                    <BsCaretRight className="text-green text-[12px] " />
                    Shadcn
                  </li>
                </ul>

                <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                  <li>
                    <Link
                      href="https://github.com/younesouzzat/BOOKING_UI"
                      legacyBehavior
                    >
                      <a target="_blank" rel="noreferrer">
                        <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://mjcleanerservices.vercel.app/"
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
        </div>

        <div className="col-span-2 lg:order-2 order-1">
          <AnimatedCard>
            <div className="flex items-center justify-center md:gap-8 gap-4">
              <Image
                src={star}
                alt="star"
                width={50}
                height={50}
                className="object-cover"
              />
              <h2 className="font-bold lg:text-[3rem] md:text-4xl text-center text-[1.75rem] text-gradient">
                All Projects
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

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            <AnimatedCard>
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://ecommerce-web-app-a0346.web.app/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={ecommercevue}
                      alt="ecommercevue"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Ecommerce Vue App
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Vue js
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Pinia
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link
                        href="https://ecommerce-web-app-a0346.web.app/"
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://ellamarket-web-app.web.app/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={ellamarket}
                      alt="ellamarket"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Ecommerce Vue App
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Vue js
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Vuex
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link
                        href="https://ellamarket-web-app.web.app/"
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://app.syndicconnect.ma/login"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={syndicconnect}
                      alt="syndicconnect"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Syndic Connect App
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Jquery - Ajax
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link
                        href="https://app.syndicconnect.ma/login"
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://platform.croams.ma/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={croams}
                      alt="croams"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Croams App
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Jquery - Ajax
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link
                        href="https://github.com/younesouzzat/videoly"
                        legacyBehavior
                      >
                        <a target="_blank" rel="noreferrer">
                          <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://videoly.vercel.app/" legacyBehavior>
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://www.groupearraid.com/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={groupearraid}
                      alt="groupearraid"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Groupe Arraid
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Jquery - Ajax
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link href="https://www.groupearraid.com/" legacyBehavior>
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://cartonazilal.com/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={mremballage}
                      alt="mremballage"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Mr Emballage
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Jquery - Ajax
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link href="https://cartonazilal.com/" legacyBehavior>
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="http://rgp.yancom-creation.com/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={rgp}
                      alt="rgp"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    RGPub
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Jquery - Ajax
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link href="http://rgp.yancom-creation.com/" legacyBehavior>
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://cartonazilal.com/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={cartonazilal}
                      alt="cartonazilal"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Carton Azilal
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Laravel
                    </li>
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Jquery - Ajax
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link href="https://cartonazilal.com/" legacyBehavior>
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://onzosyndic.com/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={onzosyndic}
                      alt="onzosyndic"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Onzo Syndic
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Wordpress
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link href="https://onzosyndic.com/" legacyBehavior>
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
              <div className="card p-5">
                <Image src={bg1} alt="bg1" className="bg-card" />

                <Link
                  href="https://citytiles.ma/"
                  target="_blank"
                  className="relative z-10"
                >
                  <div className="w-full h-56 rounded-30 overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
                    <Image
                      src={citytiles}
                      alt="citytiles"
                      fill
                      className="absolute object-fill"
                    />
                  </div>
                </Link>

                <div className="z-10 relative">
                  <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
                    Onzo Syndic
                  </h1>
                  <p
                    className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
                  >
                    Technologies:
                  </p>

                  <ul
                    className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
                  >
                    <li className="flex items-center gap-1 mr-3 mb-1">
                      <BsCaretRight className="text-green text-[12px] " />
                      Wordpress
                    </li>
                  </ul>

                  <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
                    <li>
                      <Link href="https://citytiles.ma/" legacyBehavior>
                        <a target="_blank" rel="noreferrer">
                          <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
