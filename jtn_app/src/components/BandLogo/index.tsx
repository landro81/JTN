import Image from "next/image";

export const BandLogo = () => (
  <div className="flex z-50 absolute right-[-6px] top-[-25px] justify-end w-[150px] sm:w-[200px] md:min-w-[300px] lg:min-w-[400px] sm:top-[-34px] md:top-[-50px] lg:top-[-68px]">
    <Image
      src={"/graphics/JTN_logo.png"}
      alt="Logo Jahn Terje Nilsen og gjengen"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      priority
    />
  </div>
);
