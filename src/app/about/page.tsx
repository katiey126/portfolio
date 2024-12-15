import Image from "next/image";
import Link from "next/link";
import person from "public/crayon-stick-figure.png";
import bubble from "public/crayon-speech-bubble.png";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center text-2xl lg:text-4xl mt-14">

        <div className="relative text-lg lg:text-xl transform translate-y-4 sm:translate-y-7">
          <div className="absolute transform translate-x-8 sm:translate-x-6 md:translate-x-16 -translate-y-4 sm:-translate-y-6 md:-translate-y-12 w-32 md:w-48 h-12 h-16 md:h-24 flex items-center justify-center">
            <Image
              src={bubble}
              alt="speech bubble"
              className="absolute w-full h-full object-contain pr-3 md:pr-4"
            />
            <span className="relative text-center text-sm sm:text-xl">Hi I&#39;m Katie</span>
          </div>

          <div>
            <Image src={person} alt="stick figure" className="w-10 sm:w-12 md:w-16 h-auto" />
          </div>
        </div>

        <span className="font-crayonWorks text-center max-w-sm sm:max-w-6xl leading-relaxed">
          I&#39;m a developer and web designer currently studying computer science
          at the University of Maryland. Aside from web dev I also do some environmental
          machine learning research.
          I also love{" "}
          <Link
            href="https://www.goodreads.com/user/show/148292068-katie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700"
          >
          books 
          </Link>
          &nbsp;and listening to all sorts of{" "}
          <Link
            href="https://open.spotify.com/user/katie.yang1818?si=6a8435b75a3a418d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700"
          >
            music
          </Link>
          .
        </span>
      </div>
    </div>
  );
}
