import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Jatara Indian Kitchen",
  description: "Authentic Indian Flavors in Prosper, TX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.className}>
        {children}
      </body>
    </html>
  );
}
