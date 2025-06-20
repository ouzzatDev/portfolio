import { bg1, ouzzatdev } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const AboutMeCard = () => {
  return (
    <div className="card md:p-10 p-5 w-full h-full flex md:flex-row flex-col items-center gap-10 group">
      <Image src={bg1} alt="bg1" className="bg-card" />

      <div className="about-me">
        <Image
          src={ouzzatdev}
          alt="ouzzatdev"
          fill
          quality={100}
          className="absolute object-cover rounded-tl-[30px] rounded-br-[30px]"
        />
      </div>

      <div className="z-10">
        <p className="text-green mb-2 text-sm">👋 Hi, my name is</p>
        <h1 className="text-gradient text-3xl font-bold mb-[.5px]">Younes</h1>
        <h1 className="text-gradient text-3xl font-bold">Ouzzat.</h1>
        <p className="text-lightest-slate/60 mt-4 text-sm">
          Passionate Full Stack Developer.
        </p>

        <a
          className={`${RobotoMono.className} btn btn-white bg-gradient flex items-center justify-center gap-3 mt-8`}
          href="/assets/ouzzat_younes_fr.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get my resume <HiDownload />
        </a>
      </div>
    </div>
  );
};

export default AboutMeCard;
