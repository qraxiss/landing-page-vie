import React from "react";
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/HomeNavbar";
import Services from "@/components/Services/Services3";
import Clients from "@/components/Clients/Clients1";
import Footer from "@/components/Common/HomeFooter";
import AboutUs from "@/components/AboutUs/AboutUs2";
import Works from "@/components/Works/Works1";
import Numbers from "@/components/Numbers/Numbers1";
import Video from "@/components/Others/Video";
import CallToAction from "@/components/Others/CallToAction";
import Header from "@/components/Headers/HomeHeader";
import MinimalArea from "@/components/Others/MinimalArea1";

export default function Home() {
  return (
    <>
      <Loading />
      <Navbar />
      <Header />
      {/* <AboutUs /> */}
      {/* <MinimalArea /> */}
      {/* <Services /> */}
      {/* <Works /> */}
      {/* <Numbers /> */}
      {/* <Video /> */}
      {/* <Clients theme="dark" /> */}
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </>
  );
}
