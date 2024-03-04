const PageImage = ({ src }) => {
  return (
    <div className="hidden md:flex w-[320px] lg:w-[350px] xl:w-[400px]">
      <img src={src} alt="" className="drop-shadow-[0px_0px_8px_rgba(0,0,0,0.5)]" />
    </div>
  );
};

export default PageImage;
