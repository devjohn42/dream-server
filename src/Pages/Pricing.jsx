import PageDescription from '../components/global/PageDescription';
import PageImage from '../components/global/PageImage';
import PageTitle from '../components/global/PageTitle';
import PricingContainer from '../components/pricing/PricingContainer';

const Pricing = () => {
  return (
    <div className="w-full min-h-screen pb-10 lg:pt-[94px] flex flex-col justify-center sm:items-center">
      <div className="w-full py-36 lg:py-40 flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="w-[90%] lg:w-[600px] flex flex-col gap-y-2 items-start md:items-center lg:items-start">
          <PageTitle title={'Prices and Plans'} />
          <PageDescription
            description={`We understand that different sectors have unique needs when it comes to 
              online communication. To cater to a diverse range of clients, we offer three distinct 
              pricing tiers for each of our specialized services. Explore our pricing plans below to 
              find the perfect fit for your requirements.`}
          />
        </div>
        <PageImage src={'/pricing.png'} />
      </div>
      <PricingContainer />
      <div className="w-full xl:w-[1000px] flex items-center justify-center">
        <h5 className="w-[90%] text-rich dark:text-alice font-medium text-center">
          If you have another type of server in mind, please contact us to discuss your ideas and
          begin the journey to have your own custom Discord Server. We are here to turn your vision
          into a unique virtual experience. Let&apos;s build something special together!
        </h5>
      </div>
    </div>
  );
};

export default Pricing;
