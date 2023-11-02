import { TextResources } from "@/assets/text";

export const SpotifyComponent = () => {
  return (
    <div className="flex flex-col p-5 items-center justify-center">
      <div className="flex bg-[#ffff00] px-2 mt-[-40px] md:mt-[-55px] lg:mt-[-60px] xl:mt-[-58px] ml-[-90px] md:ml-[-230px] h-[auto] max-h-[43px] items-center">
        <p className="flex text-[1em] md:text-[1.5em] lg:text-[2.5em] xl:text-[3em] tracking-tightest font-sans">
          {TextResources.NEWS_SINGLE}
        </p>
      </div>
      {/* <div className="flex w-full items-center justify-center mt-3">
        <Spotify link="https://open.spotify.com/track/6XcoiOYiNbIxzpt8WRxq8Z?si=aaac09b3aa944713" />
      </div> */}
    </div>
  );
};
