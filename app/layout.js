import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Le Petit Soap",
  description:
    "Artisan Soaps Crafted with Love - All natural, handmade bath and body products inspired by traditional Provence soap-making techniques",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  Graph: {
    title: "Le Petit Soap - Artisan Soaps Crafted with Love",
    description:
      "All natural, handmade bath and body products inspired by traditional Provence soap-making techniques",
    url: "https://lepetit.com",
    siteName: "Le Petit Soap",
    images: [
      {
        url: "/lepetit-logo.png",
        width: 1200,
        height: 630,
        alt: "Le Petit Soap - Artisan Natural Soaps",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Petit Soap - Artisan Soaps Crafted with Love",
    description:
      "All natural, handmade bath and body products inspired by traditional Provence soap-making techniques",
    images: ["/lepetit-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
