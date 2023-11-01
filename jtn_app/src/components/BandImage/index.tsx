import Image from "next/image";

interface Props {
  url: string;
}

export const BandImage = ({ url }: Props) => {
  return (
    <div className="flex">
      <Image
        src={url}
        alt="JTN"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};
