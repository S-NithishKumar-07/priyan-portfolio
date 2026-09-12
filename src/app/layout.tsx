import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shanmuga Priyan B | Python Developer & ML Enthusiast",
  description: "Personal portfolio of Shanmuga Priyan B, an MCA Student, Python Developer, and Machine Learning Enthusiast based in Tamil Nadu, India.",
  keywords: ["Shanmuga Priyan B", "Portfolio", "Python Developer", "Machine Learning", "MCA", "Web Developer", "Tamil Nadu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#0066cc]/20">
        {children}
      </body>
    </html>
  );
}
