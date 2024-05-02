import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import NavbarFullMenu from "@/components/Common/NavbarFullMenu";
import ShowcaseGrid from "@/components/Showcases/ShowcaseGrid";

export const metadata = {
  title: "Shopcek - Showcase 3 Dark",
};

export default function Showcase3Page() {
  return (
    <>
      <Loading />
      <NavbarFullMenu />
      <ShowcaseGrid />
    </>
  );
}
