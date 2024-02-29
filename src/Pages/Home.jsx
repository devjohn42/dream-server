import Title from '../components/home/Title';
import Subtitle from '../components/home/Subtitle';

const Home = () => {
  return (
    <div className="w-full min-h-screen pl-9 sm:pl-0 sm:px-0 flex flex-col justify-center sm:items-center">
      <Title />
      <Subtitle />
    </div>
  );
};

export default Home;
