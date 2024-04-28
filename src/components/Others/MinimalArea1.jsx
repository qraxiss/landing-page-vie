"use client";
import React, { useEffect } from "react";
//= Scripts
import thumparallaxDown from "@/common/thumparallaxDown";

function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">B2C Platform Highlights</h4>
              <p className="wow txt" data-splitting>
                Discover exclusive items from top influencers and projects. Use
                crypto for purchases and enjoy discounts, global shipping, and
                24/7 support.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span>Exclusive Merchandise
                  </h6>
                  <p>
                    Find specially designed items from your favorite influencers
                    and projects on our platform.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span>Crypto Rewards
                  </h6>
                  <p>
                    Pay with crypto to receive discounts, manage
                    wallet-connected purchases, and track your rewards.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span>Global Accessibility
                  </h6>
                  <p>
                    Shop globally with items delivered from 12 centers
                    worldwide, supported by round-the-clock customer service.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinimalArea1;
