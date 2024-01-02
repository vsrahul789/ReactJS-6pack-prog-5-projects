import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-6 px-4">
        <h1 className="font-bold text-3xl">
          <Link className="text-red-700 float-start" to={"/"}>
            Logo:]
          </Link>
        </h1>

        <Link className="text-teal-800 text-xl" to={"/"}>
          Home
        </Link>
        <Link className="text-teal-800 text-xl" to={"/search"}>
          Search
        </Link>
        <Link className="text-teal-800 text-xl" to={"/video"}>
          Videos
        </Link>
        <Link className="text-teal-800 text-xl" to={"/gallery"}>
          Gallery
        </Link>
      </div>
    </>
  );
};

export default Header;
