import Link from "next/link";
import Typography from "../Typography";
import { TextResources } from "@/assets/text";
import { Color } from "@/assets/color";

export const Footer = () => {
  const color = Color.JTN_GREY_TEXT;

  return (
    <div className="box-border w-full flex flex-col items-center justify-center h-[120px] bg-white lg:h-[140px] tracking-tight mt-auto overflow-x-hidden max-w-[1700px]">
      <Typography color={color} variant="Bold">
        {TextResources.BAND_NAME}
      </Typography>
      <Typography color={color} variant="Bold">
        {TextResources.COPYRIGHT}
      </Typography>
      <Link
        target="_blank"
        href={"https://www.instagram.com/jarlehm/"}
        rel="noopener"
      >
        <Typography variant="Description" color={color}>
          {TextResources.PHOTOGRAPHER_NAME}
        </Typography>
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/herrlandro/"}
        rel="noopener"
      >
        <Typography variant="Description" color={color}>
          {TextResources.DEV_NAME}
        </Typography>
      </Link>
    </div>
  );
};
