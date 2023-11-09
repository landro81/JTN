import { TextResources } from "@/assets/text";

export const News = () => {
  return (
    <div className="flex bg-[#ffff00] px-2 mt-[-15px] md:mt-[-20px] lg:mt-[-30px] xl:mt-[-35px] ml-[-90px] md:ml-[-230px] h-[auto] max-h-[50px] items-center">
      <h1 className="flex text-[1.5em] md:text-[2em] lg:text-[3em] xl:text-[3em] tracking-tightest font-sans">
        {TextResources.NEWS_SINGLE}
      </h1>
    </div>
  );
};
