import Link from 'next/link';
import Image from 'next/image';
import cloud1 from "public/cloud1.png";
import cloud2 from "public/cloud2.png";

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center text-blue-700 text-3xl">
      
      <a href="/about" className="relative flex justify-center items-center">
        <Image src={cloud2} alt="cloud" className="w-60 h-auto"/>
        <span className="absolute text-center">ABOUT</span>
      </a>

      <Image src={cloud1} alt="small cloud" className="w-2/12 h-auto" />

      <a href="/projects" className="relative flex justify-center items-center">
        <Image src={cloud2} alt="cloud" className="w-60 h-auto"/>
        <span className="absolute text-center">PROJECTS</span>
      </a>

      <Image src={cloud1} alt="small cloud" className="w-2/12 h-auto" />

      <a href="/contact" className="relative flex justify-center items-center">
        <Image src={cloud2} alt="cloud" className="w-60 h-auto"/>
        <span className="absolute text-center">CONTACT</span>
      </a>
    </div>
  );
};

export default Navbar;