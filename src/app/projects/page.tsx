import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import frame from "public/crayon-frame.png";
import project1 from "public/project1.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center text-2xl font-crayonWorks">
        <div className="flex flex-col items-center translate-y-20">
          <div className="relative w-auto h-96 flex items-center justify-center">
            <Image src={frame} alt="black frame" className="w-full h-full object-contain" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Image src={project1} alt="bullet journal app" className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          <span className="pl-24 pr-24 -translate-y-5 text-center">
            Bullet journal styled to-do list and scheduler with auto assignment import via syllabus parsing.
          </span>
        </div>

        <div className="flex flex-col items-center -translate-y-8">
          <div className="relative w-auto h-96 flex items-center justify-center">
            <Image src={frame} alt="black frame" className="w-full h-full object-contain" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Image src={project1} alt="log video games app" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
          
          <span className="pl-24 pr-24 -translate-y-5 text-center">
            Log/review video games and get personalized recs, pushing work by small indie devs. View game stats with Steam API.
          </span>
        </div>
      </div>

      <div className="absolute bottom-2 right-10 text-center">
        <Link href="/">
          <Image src={house} alt="home page" className="w-60 h-auto"/>
          <span className="text-1xl">HOME</span>
        </Link>
      </div>
    </div>
  );
}