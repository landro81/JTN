import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jahn Terje Nilsen & Gjengen",
  description:
    "Som gatevant i Bergens mangefasetterte musikkscene stikker Jahn Terje Nilsen & Gjengen frem et frekt og freidig musikalsk åsyn.",
  authors: [
    {
      name: "Helge-Mikael Landro",
      url: "https://www.instagram.com/herrlandro/",
    },
    {
      name: "Jahn Terje Nilsen",
      url: "https://www.instagram.com/jtnilsen83/",
    },
    {
      name: "Jan-Christoph Cassel Noven",
      url: "https://www.instagram.com/jahnterjenilsen_og_gjengen/",
    },
    {
      name: "Jahn Terje Nilsen og Gjengen",
      url: "https://www.instagram.com/jahnterjenilsen_og_gjengen/",
    },
  ],
  keywords: [
    "Jahn Terje Nilsen & Gjengen, Jahn Terje Nilsen og Gjengen, Helge-Mikael Landro, Jan-Christoph Cassel Noven, Jahn Terje Nilsen, Eg ser du har lest, Mine grunner privat, Sammenkomst, Jahn T Loven, bergensrock, bergensrap",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
