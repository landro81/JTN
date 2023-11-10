import { Spotify } from "react-spotify-embed";

export const SpotifyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-3 mb-7">
      <Spotify
        width={"350px"}
        link="https://open.spotify.com/track/7K3HrZJlOwZ5b8iI7SefKK?si=070cf91fa11f4477"
      />
    </div>
  );
};
