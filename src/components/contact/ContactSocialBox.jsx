const ContactSocialBox = ({ icon }) => {
  return (
    <a
      href="#"
      className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-aliceBlue dark:bg-black flex items-center justify-center rounded shadow-[2px_2px_8px_2px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-aliceBlue/20 hover:dark:bg-[rgba(20,20,20,1)]"
    >
      {icon}
    </a>
  );
};

export default ContactSocialBox;
