import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import cloud1 from "public/cloud1.png";

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
      <div className="absolute text-center text-red-700 w-full pt-14">
        <span className="text-biggerrr tracking-widerrr">KATIE YANG</span>
          <p className="pr-80 text-2xl tracking-wide leading-6">Web developer with a passion for</p>
          <p className="pr-64 text-2xl tracking-wide leading-6">creative design and user experience</p>
      </div>
      <div className="absolute bottom-10 text-2xl tracking-wide">
        See my projects
      </div>
      <div className="absolute bottom-10 right-10">
        <Image src={house} alt="House." className="w-80 h-auto"/>
      </div>
    </div>
  );
}