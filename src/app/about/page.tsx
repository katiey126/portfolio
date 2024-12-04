import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import person from "public/crayon-stick-figure.png";
import bubble from "public/crayon-speech-bubble.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center text-3xl m-14">
        <div className="relative text-xl">
          <div className="absolute transform translate-x-12 -translate-y-12 w-48 h-24 flex items-center justify-center">
            <Image src={bubble} alt="speech bubble" className="absolute w-full h-full object-contain pr-4"/>
            <span className="relative text-center">Hi I'm Katie</span>
          </div>

          <div>
            <Image src={person} alt="stick figure" className="w-16 h-auto"/>
          </div>
        </div>

        <span className="font-crayonWorks mx-72">
          I'm a developer and web designer currently studying computer science
          at the University of Maryland. Aside from web dev I also do some environmental
          machine learning research.
          <br></br><br></br>
          I also love <Link href="https://www.goodreads.com/user/show/148292068-katie" target="_blank" rel="noopener noreferrer" className="text-blue-700">books</Link>, 
          birdwatching, and listening to all sorts of <Link href="https://open.spotify.com/user/katie.yang1818?si=6a8435b75a3a418d" target="_blank" rel="noopener noreferrer" className="text-blue-700">music</Link>.
        </span>
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