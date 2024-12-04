import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import person from "public/crayon-stick-figure.png";
import bubble from "public/crayon-speech-bubble.png";

export default function Home() {
  return (
    <div className="">
     
      <div className="absolute text-center text-red-700 w-full pt-28">
        <div className="flex justify-center space-x-12 transform">
          <span className="text-biggerrr tracking-widerrr -translate-y-4">KATIE </span>
          <span className="text-biggerrr tracking-widerrr transform translate-y-4">YANG</span>
        </div>
        <p className="pr-80 text-2xl tracking-wide leading-10">Web developer with a passion for</p>
        <p className="pr-64 text-2xl tracking-wide leading-10">creative design and user experience</p>
      </div>
      
      <div className="absolute pl-96 bottom-0 pb-5">
        <div className="absolute transform translate-x-12 -translate-y-12 w-9/12 h-24 flex items-center justify-center">
          <Link href="/projects" className="relative flex items-center justify-center w-full h-full">
            <Image src={bubble} alt="speech bubble" className="absolute w-full h-full object-contain pr-9"/>
            <span className="text-xl text-center">SEE MY PROJECTS</span>
          </Link>
        </div>
          <Image src={person} alt="stick figure" className="w-16 h-auto" />
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