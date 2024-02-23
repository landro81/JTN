import Image from "next/image";
import Link from "next/link";

export const SocialMedia = () => (
  <div className="flex space-x-3 items-center justify-center z-50 absolute top-2 left-2">
    <Link
      href={"https://www.instagram.com/jahnterjenilsen_og_gjengen/"}
      target="_blank"
      rel="noopener"
    >
      <Image
        src={"/graphics/instagram.png"}
        alt="instagram"
        width={25}
        height={25}
      />
    </Link>
    <Link
      href={"https://www.tiktok.com/@jtn.og.gjengen"}
      target="_blank"
      rel="noopener"
    >
      <Image src={"/graphics/tiktok.png"} alt="tiktok" width={25} height={25} />
    </Link>
    <Link
      href={"https://www.youtube.com/watch?v=6aZHAGvqBU4"}
      target="_blank"
      rel="noopener"
    >
      <Image
        src={"/graphics/youtube.png"}
        alt="tiktok"
        width={25}
        height={25}
      />
    </Link>
    <Link
      href={"https://listen.tidal.com/artist/43362721"}
      target="_blank"
      rel="noopener"
    >
      <Image src={"/graphics/tidal.png"} alt="tidal" width={25} height={25} />
    </Link>
    <Link
      href={
        "https://music.apple.com/no/artist/jahn-terje-nilsen-gjengen/1714262479"
      }
      target="_blank"
      rel="noopener"
    >
      <Image src={"/graphics/apple.png"} alt="apple" width={24} height={24} />
    </Link>

    <Link
      href={"https://open.spotify.com/artist/4Po93MJp7T5W6knzA13UF8"}
      target="_blank"
      rel="noopener"
    >
      <Image
        src={"/graphics/spotify.svg"}
        alt="spotify"
        width={25}
        height={25}
      />
    </Link>
  </div>
);
