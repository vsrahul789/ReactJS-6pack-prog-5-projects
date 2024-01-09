import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <>
      <div className="bg-black w-full px-60">
        <div className="container flex justify-between">
          <span className="text-white">BLOG.</span>
          <span className="text-white">
            <ModeToggle />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
