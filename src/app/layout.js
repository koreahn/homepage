import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
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
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
