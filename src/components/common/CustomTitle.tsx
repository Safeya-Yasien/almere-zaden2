const CustomTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="text-center mb-16">
      <h3
        className="text-black text-[40px] font-semibold capitalize text-center pt-8
        bg-[url('src/assets/images/title.png')] bg-no-repeat bg-top font-philosopher tracking-wide"
      >
        {title}
      </h3>

      <div
        className="uppercase text-center w-auto font-normal text-sm text-[#525252] tracking-[5px] inline-block relative
    before:content-[''] before:absolute before:bottom-0 before:top-0 before:-left-[50px] before:border-t before:border-t-[#d6d6d6] before:bg-[#d6d6d6] before:h-[1px] before:w-[30px] before:m-auto
    after:content-[''] after:absolute after:bottom-0 after:top-0 after:left-auto after:-right-[50px] after:border-t after:border-t-[#d6d6d6] after:bg-[#d6d6d6] after:h-[1px] after:w-[30px] after:m-auto"
      >
        {desc}
      </div>
    </div>
  );
};

export default CustomTitle;
