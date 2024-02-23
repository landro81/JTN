import { Spotify } from "react-spotify-embed";

export const SpotifyComponent = () => (
  <div className="flex flex-col items-center justify-center mt-6 mb-4">
    <div className="flex flex-col items-center justify-center">
      <Spotify
        width={"350px"}
        link="https://open.spotify.com/track/4QZ1uIhEYjY680zddbaJP8?si=00bb496b9e5c4f47"
      />
    </div>
    <div className="flex flex-col items-center justify-center mb-4 mt-4">
      <Spotify
        wide
        width={"350px"}
        link="https://open.spotify.com/track/2ptdRghyA5p4uiQphX3WEN?si=7a49facba3c74903"
      />
    </div>
    <div className="flex flex-col items-center justify-center">
      <Spotify
        wide
        width={"350px"}
        link="https://open.spotify.com/track/7K3HrZJlOwZ5b8iI7SefKK?si=070cf91fa11f4477"
      />
    </div>
  </div>
);
