import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = () => {
  return (
    <nav className="h-20 fixed bg-darkBg  w-full flex items-center">
      <div className="flex mx-auto container items-center justify-between">
        <a href={"/"}>
          <Image src={"/votey-logo.png"} width="170" height="60" alt="logo" />
        </a>
        <div className="text-white flex items-center gap-6 text-lg">
          <Link href="/login">Login</Link>
          <Link href="/signup">
            <button className="rounded-xl bg-darkBlue px-6 py-2">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
