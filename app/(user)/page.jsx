import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-slate-900 via-slate to-black">
        <div className="flex flex-col justify-center items-center">
          <h1 class="mb-4 mt-64 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-purple-800 from-indigo-500">
            Hey, I'm Samyak!
          </h1>
          <h4 class="text-2xl font-bold text-white">Coming Soon</h4>
        <Link href="/blog" className="text-white">Blog</Link>
        </div>
      </div>
    </div> 
  );
};

export default Home;
 