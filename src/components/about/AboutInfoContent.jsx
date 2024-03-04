const AboutInfoContent = ({ title, description }) => {
  return (
    <div className="w-[90%] xl:w-[1000px]">
      <h3 className="text-neon font-semibold">{title}</h3>
      <h6 className="text-rich dark:text-alice text-left sm:text-justify font-normal">
        {description}
      </h6>
    </div>
  );
};

export default AboutInfoContent;
