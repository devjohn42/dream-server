import { aboutBenefits } from '../../database/about';
import AboutBenefitsBox from './AboutBenefitsBox';

const AboutBenefitsContainer = () => {
  return (
    <div className="w-full flex flex-col gap-y-5 md:gap-y-10 items-center">
      <h3 className="text-neon font-semibold w-[90%] text-center">
        Why Choose Dream Server
      </h3>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
        {aboutBenefits.map((benefits) => {
          return (
            <AboutBenefitsBox
              key={benefits.title}
              title={benefits.title}
              description={benefits.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutBenefitsContainer;
