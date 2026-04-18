import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Eona Labs — Intelligent Systems for Modern Businesses",
  description: "We design AI, automation and Web3 systems that scale your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
