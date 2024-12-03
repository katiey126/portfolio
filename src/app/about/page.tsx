import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import person from "public/crayon-stick-figure.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center text-3xl m-14">
        <Image src={person} alt="figure" className="w-16 h-auto"/>
        <span className="font-crayonWorks mx-72">
          Hi I'm Katie. I'm a developer and web designer currently studying computer science
          at the University of Maryland. Aside from web dev I also do some environmental
          machine learning research.
          <br></br><br></br>
          I also love <a href="https://www.goodreads.com/user/show/148292068-katie" target="_blank" rel="noopener noreferrer" className="text-blue-700">books</a>, 
          and listening to all sorts of <a href="https://open.spotify.com/user/katie.yang1818?si=6a8435b75a3a418d" target="_blank" rel="noopener noreferrer" className="text-blue-700">music</a>.
        </span>
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