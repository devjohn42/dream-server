import { servicesIncluded } from '../../database/services';
import ServiceIncludedBox from './ServiceIncludedBox';

import { defaultaAnimations } from '../../database/animations';
import { motion } from 'framer-motion';

const ServiceIncludedContainer = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-10'>
      <motion.div {...defaultaAnimations.slideLeft}>
        <h2 className='text-neon font-semibold'>Our Services Include</h2>
      </motion.div>
      <div className='flex flex-col gap-y-8 items-center'>
        {servicesIncluded.map((servicesIncluded, index = 1) => {
          return (
            <ServiceIncludedBox
              key={servicesIncluded.title}
              icon={servicesIncluded.icon}
              title={servicesIncluded.title}
              description={servicesIncluded.description}
              delay={index / 3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServiceIncludedContainer;
