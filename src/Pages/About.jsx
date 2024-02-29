import AboutTitle from '../components/about/AboutTitle';
import AboutDescription from '../components/about/AboutDescription';
import AboutImage from '../components/about/AboutImage';
import AboutInfoContainer from '../components/about/AboutInfoContainer';
import AboutBenefitsContainer from '../components/about/AboutBenefitsContainer';

const About = () => {
  return (
    <div className="about-section">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="w-[90%] lg:w-[600px]">
          <AboutTitle />
          <AboutDescription />
        </div>
        <AboutImage />
      </div>
      <AboutInfoContainer />
      <AboutBenefitsContainer />
      <div className="w-full xl:w-[1000px] flex items-center justify-center">
        <h5 className="w-[90%] text-rich dark:text-alice font-medium text-center transition-all ease-in-out duration-700">
          Join us on the journey to create memorable online communities. We
          transform Discord servers with passion, expertise, and an unwavering
          commitment to excellence. Contact us today and discover how we can
          take your Discord experience to the next level!
        </h5>
      </div>
    </div>
  );
};

export default About;
