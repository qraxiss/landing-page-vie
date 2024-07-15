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
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-10 ">
            <div className="cont text-center">
              <h1>
                <span className="color-font w-900">Get Ready for</span>
                <span className="color-font w-900">Onchain Shopping</span>
              </h1>
            </div>
          </div>
          <div className="header-card d-flex flex-column justify-content-center align-items-center">
            <p style={{marginTop: 4, paddingBlock: 10 }}>
              We are launching the Shopcek Earniverse as an exciting Telegram mini-app <br /> to reward our community before our <br /> e-commerce
              platform goes live and our token is listed on tier-1 exchanges.
            </p>
            <p style={{marginTop: 12 }}>
            Dive into the fun, stay engaged and unlock awesome rewards
            </p>
            <button className="card-button"> Start Earning</button>
          </div>
          <div className="footer-card d-flex flex-column justify-content-center align-items-center">
            <p style={{ fontSize: 14, opacity: 0.5, fontWeight: 400 }}>
            Shopcek © 2024
            </p>
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
      {/* <div
        className="line bottom left"
        style={
          {
            // bottom: "3em",
          }
        }
      ></div> */}
    </header>
  );
};

export default Header4;