import { Spotify } from "react-spotify-embed";

export const SpotifyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-3 mb-7">
      <Spotify
        width={"350px"}
        link="https://open.spotify.com/album/1lvGzyBSCeUl7J0Cs40Fn0?si=6y_V0IDKRHG9f1VkN65JSQ&nd=1"
      />
    </div>
  );
};
