import React from "react";
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/HomeNavbar";
import Services from "@/components/Services/Services3";
import Clients from "@/components/Clients/Clients1";
import Footer from "@/components/Common/HomeFooter";
import AboutUs from "@/components/AboutUs/AboutUs2";
import Works from "@/components/Works/Works1";
import Numbers from "@/components/Numbers/Numbers1";
import Blogs from "@/components/Blogs/Blogs2";
import Video from "@/components/Others/Video";
import CallToAction from "@/components/Others/CallToAction";
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Header from "@/components/Headers/HomeHeader";
import MinimalArea from "@/components/Others/MinimalArea1";

export const metadata = {
  title: "Shopcek",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
      "/css/dark.css",
    ]),
  },
};

export default function Home5() {
  return (
    <>
      <Loading />
      <Navbar />
      <Header />
      <AboutUs />
      <MinimalArea />
      <Services />
      <Works />
      <Numbers />
      <Video />
      <Clients theme="dark" />
      <Blogs />
      <CallToAction />
      <Footer />
    </>
  );
}
