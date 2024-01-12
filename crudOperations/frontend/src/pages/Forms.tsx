import React from "react";

interface Props {
  children: React.ReactNode;
}

const Forms = ({ children }: Props) => {
  return (
    <>
      <div className="w-[40vw] container h-[50vh] md:block">
        <div className=" flex justify-center items-center border-neutral-100 border-2 md:p-10 underline underline-offset-2">
          {children};
        </div>
      </div>
    </>
  );
};

export default Forms;
