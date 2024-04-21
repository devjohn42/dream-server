import { aboutAnimations } from '../../database/animations.js';
import { motion } from 'framer-motion';

const AboutBenefitsBox = ({ title, description, delay }) => {
  return (
    <motion.div
      {...aboutAnimations.growUp(delay)}
      className='about-benefits-box'
    >
      <h5 className='text-neon font-semibold'>{title}</h5>
      <p className='text-rich dark:text-alice font-medium'>{description}</p>
    </motion.div>
  );
};

export default AboutBenefitsBox;
