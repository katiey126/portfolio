import Image from "next/image";
import Link from "next/link";
import person from "public/crayon-stick-figure.png";
import bubble from "public/crayon-speech-bubble.png";

export default function Home() {
  return (
    <div className="">
     
      <div className="absolute text-center text-red-700 w-full pt-24 justify-center">
        <div className="flex flex-col md:flex-row justify-center md:space-x-14 transform text-9xl md:text-biggerrr tracking-widerrr">
          <span className="-translate-y-4">KATIE </span>
          <span className="translate-y-4">YANG</span>
        </div>
        <div className="text-lg md:text-2xl pt-4 tracking-wide justify-center transform">
          <p className="md:-translate-x-64">Web developer with a passion for</p>
          <p className="md:-translate-x-40">creative design and user experience</p>
        </div>
      </div>
      
      <div className="absolute md:pl-96 bottom-0 pb-5">
        <div className="absolute transform translate-x-12 -translate-y-12 w-9/12 h-24 flex items-center justify-center">
          <Link href="/projects" className="relative flex items-center justify-center w-full h-full">
            <Image src={bubble} alt="speech bubble" className="absolute w-full h-full object-contain pr-9"/>
            <span className="text-lg sm: text-lg md:text-xl text-center">SEE MY PROJECTS</span>
          </Link>
        </div>
          <Image src={person} alt="stick figure" className="w-12 md:w-16 h-auto" />
      </div>
    </div>
  );
}