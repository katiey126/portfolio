import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";

export default function Home() {
  return (
    <div className="bg-paper h-screen w-screen bg-cover bg-center relative p-2">
      <div className="flex justify-between items-center">
        <div className="bg-cloud bg-contain bg-no-repeat text-2xl pr-24 pl-24 pb-10 pt-6">
          <Link href="/about">About</Link>
        </div>
        <div className="bg-cloud bg-contain bg-no-repeat text-2xl pr-24 pl-24 pb-10 pt-6">
          <Link href="/projects">Projects</Link>
        </div>
        <div className="bg-cloud bg-contain bg-no-repeat text-2xl pr-24 pl-24 pb-10 pt-6">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
   
      <div className="absolute bottom-10 right-10 text-center">
        <a href="/"><Image src={house} alt="home page" className="w-80 h-auto"/></a>
        <span className="text-1xl">HOME</span>
      </div>
    </div>
  );
}