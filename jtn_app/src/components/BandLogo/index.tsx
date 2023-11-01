import Image from "next/image";

export const BandLogo = () => {
  return (
    <div className="flex absolute right-[-8px] 2xl:right-[10%] 3xl:right-[30%] top-[-34px] justify-end w-[150px] sm:w-[200px] md:min-w-[300px] lg:min-w-[400px] ">
      <Image
        src={"/JTN_3.png"}
        alt="JTNlogo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
