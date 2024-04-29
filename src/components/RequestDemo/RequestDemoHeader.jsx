'use client';
import React, { useCallback, useEffect, useState } from 'react';
//= Static Data
import requestDemoHeaderData from "@/data/request-demo.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from '@/config/particle-config';

function RequestDemoHeader() {
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

  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  }, []);

  return (
    <header className="pages-header circle-bg valign position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="color-font mb-10 fw-700">
                  {requestDemoHeaderData.title.first}
                </h1>
                <p>{requestDemoHeaderData.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {scrollPosition < 600 && (
        <Particles
          id="particles-js"
          options={particlesConfig}
          init={particlesInit}
        />
      )}
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  )
}

export default RequestDemoHeader