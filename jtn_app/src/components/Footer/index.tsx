import Link from "next/link";
import Typography from "../Typography";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90px] tracking-tight">
      <Typography color="#e5e5e5" variant="Bold">
        Jahn Terje Nilsen & Gjengen
      </Typography>
      <Typography color="#e5e5e5" variant="Bold">
        © 2023
      </Typography>
      <Link target="_blank" href={"https://www.instagram.com/herrlandro/"}>
        <Typography variant="Description" color="#e5e5e5">
          Designet av Helge-Mikael Landro
        </Typography>
      </Link>
    </div>
  );
};
