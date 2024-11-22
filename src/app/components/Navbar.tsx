import Link from 'next/link';
import Image from 'next/image';
import cloud1 from "public/cloud1.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-cloud bg-contain bg-no-repeat text-2xl pr-24 pl-24 pb-10 pt-6">
        <Link href="/about">About</Link>
      </div>

      <Image src={cloud1} alt="small cloud" className="w-2/12 h-auto" />

      <div className="bg-cloud bg-contain bg-no-repeat text-2xl pr-24 pl-24 pb-10 pt-6">
        <Link href="/projects">Projects</Link>
      </div>

      <Image src={cloud1} alt="small cloud" className="w-2/12 h-auto" />

      <div className="bg-cloud bg-contain bg-no-repeat text-2xl pr-24 pl-24 pb-10 pt-6">
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;