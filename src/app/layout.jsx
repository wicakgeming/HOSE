import Navbar from "../components/Navbar";
// import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "@/app/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
  
const font = Inter({  weight: '400', subsets: ["latin"]})

export const metadata = {
  title: "Hose",
  description: "Website Hose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${`${font.classname} bg-third`} antialiased min-h-screen`}asdas
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
