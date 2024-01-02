import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-5xl text-center py-72">
        <Link className="text-red" to={"/search"}>
          Welcome Cultured Ladies and Gentleman....
        </Link>
      </div>
    </>
  );
};

export default Home;
