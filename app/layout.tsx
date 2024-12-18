import "./globals.css";
import { Space_Grotesk, Archivo, Poppins } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Manggala Putra - Architect",
  description: "Stunning architectural designs from Bali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${archivo.variable} ${poppins.variable} font-poppins bg-stone-100`}
      >
        {children}
      </body>
    </html>
  );
}
