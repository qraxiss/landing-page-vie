"use client";
import particlesConfig from "@/config/particle-config";
import particlesBlackConfig from "@/config/pr-s-black";
import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Header4 = ({ sliderRef, blackStar }) => {
  const [scrollPosition, setScrollPosition] = useState(null);
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span>Brings</span>
                <span className="color-font w-900">Blockchain Fashion</span>
                <span>to Street</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {scrollPosition < 600 && (
        <Particles
          id="particles-js"
          options={blackStar ? particlesBlackConfig : particlesConfig}
          init={particlesInit}
        />
      )}

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header4;
