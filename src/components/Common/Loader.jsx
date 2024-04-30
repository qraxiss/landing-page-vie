"use client"
import { useState, useEffect } from 'react';
import loadingPace from "@/common/loadingPace";

function LoadingScreen() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      if (typeof Pace !== 'undefined') loadingPace();
    }, 3000); // Close the loader after 3 seconds (adjust as needed)

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <>
      {showLoader && (
        <div className="hideX">
          <div className="loading">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
          <div id="preloader"></div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
