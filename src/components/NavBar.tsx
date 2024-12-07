import Logo from "@/../public/Logo_2.png";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="bg-primary shadow-md max-w-5xl mx-auto sticky top-0 z-10">
      <nav className=" flex items-center justify-between px-5 py-3">
        <Link href="/" className=" cursor-pointer">
          <Image className="contrast-200" src={Logo} alt="Logo" width={55} />
        </Link>
        <div>
          <ul className=" flex gap-5 font-medium items-center ">
            <Link href="/">Heim</Link>
            <Link href="/contact-us">kontaktiere uns</Link>
            <Link href="/about">Über uns</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
