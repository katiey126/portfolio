import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import frame from "public/crayon-frame.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="flex flex-col items-center translate-y-20">
          <Image src={frame} alt="black frame" className="w-auto h-96"/>
          <span className="text-3xl font-crayonWorks pl-24 pr-24 -translate-y-5">
            Bullet journal styled to-do list and scheduler. 
            Assignment import with syllabus parsing.
          </span>
        </div>
        <div className="flex flex-col items-center -translate-y-8">
          <Image src={frame} alt="black frame" className="w-auto h-96"/>
          <span className="text-3xl font-crayonWorks pl-24 pr-24 -translate-y-5">
            Log your video games and get indie game recs based on your taste.
            View stats with Steam API.
          </span>
        </div>
      </div>
      <div className="absolute bottom-2 right-10 text-center">
        <a href="/">
          <Image src={house} alt="home page" className="w-60 h-auto"/>
          <span className="text-1xl">HOME</span>
        </a>
      </div>
    </div>
  );
}