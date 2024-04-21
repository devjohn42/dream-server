import { aboutBenefits } from '../../database/about';
import AboutBenefitsBox from './AboutBenefitsBox';

const AboutBenefitsContainer = () => {
  return (
    <div className='w-full mb-36 lg:mb-40 flex flex-col gap-y-10 items-center'>
      <h3 className='text-neon font-semibold w-[90%] text-center'>
        Why Choose Dream Server
      </h3>
      <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
        {aboutBenefits.map((benefits, index) => {
          return (
            <AboutBenefitsBox
              key={benefits.title}
              title={benefits.title}
              description={benefits.description}
              delay={index / 2.5}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutBenefitsContainer;
