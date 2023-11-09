import Image from "next/image";
import Link from "next/link";

export const SocialMedia = () => {
  return (
    <div className="z-50 absolute top-2 left-2 lg:left-4 lg:top-4 flex space-x-2 lg:space-x-2.5">
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
        href={"https://open.spotify.com/artist/4Po93MJp7T5W6knzA13UF8"}
        target="_blank"
        rel="noopener"
      >
        <Image
          src={"/graphics/spotify.svg"}
          alt="instagram"
          width={25}
          height={25}
        />
      </Link>
    </div>
  );
};
