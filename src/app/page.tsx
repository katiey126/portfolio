import Image from "next/image";
import Link from "next/link";

import logo from "public/logo.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center text-center w-full h-screen font-sans flex-col">
      Have fun! <br />
      <span className="italic"> ~CMSC398T Staff </span>
      <Image src={logo} alt="Logo." className="w-10 h-10" />
      <span className="space-x-4">
        <Link href="/about" className="underline transition-all underline-offset-4 hover:underline-offset-8">
          About
        </Link>
        <Link href="/projects" className="underline transition-all underline-offset-4 hover:underline-offset-8">
          Projects
        </Link>
        <Link href="/contact" className="underline transition-all underline-offset-4 hover:underline-offset-8">
          Contact
        </Link>
      </span>
    </div>
  );
}
