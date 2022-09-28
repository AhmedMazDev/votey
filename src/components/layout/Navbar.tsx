import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const session = useSession();

  return (
    <nav className="h-20 fixed bg-darkBg  w-full flex items-center">
      <div className="flex px-2 sm:px-0  mx-auto container items-center justify-between">
        <a href={"/"}>
          <div className=" block sm:hidden ">
            <Image
              src={"/votey-logo-mobile.png"}
              width="60"
              height="60"
              alt="logo"
            />
          </div>
          <div className=" hidden sm:block ">
            <Image
              src={"/votey-logo.png"}
              width="170"
              height="60"
              alt="logo"
              className="hidden"
            />
          </div>
        </a>
        <div className="text-white flex items-center gap-6 text-lg">
          {session.status !== "authenticated" ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">
                <button className="rounded-xl bg-darkBlue px-6 py-2">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
