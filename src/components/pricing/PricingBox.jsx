import { pricingAnimations } from '../../database/animations.js';
import { motion } from 'framer-motion';

const PricingBox = ({
  borderColor,
  textColor,
  hoverBg,
  title,
  valueMonth,
  initialSetup,
  themedCustom,
  botIntegration,
  botCount,
  sectorTools,
  fullPrice,
  delay
}) => {
  return (
    <motion.div
      {...pricingAnimations.growUp(delay)}
      className={`bg-aliceBlue dark:bg-black w-full h-[450px] sm:w-[320px] sm:h-[480px] py-4 rounded-[4px] border-[2px] ${borderColor} flex flex-col justify-around items-center shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)]`}
    >
      <h4 className={`${textColor} font-semibold mb-2`}>{title}</h4>

      <div className='w-[90%] flex gap-x-4 items-center justify-between'>
        <h6 className='text-rich dark:text-alice font-semibold'>
          Ongoing Support
        </h6>
        <h6 className={`${textColor} font-semibold`}>${valueMonth}/Month</h6>
      </div>
      <div className='w-[90%] flex flex-col gap-y-1 items-center'>
        <div className='w-full bg-alice dark:bg-jet p-[0.25rem] rounded flex gap-x-5 items-center justify-between'>
          <p className='text-rich dark:text-alice font-semibold'>
            Initial Setup{' '}
          </p>
          <p className='text-rich dark:text-alice font-semibold'>
            ${initialSetup}
          </p>
        </div>
        <div className='w-full bg-alice dark:bg-jet p-[0.25rem] rounded flex gap-x-5 items-center justify-between'>
          <p className='text-rich dark:text-alice font-semibold'>
            Themed Customizations
          </p>
          <p className='text-rich dark:text-alice font-semibold'>
            ${themedCustom}
          </p>
        </div>
        <div className='w-full bg-alice dark:bg-jet p-[0.25rem] rounded flex gap-x-5 items-center justify-between'>
          <p className='text-rich dark:text-alice font-semibold'>
            Bot Integration - {botCount}
          </p>
          <p className='text-rich dark:text-alice font-semibold'>
            ${botIntegration}
          </p>
        </div>
        <div className='w-full bg-alice dark:bg-jet p-[0.25rem] rounded flex gap-x-5 items-center justify-between'>
          <p className='text-rich dark:text-alice font-semibold'>
            Sector-Specific Tools
          </p>
          <p className='text-rich dark:text-alice font-semibold'>
            ${sectorTools}
          </p>
        </div>
      </div>
      <div className='flex gap-x-5'>
        <h6 className='text-rich dark:text-alice font-semibold'>Full Price</h6>
        <h6 className={`${textColor} font-semibold`}>${fullPrice}</h6>
      </div>
      <div className='flex flex-col gap-y-3'>
        <button
          className={`${textColor} font-semibold p-[0.25rem_0.5rem] border-[2px] ${borderColor} rounded-[8px] hover:text-alice ${hoverBg} hover:scale-[1.05] transition-all ease-in duration-300`}
        >
          Subscribe to Plan
        </button>
      </div>
    </motion.div>
  );
};

export default PricingBox;
