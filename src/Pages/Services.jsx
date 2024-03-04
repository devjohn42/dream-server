import PageTitle from '../components/global/PageTitle';
import PageDescription from '../components/global/PageDescription';
import PageImage from '../components/global/PageImage';
import ServiceOfferedContainer from '../components/services/ServiceOfferedContainer';
import ServiceIncludedContainer from '../components/services/ServiceIncludedContainer';

const Services = () => {
  return (
    <div className="w-full min-h-screen pb-10 lg:pt-[94px] flex flex-col justify-center sm:items-center">
      <div className="w-full py-36 lg:py-40 flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="w-[90%] lg:w-[600px] flex flex-col items-start md:items-center lg:items-start">
          <PageTitle title={'Our Services'} />
          <PageDescription
            description={`
            We are committed to providing specialized solutions for custom server creation, 
            recognizing the distinct needs of online communication in each sector. 
            Explore our services dedicated to schools, businesses, and gaming communities 
            to enhance your Discord experience.`}
          />
        </div>
        <PageImage src={'/services.png'} />
      </div>
      <ServiceOfferedContainer />
      <ServiceIncludedContainer />
    </div>
  );
};

export default Services;
