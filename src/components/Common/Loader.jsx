"use client";
import { useState, useEffect } from "react";
import loadingPace from "@/common/loadingPace";

function LoadingScreen() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      if (typeof Pace !== "undefined") loadingPace();
    }, 3000); // Close the loader after 3 seconds (adjust as needed)

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <>
      {showLoader && (
        <div className="hideX">
          <div id="preloader"></div>

          <div className="loading">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
          <div className="loading loading-bottom">
            <span>
              <img src="/img/Binance.png" alt="" />
            </span>
            <span>
              <img src="/img/Bitget.png" alt="" />
            </span>
            <span>
              <img src="/img/ByBit.png" alt="" />
            </span>
            <span>
              <img src="/img/Gate.png" alt="" />
            </span>
            <span>
              <img src="/img/Kucoin.png" alt="" />
            </span>
            <span>
              <img src="/img/HTX.png" alt="" />
            </span>
            <span>
              <img src="/img/Mexc.png" alt="" />
            </span>
            <span>
              <img src="/img/OKX.png" alt="" />
            </span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}
    </>
  );
}

export default LoadingScreen;
