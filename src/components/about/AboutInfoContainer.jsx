import { about } from '../../database/about';
import AboutInfoContent from './AboutInfoContent';

const AboutInfoContainer = () => {
  return (
    <div className="w-full flex flex-col gap-y-14 items-center justify-center">
      {about.map((info) => {
        return (
          <AboutInfoContent
            key={info.title}
            title={info.title}
            description={info.description}
          />
        );
      })}
    </div>
  );
};

export default AboutInfoContainer;