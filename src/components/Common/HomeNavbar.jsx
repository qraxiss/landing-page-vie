"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";
import TwitterLogo from "../../../public/img/twitter.png";

const HomeNavbar = ({ lr, theme }) => {
  const navbar = useRef();

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar.current?.classList.add("nav-scroll");
    } else {
      navbar.current?.classList.remove("nav-scroll");
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      ref={navbar}
      className={`navbar navbar-expand-lg change ${
        theme === "light" ? "light" : ""
      }`}
      style={{ minHeight: "90px" }}
    >
      <div
        className="container home-navbar"
        style={{ marginTop: 30, paddingBlock: "10px" }}
      >
        <Link className="logo" href="/">
          {theme ? (
            theme === "light" ? (
              <img ref={lr} src={appData.darkLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </Link>

        <div className="d-flex" style={{ gap: 12 }}>
          <a
            href="https://x.com/shopcek"
            target="_blank"
            className="home-navbar-img-container"
          >
            <img
              src="/img/telegram.png"
              className="home-navbar-image"
              alt="logo"
            />
          </a>
          <a
            href="https://t.me/shopcek"
            target="_blank"
            className="home-navbar-img-container"
          >
            <img
              src="/img/twitter.png"
              className="home-navbar-image"
              alt="logo"
            />
          </a>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button> */}

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href={`/`}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/#about`}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/#features`}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/#partnership`}>
                Partnership
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`//shopcek.gitbook.io/`}
                target="_blank"
              >
                Docs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link color-font "
                href={`/request-demo`}
                style={{
                  fontWeight: "700",
                }}
              >
                Launch App
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default HomeNavbar;
