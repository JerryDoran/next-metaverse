export default function NewFeatures({ imgUrl, title, subtitle }) {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
        <img src={imgUrl} alt={title} />
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
        {subtitle}
      </p>
    </div>
  );
}
