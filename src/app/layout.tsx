import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import ReduxProvider from "@/redux/ReduxProvider";

const morabba = localFont({
  src: [
    {
      path: '../../public/fonts/Morabba/woff2/Morabba-Light.woff2',
      style: "normal",
      weight: "400",
    },
    {
      path: '../../public/fonts/Morabba/woff2/Morabba-Medium.woff2',
      style: "normal",
      weight: "500"
    },
    {
      path: '../../public/fonts/Morabba/woff2/Morabba-Bold.woff2',
      style: "normal",
      weight: "600",
    },

  ],
  variable: "--font-morabba",
  style: "normal",
  display: "swap",
});
const dana = localFont({
  src: [
    {
      path: '../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2',
      style: "normal",
      weight: "400",
    },
    {
      path: '../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2',
      style: "normal",
      weight: "500"
    },
    {
      path: '../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2',
      style: "normal",
      weight: "600",
    },

  ],
  variable: "--font-dana",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electro-Shop",
  description: "Electro-Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <ReduxProvider>
        <body
          className={` ${dana.variable}  ${morabba.variable} font-dana text-base text-[#2a322d] font-medium`}
        >
          {children}
          <ToastContainer rtl bodyClassName={"font-morabba"} autoClose={3000} />
        </body>
      </ReduxProvider>

    </html>
  );
}
