import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/HomeNavbar";
import Header from "@/components/Headers/Header4";
import Services from "@/components/Services/Services3";
import Clients from "@/components/Clients/Clients1";
import Footer from "@/components/Common/Footer";
import AboutUs from "@/components/AboutUs/AboutUs2";
import Works from "@/components/Works/Works1";
import Numbers from "@/components/Numbers/Numbers1";
import Blogs from "@/components/Blogs/Blogs2";
import Video from "@/components/Others/Video";
import CallToAction from "@/components/Others/CallToAction";

export const metadata = {
  title: "Shopcek",
};

export default function Home5() {
  return (
    <>
      <Loading />
      <Navbar />
      <Header />
      <AboutUs />
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
