const ServiceOfferedBox = ({ src, title, description }) => {
  return (
    <div className="w-full md:w-[90%] py-4 md:rounded-[4px] flex flex-col lg:flex-row justify-evenly items-center">
      <div className="hidden md:flex min-w-[250px] max-w-[250px]">
        <img
          src={src}
          alt=""
          className="drop-shadow-[0px_0px_8px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="w-[90%] lg:w-[700px] lg:pl-10 flex flex-col items-start md:items-center lg:items-start">
        <h3 className="text-neon font-semibold">{title}</h3>
        <p className="text-rich dark:text-alice text-justify md:text-center lg:text-left transition-all ease-in-out duration-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceOfferedBox;
