import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className="text-white">Blog</div>
      <Link href="/" className="bg-fuchsia-600">
        Home
      </Link>
    </>
  );
};

export default Blog;
