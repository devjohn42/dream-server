import { servicesIncluded } from '../../database/services';
import ServiceIncludedBox from './ServiceIncludedBox';

const ServiceIncludedContainer = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-10">
      <h2 className="text-neon font-semibold">Our Services Include</h2>
      <div className="flex flex-col gap-y-8 items-center">
        {servicesIncluded.map((servicesIncluded) => {
          return (
            <ServiceIncludedBox
              key={servicesIncluded.title}
              icon={servicesIncluded.icon}
              title={servicesIncluded.title}
              description={servicesIncluded.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServiceIncludedContainer;
