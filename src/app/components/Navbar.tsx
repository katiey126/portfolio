import Link from 'next/link';
import Image from 'next/image';
import cloud1 from "public/cloud1.png";
import cloud2 from "public/cloud2.png";

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center text-blue-700 text-3xl">
      
      <Link href="/about" className="relative flex justify-center items-center">
        <Image src={cloud2} alt="cloud" className="w-60 h-auto"/>
        <span className="absolute text-center">ABOUT</span>
      </Link>

      <Image src={cloud1} alt="small cloud" className="w-2/12 h-auto" />

      <Link href="/projects" className="relative flex justify-center items-center">
        <Image src={cloud2} alt="cloud" className="w-60 h-auto"/>
        <span className="absolute text-center">PROJECTS</span>
      </Link>

      <Image src={cloud1} alt="small cloud" className="w-2/12 h-auto" />

      <Link href="/contact" className="relative flex justify-center items-center">
        <Image src={cloud2} alt="cloud" className="w-60 h-auto"/>
        <span className="absolute text-center">CONTACT</span>
      </Link>
    </div>
  );
};

export default Navbar;