// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCaretRight, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { RobotoMono } from "@/utils/fonts";

interface ProjectCardProps {
  title: string;
  image: any;
  technologies: string[];
  bg?: any;
  websiteUrl: string;
  githubUrl?: string;
}

const ItemsProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  technologies,
  bg,
  websiteUrl,
  githubUrl,
}) => {
  return (
    <AnimatedCard>
      <div className="card w-full p-5">
        {bg && <Image src={bg} alt="bg" className="bg-card" />}
        <Link href={websiteUrl} target="_blank" className="relative z-10">
          <div className="w-full h-56 rounded-30 overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-full z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
            <Image src={image} alt={title} fill className="absolute object-fill" />
          </div>
        </Link>

        <div className="z-10 relative">
          <h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">{title}</h1>
          <p className={`${RobotoMono.className} text-green/60 text-[15px] mt-4`}>Technologies:</p>
          <ul
            className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
          >
            {technologies.map((tech, i) => (
              <li key={i} className="flex items-center gap-1 mr-3 mb-1">
                <BsCaretRight className="text-green text-[12px]" /> {tech}
              </li>
            ))}
          </ul>
          <ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
            {githubUrl && (
              <li>
                <Link href={githubUrl} target="_blank" rel="noreferrer">
                  <BsGithub className="text-2xl hover:text-green duration-150 ease-in" />
                </Link>
              </li>
            )}
            <li>
              <Link href={websiteUrl} target="_blank" rel="noreferrer">
                <BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ItemsProjectCard;
