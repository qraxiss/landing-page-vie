"use client";
import particlesConfig from "@/config/particle-config";
import particlesBlackConfig from "@/config/pr-s-black";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Header4 = ({ sliderRef, blackStar }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">Web3 Merch</span>
                <br />
                <span className="w-900">

                  Brings <br /> Blockchain Fashion
                </span>
                <span className="color-font"> to Streets</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
        init={particlesInit}
      />

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header4;
