import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className="text-white">Blog</div>
      <Link href="/" className="bg-fuchsia-600">
        Home
      </Link>

      <div className="text-white">
        Blog layout
        <h1>headline</h1>

      </div>
    </>
  );
};

export default Blog;
