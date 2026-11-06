import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malinowy Zakątek — praca i noclegi w Strożewie",
  description: "Rodzinna plantacja malin w Strożewie. Dołącz do zbiorów i zapytaj o zakwaterowanie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
