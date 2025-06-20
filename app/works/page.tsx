// app/projects/page.tsx
import { Metadata } from "next";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { projects } from "@/utils/projectList";
import Image from "next/image";
import { star } from "@/utils/assets";
import ItemsProjectCard from "@/components/ui/ItemsProjectCard";

export const metadata: Metadata = {
  title: "ouzzatdev | Projects",
};

export default function Page() {
  return (
    <main className="my-10">
      <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
        {/* Side Column – First 10 projects */}
        <div className="flex gap-6 lg:flex-col md:flex-row flex-col lg:order-1 order-2 lg:mt-0 mt-8">
          {projects.slice(0, 8).map((project, i) => (
            <ItemsProjectCard key={i} {...project} />
          ))}
        </div>

        {/* Main Column – Remaining 15 projects */}
        <div className="col-span-2 lg:order-2 order-1">
          <AnimatedCard>
            <div className="flex items-center justify-center md:gap-8 gap-4">
              <Image src={star} alt="star" width={50} height={50} />
              <h2 className="font-bold lg:text-[3rem] md:text-4xl text-center text-[1.75rem] text-gradient">
                All Projects
              </h2>
              <Image src={star} alt="star" width={50} height={50} />
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {projects.slice(8).map((project, i) => (
              <ItemsProjectCard key={i + 8} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
