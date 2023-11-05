import Image from "next/image";

interface Props {
  url: string;
  priority?: boolean;
}

export const BandImage = ({ url, priority = false }: Props) => {
  return (
    <div className="flex w-full min-h-[150px] h-auto overflow-x-hidden">
      <Image
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        src={url}
        alt="Bandbilde Jahn Terje Nilsen og gjengen"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        blurDataURL="/graphics/placeholder.png"
        placeholder="blur"
      />
    </div>
  );
};
