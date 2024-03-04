import { pricing } from '../../database/pricing';
import PricingBox from './PricingBox';
const PricingContainer = () => {
  return (
    <div className="w-full mb-36 lg:mb-40 flex flex-col items-center gap-y-20">
      {pricing.map((planContent, index) => {
        return (
          <div key={index} className="flex flex-col gap-y-10 items-center justify-center">
            <h3 className="w-[80%] sm:w-full text-neon text-center font-semibold">
              {planContent.pricingTitle}
            </h3>
            <div className='className="w-full flex flex-col lg:flex-row gap-6 items-center"'>
              {planContent.pricingPlans.map((plan, index) => {
                return (
                  <PricingBox
                    key={index}
                    borderColor={plan.borderColor}
                    textColor={plan.textColor}
                    hoverBg={plan.hoverBg}
                    title={plan.plan}
                    valueMonth={plan.valueMonth}
                    initialSetup={plan.initialSetup}
                    themedCustom={plan.themedCustom}
                    botIntegration={plan.botIntegration}
                    botCount={index + 1 + index}
                    sectorTools={plan.sectorTools}
                    fullPrice={plan.fullPrice}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingContainer;
