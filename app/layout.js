import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rana's Portfolio",
  description: "This is Rana's portfolio website, there are all about and skills are shown.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
        <Nav />
        <main className="main-tag">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
