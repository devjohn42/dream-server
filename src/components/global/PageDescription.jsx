const PageDescription = ({ description }) => {
  return (
    <h6 className="text-rich dark:text-alice text-left md:text-center lg:text-left sm:text-justify font-medium">
      {description}
    </h6>
  );
};

export default PageDescription;
