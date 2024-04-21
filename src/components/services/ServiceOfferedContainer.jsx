import { servicesOffered } from '../../database/services';
import ServiceOfferedBox from './ServiceOfferedBox';

const ServiceOfferedContainer = () => {
  return (
    <div className='w-full mb-36 lg:mb-40 flex flex-col items-center md:py-10'>
      {servicesOffered.map((serviceOffered, index) => {
        return (
          <ServiceOfferedBox
            key={serviceOffered.title}
            src={serviceOffered.imgSrc}
            title={serviceOffered.title}
            description={serviceOffered.description}
            imgDelay={index / 3}
            descriptionDelay={index / 3}
          />
        );
      })}
    </div>
  );
};

export default ServiceOfferedContainer;
