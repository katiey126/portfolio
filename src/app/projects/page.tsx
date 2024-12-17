import Image from "next/image";
import Link from "next/link";
import project1 from "public/project1.png";
import project2 from "public/project2.png";
import person from "public/crayon-stick-figure.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center flex-row text-2xl font-crayonWorks justify-center gap-20">
          <div className="flex flex-col relative w-4/12 h-auto flex items-center justify-center transform translate-y-14">
            <Image src={person} alt="figure" className="w-12 h-auto translate-x-24"/>
            <Image src={project1} alt="bullet journal app"/>
          
            <span className="px-8 text-center">
              Bullet journal styled to-do list/scheduler with auto assignment import via syllabus parsing.
            </span>
          </div>

          <div className="flex flex-col relative w-5/12 h-auto flex items-center justify-center transform -translate-y-6">
            <Image src={project2} alt="fcover ml research" />
          
            <span className="px-8 text-center">
              Machine learning model for predicting vegetation cover from satellite reflectance data
            </span>
          </div>
      </div>
    </div>
  );
}