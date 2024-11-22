import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";

export default function Home() {
  return (
    <div className="">
      <div className="absolute bottom-5 right-10 text-center">
        <a href="/"><Image src={house} alt="home page" className="w-60 h-auto"/></a>
        <span className="text-1xl">HOME</span>
      </div>
    </div>
  );
}