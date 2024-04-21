import Title from '../components/home/Title';
import Subtitle from '../components/home/Subtitle';
import { defaultaAnimations } from '../database/animations.js';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      {...defaultaAnimations.bottom}
      className='w-full min-h-screen pl-9 sm:pl-0 sm:px-0 flex flex-col justify-center sm:items-center'
    >
      <Title />
      <Subtitle />
    </motion.div>
  );
};

export default Home;
