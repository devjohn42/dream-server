import ContactForm from '../components/contact/ContactForm';
import ContactSocialBox from '../components/contact/ContactSocialBox';
import PageDescription from '../components/global/PageDescription';
import PageImage from '../components/global/PageImage';
import PageTitle from '../components/global/PageTitle';
import { FaDiscord, FaInstagram, FaLinkedin, FaReddit, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full min-h-screen pb-10 lg:pt-[94px] flex flex-col justify-center sm:items-center">
      <div className="w-full py-36 lg:py-40 flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="w-[90%] lg:w-[600px] flex flex-col gap-y-4 items-start md:items-center lg:items-start">
          <PageTitle title={'Contact Us'} />
          <PageDescription
            description={`If you have any inquiries or if you're interested, please feel free to 
              get in touch with us through our social media or via email. We're here to address all 
              your questions and discuss how we can meet your specific needs. We await your message 
              and are ready to start this conversation!`}
          />
          <div className="flex gap-x-3 sm:gap-x-5">
            <ContactSocialBox
              icon={<FaDiscord className="text-[1.65rem] sm:text-[1.85rem] text-neon" />}
            />
            <ContactSocialBox
              icon={<FaLinkedin className="text-[1.65rem] sm:text-[1.85rem] text-neon" />}
            />
            <ContactSocialBox
              icon={<FaInstagram className="text-[1.65rem] sm:text-[1.85rem] text-neon" />}
            />
            <ContactSocialBox
              icon={<FaTwitter className="text-[1.65rem] sm:text-[1.85rem] text-neon" />}
            />
            <ContactSocialBox
              icon={<FaReddit className="text-[1.65rem] sm:text-[1.85rem] text-neon" />}
            />
          </div>
        </div>
        <PageImage src={'/contact.png'} />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
