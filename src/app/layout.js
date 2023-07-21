import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Street Tech Bros",
  description: "Micro Franchise",
  // icons: {
  //   icon: { url: "/favicon.ico", type: "image/ico" },
  //   shortcut: { url: "/favicon.ico", type: "image/ico" },
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <div className="navContainer">
              <Navbar />
            </div>
            <div className="bodyContainer">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
