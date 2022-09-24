import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen container mx-auto flex-col items-center justify-center py-2 gap-10">
      <h1 className="text-center text-[60px]  lg:text-[128px] font-bold">
        Create your polls
        <br />
        <span className=" text-transparent bg-clip-text bg-gradient-to-br from-darkBlue to-lightBlue">
          in no time.
        </span>
      </h1>
      <p className="text-[26px] lg:text-[32px] font-medium text-grey text-center">
        Not sure where to grab dinner with your friends or you can’t decide
        which game to play ? <br /> Create a poll and get your answers in
        seconds.
      </p>
      <Link href="/create">
        <button className="px-8 py-4 rounded-xl text-[30px] font-bold bg-gradient-to-r from-darkBlue to-lightBlue hover:bg-gradient-to-l hover:from-darkBlue hover:to-lightBlue ">
          Create a poll &#8594;
        </button>
      </Link>
    </div>
  );
};

export default Home;
