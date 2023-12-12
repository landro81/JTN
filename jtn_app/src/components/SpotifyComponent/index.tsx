import { Spotify } from "react-spotify-embed";

export const SpotifyComponent = () => (
  <div className="flex flex-col items-center justify-center my-9">
    <Spotify
      wide
      width={"350px"}
      link="https://open.spotify.com/track/7K3HrZJlOwZ5b8iI7SefKK?si=070cf91fa11f4477"
    />
  </div>
);
