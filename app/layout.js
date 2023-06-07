import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Providers from "./Components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeBird UIT",
  description: "Official Website of The Code Bird, Coding Club of UIT Burdwan",
  metadataBase: new URL("https://codebird.netlify.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      hi: "/hi",
      bn: "/bn",
    },
  },
  generator: "@ImKKingshuk",
  applicationName: "CodeBird UIT",
  referrer: "origin-when-cross-origin",
  keywords: [
    "The Code Bird",
    "CodeBird",
    "CodeBird UIT",
    "UIT BU",
    "CodeBird",
    "UIT Burdwan",
    "University Institute Of Technology, BU",
    "University Institute of Technology, The University of Burdwan",
    "University of Burdwan",
    "Burdwan University",
  ],
  authors: [{ name: "@ImKKingshuk", url: "https://github.com/ImKKingshuk" }],

  creator: "@ImKKingshuk",
  publisher: "@ImKKingshuk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
