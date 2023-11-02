import Image from "next/image";
import { useState } from "react";

interface Props {
  url: string;
  priority?: boolean;
}

export const BandImage = ({ url, priority = false }: Props) => {
  // const [className, setClassName] = useState("blur");

  return (
    <div className="flex w-full min-h-[150px] h-auto">
      <Image
        // priority={priority}
        // loading={priority ? "eager" : "lazy"}
        src={url}
        alt="JTN"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        // className={className}
        // onLoad={() => setClassName("blur-none")}
        blurDataURL="/graphics/placeholder.png"
        placeholder="blur"
      />
      ´{" "}
    </div>
  );
};
