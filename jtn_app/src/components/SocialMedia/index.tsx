import Image from "next/image";
import Link from "next/link";

export const SocialMedia = () => {
  return (
    <div className="flex justify-end w-full max-w-[1280px] space-x-2 items-center justify-center mb-3 mt-[-20px]">
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
      <Image
        src={"/graphics/spotify.svg"}
        alt="spotify"
        width={25}
        height={25}
      />
    </div>
  );
};
