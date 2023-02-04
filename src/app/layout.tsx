import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/store/store";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Back from "@/components/Back";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Navbar></Navbar>

          {children}

          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
