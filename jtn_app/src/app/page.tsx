"use client";
import { HomeBox } from "./page.styled";
import { useState } from "react";
import { BandLogo } from "@/components/BandLogo";
import { SpotifyComponent } from "@/components/SpotifyComponent";
import { BandImage } from "@/components/BandImage";
import { Footer } from "@/components/Footer";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  const [$isOpen, setIsOpen] = useState(false);

  setTimeout(() => {
    setIsOpen(true);
  }, 500);

  return (
    <div className="flex overflow-y-auto">
      <BandLogo />
      <div
        className={`flex-col z-1 transition-opacity ease-in duration-500 ${
          $isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <HomeBox>
          <div className="flex flex-col max-w-[1700px] w-full overflow-x-hidden">
            <BandImage url="/graphics/JTN_main.jpg" priority />
          </div>
          <SpotifyComponent />
          <SocialMedia />
          <div className="flex flex-col max-w-[1700px] w-full mb-[1px] overflow-x-hidden">
            <BandImage url="/graphics/JTN_asbest.jpg" />
          </div>
          <div className="flex flex-col max-w-[1700px] w-full mb-[1px]overflow-x-hidden">
            <BandImage url="/graphics/JTN_minde.jpg" />
          </div>
        </HomeBox>
        <Footer />
      </div>
    </div>
  );
}
