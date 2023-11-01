import { Spotify } from "react-spotify-embed";

export const SpotifyComponent = () => {
  return (
    <div className="flex flex-col p-5 items-center justify-center">
      <div className="flex bg-[#ffff00ff] px-9 mb-3 mt-[-62px] ml-[-85px]  md:ml-[-230px] h-[30px] items-center">
        <p className="flex text-[2em] tracking-tightest font-sans">
          ny singel ute nå!
        </p>
      </div>
      <div className="flex w-full items-center justify-center mt-3">
        <Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />
      </div>
    </div>
  );
};
