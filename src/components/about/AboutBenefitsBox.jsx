const AboutBenefitsBox = ({ title, description }) => {
  return (
    <div className="about-benefits-box">
      <h5 className="text-neon font-semibold">{title}</h5>
      <p className="text-rich dark:text-alice font-medium transition-all ease-in-out duration-700">
        {description}
      </p>
    </div>
  );
};

export default AboutBenefitsBox;
