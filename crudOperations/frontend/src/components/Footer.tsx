const Footer = () => {
  return (
    <>
      <div className="py-4 md:py-10">
        <div className="flex justify-between bottom-4 container md:px-60 px-5">
          <span className="text-2xl font-semibold text-red-600">CRUD.</span>
          <div className="flex flex-col">
            <span className="text-gray-300 text-center">
              Terms & conditions
            </span>
            <span className="text-gray-300 text-center">Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
