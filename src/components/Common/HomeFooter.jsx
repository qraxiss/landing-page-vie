const icon = (social) => `/img/social/white/${social}.png`;

function HomeFooter({ hideBGCOLOR }) {
  return (
    <div className="footer-wrapper">
      <footer className={`footer ${!hideBGCOLOR ? "sub-bg" : ""} desktop`}>
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
              <div className="table-container">
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
                            width: "`100%",
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
                        <a href="/#about">ABOUT US</a>
                      </td>
                      <td></td>
                      <td>
                        <a
                          href="https://drive.google.com/drive/folders/1cVDyVIY6XN5DtJ9WrjnrYfWU50jXrvYD?usp=drive_link"
                          target="_blank"
                        >
                          MEDIA KIT
                        </a>
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
                      <td>
                        <a href="/#features">FEATURES</a>
                      </td>
                      <td></td>
                      <td>
                        <a
                          href="https://shopcek.gitbook.io/shopcek-or-shpc-1/institutional/career"
                          target="_blank"
                        >
                          CAREER
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/#partnership">PARTNERSHIP</a>
                      </td>
                      <td></td>
                      <td>
                        <a
                          href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/terms-and-conditions"
                          target="_blank"
                        >
                          TERMS OF SERVICE
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/blogs-list/">BLOG</a>
                      </td>
                      <td></td>
                      <td>
                        <a
                          href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/privacy-policy"
                          target="_blank"
                        >
                          PRIVACY POLICY
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href="https://shopcek.gitbook.io/shopcek-or-shpc-1"
                          target="_blank"
                        >
                          DOCS
                        </a>{" "}
                        <br />
                        <a href="/request-demo/">LAUNCH APP</a>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <div className="socials">
                  <a href="https://twitter.com/shopcek" target="_blank">
                    <img src={icon("x")} alt="" />
                  </a>
                  <a href="https://discord.gg/kBH3p8Xb6y" target="_blank">
                    <img src={icon("dc")} alt="" />
                  </a>
                  <a href="https://medium.com/shopcek" target="_blank">
                    <img src={icon("md")} alt="" />
                  </a>
                  <a href="https://t.me/shopcek" target="_blank">
                    <img src={icon("tg")} alt="" />
                  </a>
                </div>
                <img src="/img/ms-purple.png" alt="" className="microsoft" />
              </div>
            </div>
          </div>
          <div className="row">
            <span
              className="line center"
              style={{
                width: "79%",
                position: "absolute",
                marginLeft: 28,
                margin: 24,
              }}
            />
            <div className="bottom-info">
              <div className="copyright">
                Copyright 2024 SHOPCEK-All Rights Reserved
              </div>
              <div className="info">
                Developed for the transition of the next billion to crypto
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className={`footer ${!hideBGCOLOR ? "sub-bg" : ""} mobile`}>
        <div className="container">
          <div className="row">
            <div className="footer-logo-mobile">
              <img className="logo-icon" src="/img/logo-icon.svg" alt="" />
              <img src="/img/logo-dark.png" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <table>
                <thead>
                  <tr>
                    <th colSpan={3}>
                      <span>MENU</span>
                    </th>
                    <th></th>
                    <th>
                      <span className="margin-left">MISC</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan={3} className="color-font">
                      <span className="line center" style={{ width: "93%" }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <a href="#about" style={{ marginTop: 16 }}>
                        ABOUT US
                      </a>
                    </td>
                    <td></td>
                    <td colSpan={3}>
                      <a
                        className="margin-left"
                        style={{ marginTop: 16 }}
                        href="https://drive.google.com/drive/folders/1cVDyVIY6XN5DtJ9WrjnrYfWU50jXrvYD?usp=drive_link"
                        target="_blank"
                      >
                        MEDIA KIT
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <a href="#features">FEATURES</a>
                    </td>
                    <td></td>
                    <td colSpan={3}>
                      <a
                        className="margin-left"
                        href="https://shopcek.gitbook.io/shopcek-or-shpc-1/institutional/career"
                        target="_blank"
                      >
                        CAREER
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <a href="#partnership">PARTNERSHIP</a>
                    </td>
                    <td></td>
                    <td colSpan={3}>
                      <a
                        className="margin-left"
                        href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/terms-and-conditions"
                        target="_blank"
                      >
                        TERMS OF SERVICES
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <a href="/blogs-list/">BLOG</a>
                    </td>
                    <td></td>
                    <td colSpan={3}>
                      <a
                        className="margin-left"
                        href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/privacy-policy"
                        target="_blank"
                      >
                        PRIVACY POLICY
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="https://shopcek.gitbook.io/shopcek-or-shpc-1"
                        target="_blank"
                      >
                        DOCS
                      </a>{" "}
                      <br />
                      <a href="/request-demo/">LAUNCH APP</a>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-4" style={{ flexDirection: "column", gap: 12 }}>
              <h4 className="mobile-info-subscribe">
                SUBSCRIBE TO OUR NEWSLETTER
              </h4>
              <span className="line center" style={{ width: "93%" }} />
              <div className="mobile-subscribe-container">
                <input type="text" placeholder="EMAIL" />
                <a href="#0">
                  <button className="back-color">
                    <span className="text">SUBSCRIBE</span>
                  </button>
                </a>
              </div>
              <div className="socials-mobile-icon">
                <a href="https://twitter.com/shopcek" target="_blank">
                  <img src={icon("x")} alt="" />
                </a>
                <a href="https://discord.gg/kBH3p8Xb6y" target="_blank">
                  <img src={icon("dc")} alt="" />
                </a>
                <a href="https://medium.com/shopcek" target="_blank">
                  <img src={icon("md")} alt="" />
                </a>
                <a href="https://t.me/shopcek" target="_blank">
                  <img src={icon("tg")} alt="" />
                </a>
              </div>
              <div className="microsoft-image-container">
                <img src="/img/ms-purple.png" alt="" width={100} />
              </div>
            </div>
          </div>
          <div className="row">
            <span className="line center" />
            <div className="mobile-info-copyright" style={{padding:'5px'}}>
              Copyright 2024 SHOPCEK-All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeFooter;
