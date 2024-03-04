const ServiceIncludedBox = ({ icon, title, description }) => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[900px] bg-aliceBlue dark:bg-black p-[1rem_1.5rem] rounded-[4px] border-neon border-[2px] shadow-[1px_1px_8px_2px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-x-5 mb-4">
        <div className="hidden md:flex">{icon}</div>
        <h5 className="text-neon font-semibold">{title}</h5>
      </div>
      <p className="text-rich dark:text-alice">{description}</p>
    </div>
  );
};

export default ServiceIncludedBox;
