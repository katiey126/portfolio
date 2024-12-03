import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";
import mail from "public/crayon-mail-icon.png";
import instagram from "public/crayon-instagram-icon.png";
import linkedin from "public/crayon-linkedin-icon.png";
import person from "public/crayon-stick-figure.png";
import bubble from "public/crayon-speech-bubble.png";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center pt-24 pb-14 text-2xl">
        <div className="flex justify-center">
          <a href="http://instagram.com/" className="p-10 flex flex-col items-center">
            <Image src={instagram} alt="instagram" className="w-48 h-auto" />
            <span className="mt-2">Instagram</span>
          </a>
          <a href="http://gmail.com" className="p-10 flex pl-24 pr-24 flex-col items-center">
            <Image src={mail} alt="gmail" className="w-52 h-auto" />
            <span className="mt-6">Email</span>
          </a>
          <a href="http://linkedin.com" className="p-10 flex flex-col items-center">
            <Image src={linkedin} alt="linkedin" className="w-48 h-auto" />
            <span className="mt-2">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="relative pl-96 text-xl">
        <div className="absolute transform translate-x-12 -translate-y-12 w-48 h-24 flex items-center justify-center">
          <Image src={bubble} alt="speech bubble" className="absolute w-full h-full object-contain pr-4"/>
          <span className="relative text-center">SAY HI</span>
        </div>

        <div>
          <Image src={person} alt="stick figure" className="w-16 h-auto"/>
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