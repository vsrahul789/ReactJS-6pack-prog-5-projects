import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <>
      <div className="w-full md:px-60 px-5">
        <div className="container justify-between flex md:py-16 py-5">
          <span className=" text-red-600 font-bold text-3xl">
            <Link to={"/"}>CRUD.</Link>
          </span>
          <span className="top-4 right-4">
            <ModeToggle />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
