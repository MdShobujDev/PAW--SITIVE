import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" bg-secondary px-10 py-5">
      <div className=" text-xl font-light text-amber-700 mb-20">
        <h4>PAW-SITIVE</h4>
      </div>
      <div className=" text-sm font-light mb-3">
        <h3>Ditzingerstraße 39</h3>
        <h3>70839 Gerlingen</h3>
      </div>
      <div className=" flex items-center justify-between">
        <div className=" text-sm">
          <h3>Call: +49 176 66843841</h3>
          <h3>Email: info@paw-sitive.de</h3>
        </div>
        <div className=" flex items-center gap-3">
          <Link
            href="#"
            className=" bg-amber-600 p-2 rounded-full text-white text-xl hover:scale-90 transition-all ease-linear duration-150"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="#"
            className=" bg-amber-600 p-2 rounded-full text-white text-xl hover:scale-90 transition-all ease-linear duration-150"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="#"
            className=" bg-amber-600 p-2 rounded-full text-white text-xl hover:scale-90 transition-all ease-linear duration-150"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
