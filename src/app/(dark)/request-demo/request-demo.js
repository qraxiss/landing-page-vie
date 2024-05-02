import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/HomeNavbar";
import Footer from "@/components/Common/HomeFooter";
import RequestDemoFrom from "@/components/RequestDemo/RequestDemoForm";
import RequestDemoHeader from "@/components/RequestDemo/RequestDemoHeader";

export const metadata = {
  title: "Shopcek | Request Demo",
};

export default function RequestDemo() {
  return (
    <>
      <Loading />
      <Navbar />
      <RequestDemoHeader />
      <div className="main-content">
        <RequestDemoFrom />
        <Footer hideBGCOLOR />
      </div>
    </>
  );
}
