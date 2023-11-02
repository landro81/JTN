import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jahn Terje Nilsen & Gjengen",
  description:
    "I utkanten av Bergens mangefasetterte musikkscene stikker nykommeren Jahn Terje Nilsen & Gjengen frem et frekt og freidig musikalsk åsyn. Husvarm i både rock, rap, i bedehus og på nattklubben, serveres innblikk i menneskesjelen og utsikter fra Ulriken.",
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
