import Image from "next/image";

export const BandLogo = () => (
  <div className="flex z-50 absolute right-[-4px] 2xl:right-[10%] 3xl:right-[30%] top-[-24px] justify-end w-[150px] sm:w-[200px] md:min-w-[300px] lg:min-w-[400px]">
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
