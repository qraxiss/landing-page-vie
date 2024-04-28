"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import cardMouseEffect from "@/common/cardMouseEffect";

function Services3() {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);

  return (
    <>
      <div className="line"></div>
      <section id="features" className="feat sub-bg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  ADVANCED FEATURES
                </h6>
                <h3 className="wow color-font">
                  We Build, You Grow: <br /> Elevating Web3 Brands
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 items md-mb30">
              <div className="item wow fadeIn" data-wow-delay=".3s">
                <span className="icon">
                  <i className="ion-ios-monitor"></i>
                </span>
                <h5>
                  Exceptional <br /> UI/UX
                </h5>
                <p>
                  Creating more meaningful interaction with superior UI/UX
                  Design
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items active md-mb30">
              <div className="item wow fadeIn" data-wow-delay=".3s">
                <span className="icon">
                  <i className="ion-cube"></i>
                </span>

                <h5>Blockchain Integration</h5>
                <p>
                  Crypto payments and NFT receipts for each purchase ensure
                  transparency.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items sm-mb30">
              <div className="item wow fadeIn" data-wow-delay=".3s">
                <span className="icon">
                  <i className=" ion-ios-bolt-outline"></i>
                </span>
                <h5>
                  Gamified <br /> Loyalty
                </h5>
                <p>
                  Advanced loyalty program to increase sales and boost
                  engagement.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 items">
              <div className="item wow fadeIn" data-wow-delay=".3s">
                <span className="icon">
                  <i className="ion-ios-color-wand"></i>
                </span>
                <h5>Robust B2B Dashboard</h5>
                <p>Track sales, orders, and marketing effectiveness easily.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services3;
