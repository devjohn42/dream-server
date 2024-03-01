import PageTitle from '../components/global/PageTitle';
import PageDescription from '../components/global/PageDescription';
import PageImage from '../components/global/PageImage';
import AboutInfoContainer from '../components/about/AboutInfoContainer';
import AboutBenefitsContainer from '../components/about/AboutBenefitsContainer';

const About = () => {
  return (
    <div className="w-full min-h-screen py-36 lg:pt-40 flex flex-col gap-y-24 md:gap-y-36 lg:gap-y-44 justify-center sm:items-center">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="w-[90%] lg:w-[600px] flex flex-col items-start md:items-center lg:items-start">
          <PageTitle title={'About Us'} />
          <PageDescription
            description={`Your ultimate destination for Discord server customizations and
      specialized services. We believe in the power of online communication and
      building vibrant communities. With a passionate and dedicated team we are
      here to take your Discord experience to new heights.`}
          />
        </div>
        <PageImage src={'/about.png'} />
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
