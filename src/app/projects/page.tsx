import Image from "next/image";
import Link from "next/link";
import project1 from "public/project1.png";
import project2 from "public/project2.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center flex-row text-2xl font-crayonWorks justify-center">

        <div className="flex flex-col items-center">
          <div className="flex flex-col relative w-6/6 h-auto flex items-center justify-center">
            <Image
              src={project1}
              alt="bullet journal app"
            />
          
            <span className="px-8 text-center">
              Bullet journal styled to-do list and scheduler with auto assignment import via syllabus parsing.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col relative w-4/6 h-auto flex items-center justify-center">
            <Image
              src={project2}
              alt="fcover ml research"
            />
          
            <span className="px-8 text-center">
              developed machine learning model to predict vegetation cover from satellite reflectance data
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}