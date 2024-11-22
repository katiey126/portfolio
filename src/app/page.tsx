import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import person from "public/crayon-stick-figure.png";

export default function Home() {
  return (
    <div className="bg-paper bg-cover bg-center">
     
      <div className="absolute text-center text-red-700 w-full pt-32">
        <span className="text-biggerrr tracking-widerrr">KATIE YANG</span>
          <p className="pr-80 text-2xl tracking-wide leading-6">Web developer with a passion for</p>
          <p className="pr-64 text-2xl tracking-wide leading-6">creative design and user experience</p>
      </div>
      
      <div className="absolute pl-96 bottom-0">
        <div className="absolute transform translate-x-12 -translate-y-12 bg-bubble bg-contain bg-no-repeat w-9/12 h-24 flex items-center justify-center">
          <span className="text-2xl"><a href="/projects">SEE MY PROJECTS</a></span>
        </div>
          <Image src={person} alt="stick figure" className="w-16 h-auto" />
      </div>

      <div className="absolute  bottom-0 right-10">
        <Image src={house} alt="House." className="w-96 h-auto"/>
      </div>
    </div>
  );
}