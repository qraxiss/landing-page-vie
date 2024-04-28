import React from "react";

const icon = (social) => `/img/social/white/${social}.png`;

function HomeFooter({ hideBGCOLOR }) {
  return (
    <div className="footer-wrapper">
      <footer className={`footer ${!hideBGCOLOR ? "sub-bg" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div
                  className="logo-footer"
                  style={{
                    width: "280px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="footer-logo bord-gr">
                    <img
                      className="logo-icon"
                      src="/img/logo-icon.svg"
                      alt=""
                    />
                    <img src="/img/logo-dark.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="item md-mb50">
                <table>
                  <thead>
                    <tr>
                      <th>MENU</th>
                      <th style={{ visibility: "hidden" }}>Hidden Text</th>
                      <th>MISC</th>
                      <th style={{ visibility: "hidden" }}>Hidden Text</th>
                      <th className="subscribe-title">
                        SUBSCRIBE TO OUR NEWSLETTER
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td colSpan={3} className="color-font">
                        <span
                          className="line center"
                          style={{
                            width: "93%",
                            position: "absolute",
                            top: "2.2em",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ visibility: "hidden" }}>
                        Hidden Text
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#0">ABOUT US</a>
                      </td>
                      <td></td>
                      <td>
                        <a href="#0">MEDIA KIT</a>
                      </td>
                      <td></td>
                      <td>
                        <div className="subscribe">
                          <input type="text" placeholder="EMAIL" />
                          <a href="#0">
                            <button className="back-color">
                              <span className="text">SUBSCRIBE</span>
                            </button>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <a href="#0">
                        <td>FEATURES</td>
                      </a>
                      <td></td>
                      <a href="#0">
                        <td>CAREER</td>
                      </a>
                    </tr>
                    <tr>
                      <a href="#0">
                        <td>PARTNERSHIP</td>
                      </a>
                      <td></td>
                      <a href="#0">
                        <td>TERMS OF SERVICE</td>
                      </a>
                    </tr>
                    <tr>
                      <a href="#0">
                        <td>BLOGS</td>
                      </a>
                      <td></td>
                      <a href="#0">
                        <td>PRIVACY POLICY</td>
                      </a>
                    </tr>
                    <tr>
                      <a href="#0">
                        <td>DOCS</td>
                      </a>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <a href="#0">
                        <td>LAUNCH APP</td>
                      </a>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <div className="socials">
                  <img src={icon("x")} alt="" />
                  <img src={icon("dc")} alt="" />
                  <img src={icon("md")} alt="" />
                  <img src={icon("tg")} alt="" />
                </div>

                <img src="/img/ms-purple.png" alt="" className="microsoft" />
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-line-wrapper">
          <div className="line bottom-footer-line" />
        </div>

        <div className="bottom-info">
          <div className="copyright">
            Copyright 2024 SHOPCEK-All Rights Reserved
          </div>

          <div className="info">
            Developed for the transition of the next billion to crypto
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeFooter;
