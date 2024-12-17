import Image from "next/image";
import Link from "next/link";
import house from "public/crayon-house.png";

export default function Footer() {
  return (
    <div className="absolute bottom-4 right-4 text-center">
      <Link href="/">
        <Image src={house} alt="home page" className="w-40 sm:w-60 h-auto" />
        <span className="text-sm">HOME</span>
      </Link>
    </div>
  );
}
