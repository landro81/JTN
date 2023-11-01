import Image from "next/image";
import Link from "next/link";

export const SocialMedia = () => {
  return (
    <div className="flex justify-end w-full max-w-[1280px] mt-2 mr-4 xl:mr-0 space-x-2 items-center">
      <Link
        href={"https://www.instagram.com/jahnterjenilsen_og_gjengen/"}
        target="_blank"
      >
        <Image src={"/instagram.png"} alt="instagram" width={25} height={25} />
      </Link>
      <Link
        href={"https://www.instagram.com/jahnterjenilsen_og_gjengen/"}
        target="_blank"
      >
        <Image src={"/spotify.svg"} alt="spotify" width={25} height={25} />
      </Link>
    </div>
  );
};
