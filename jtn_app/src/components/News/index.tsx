import { TextResources } from "@/assets/text";
import Link from "next/link";
import Typography from "../Typography";

export const News = () => (
  <>
    <div className="flex bg-[#ffff00] px-2 mt-[-15px] md:mt-[-20px] lg:mt-[-30px] xl:mt-[-35px] ml-[-80px] md:ml-[-230px] h-[auto] max-h-[50px] items-center">
      <h1 className="flex text-[1.5em] md:text-[2em] lg:text-[3em] xl:text-[3em] tracking-tightest font-sans">
        {TextResources.NEWS_HEADER}
      </h1>
    </div>
    <div className="flex flex-col bg-[#ffff00] tracking-tight px-2 py-1 mt-[4px] max-w-[330px] md:max-w-[430px] lg:max-w-[500px] md:ml-[-110px]">
      <Typography variant="Body">{TextResources.NEWS_CONTENT}</Typography>
    </div>
    <div className="flex flex-col bg-[#ffff00] underline px-5 mt-[9px] ml-[-90px] md:ml-[-325px] lg:ml-[-425px] h-[auto] max-h-[50px] items-center">
      <Link
        href={"https://open.spotify.com/track/4QZ1uIhEYjY680zddbaJP8"}
        target="_blank"
        rel="noopener"
      >
        <h1 className="flex text-[1.1em] tracking-tighter font-sans">
          {TextResources.NEWS_SONG}
        </h1>
      </Link>
    </div>
  </>
);
