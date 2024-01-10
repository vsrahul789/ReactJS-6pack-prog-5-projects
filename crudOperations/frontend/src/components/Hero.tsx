import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div>
        <div className="container flex justify-between py-10 px-3 md:px-16">
          <HoverCard>
            <HoverCardTrigger
              className="font-semibold
             text-2xl text-white hover:text-green-600"
            >
              <Link to={"/"}>Create</Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-green-300 text-sm">
              Create Step. This is where the creation process is done.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              className="font-semibold
             text-2xl text-white hover:text-blue-500"
            >
              <Link to={"/read"}>Read</Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-blue-400 text-sm">
              Read Step. This is where the reading process is done.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              className="font-semibold
             text-2xl text-white hover:text-blue-600"
            >
              <Link to={"/update"}>Update</Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-blue-400 text-sm">
              Update Step. This is where the updation process is done.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              className="font-semibold
             text-2xl text-white hover:text-red-600"
            >
              <Link to={"/delete"}> Delete </Link>
            </HoverCardTrigger>
            <HoverCardContent className="text-red-600 text-sm">
              Delete Step. This is where the deletion process is done.
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </>
  );
};

export default Hero;
