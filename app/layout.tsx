import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Grand Ayo Festival",
  description:
    "A premium cultural website for The Grand Ayo Festival, celebrating Ayò Ọlópón as a living Yoruba heritage game.",
  keywords: [
    "Ayo game",
    "Ayo Olopon",
    "Ayò Ọlópón",
    "Opon Ayo",
    "Ọpọn Ayò",
    "Yoruba board game",
    "traditional Yoruba game",
    "Nigerian traditional game",
    "Yoruba culture",
    "Yoruba festival",
    "Ayo festival Nigeria",
    "mancala Nigeria",
    "African board game",
    "Yoruba heritage",
    "Yoruba strategy game",
    "Yoruba cultural event",
    "traditional games in Nigeria",
    "Ayo tournament",
    "The Grand Ayo Festival",
    "Àjọyọ̀ Nlá Ayò Ọ̀pọ́n"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
