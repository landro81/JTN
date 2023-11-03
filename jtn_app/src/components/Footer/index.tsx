import Link from "next/link";
import Typography from "../Typography";
import { TextResources } from "@/assets/text";

export const Footer = () => (
  <div className="box-border w-full flex flex-col items-center justify-center h-[120px] bg-white lg:h-[140px] tracking-tight mt-auto overflow-x-hidden">
    <Typography color="#c3c3c3" variant="Bold">
      {TextResources.BAND_NAME}
    </Typography>
    <Typography color="#c3c3c3" variant="Bold">
      {TextResources.COPYRIGHT}
    </Typography>
    <Link target="_blank" href={"https://www.instagram.com/jarlehm/"}>
      <Typography variant="Description" color="#c3c3c3">
        {TextResources.PHOTOGRAPHER_NAME}
      </Typography>
    </Link>
    <Link target="_blank" href={"https://www.instagram.com/herrlandro/"}>
      <Typography variant="Description" color="#c3c3c3">
        {TextResources.DEV_NAME}
      </Typography>
    </Link>
  </div>
);
