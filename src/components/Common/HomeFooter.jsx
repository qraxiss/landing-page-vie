import React from "react";
import logo from "../../../public/img/footer-logo.png";

function HomeFooter({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div
                className="logo-footer"
                style={{
                  width: "280px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <img src="/img/footer-logo.png" alt="" className="bord-gr" />
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
                    <th>SUBSCRIBE TO OUR NEWSLETTER</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan={3} className="color-font">
                      <span className="line center" style={{ width: "87%" }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ visibility: "hidden" }}>
                      Hidden Text
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#0">MEDIA KIT</a>
                    </td>
                    <td></td>
                    <td>
                      <a href="#0">ABOUT US</a>
                    </td>
                    <td></td>
                    <td>
                      {/* <div>
                        <input type="text" placeholder="EMAIL" />
                        <button
                          style={{
                            background:
                              "transparent linear-gradient(108deg, #f556b8 0%, #14c5f0 100%) 0% 0% no-repeat padding-box;",
                            borderwidth: "0",
                            borderradius: "0px 12px 12px 0px",
                            padding: "0.7rem 1.6rem;"
                          }}
                        >
                          <div className="text">SUBSCRIBE</div>
                        </button>
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <td>FEATURES</td>
                    <td></td>
                    <td>CAREER</td>
                  </tr>
                  <tr>
                    <td>PARTNERSHIP</td>
                    <td></td>
                    <td>TERMS OF SERVICE</td>
                  </tr>
                  <tr>
                    <td>BLOGS</td>
                    <td></td>
                    <td>PRIVACY POLICY</td>
                  </tr>
                  <tr>
                    <td>DOCS</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>LAUNCH APP</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
