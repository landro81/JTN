import { Spotify } from "react-spotify-embed";

export const SpotifyComponent = () => (
  <>
    <div className="flex flex-col items-center justify-center mt-7">
      <Spotify
        wide
        width={"350px"}
        link="https://open.spotify.com/track/2ptdRghyA5p4uiQphX3WEN?si=7a49facba3c74903"
      />
    </div>
    <div className="flex flex-col items-center justify-center mb-7 sm:mt-4 md:mt-4">
      <Spotify
        wide
        width={"350px"}
        link="https://open.spotify.com/track/7K3HrZJlOwZ5b8iI7SefKK?si=070cf91fa11f4477"
      />
    </div>
  </>
);
