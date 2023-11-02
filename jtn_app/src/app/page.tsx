"use client";
import store from "../redux/store";
import { Provider } from "react-redux";
import { HomeBox } from "./page.styled";
import { Spinner } from "@/components/Spinner";
import { useEffect, useState } from "react";
import { BandLogo } from "@/components/BandLogo";
import { SpotifyComponent } from "@/components/SpotifyComponent";
import { BandImage } from "@/components/BandImage";
import { Footer } from "@/components/Footer";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <Provider store={store}>
      {isLoading ? (
        <div className="flex justify-center w-full h-[100vh]">
          <Spinner />
        </div>
      ) : (
        <>
          <HomeBox>
            <div className="flex flex-col max-w-[1700px] w-full">
              <BandLogo />
              <BandImage url="/graphics/JTN_main.jpg" />
            </div>
            <SpotifyComponent />
            <SocialMedia />
            <div className="flex flex-col max-w-[1700px] w-full mb-[1px]">
              <BandImage url="/graphics/JTN_asbest.jpg" />
            </div>
            <div className="flex flex-col max-w-[1700px] w-full mb-[1px]">
              <BandImage url="/graphics/JTN_minde.jpg" />
            </div>
          </HomeBox>
          <Footer />
        </>
      )}
    </Provider>
  );
}
