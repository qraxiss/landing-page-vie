"use client";
import React, { useCallback, useEffect, useState } from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import contentFormData from "@/data/contact-form.json";

function RequestDemoFrom({ theme }) {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Request A Demo</h4>

              <form id="contact-form">
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="telegram_handle"
                      type="string"
                      name="telegram"
                      placeholder="Telegram Handle"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="telegram_handle"
                      type="string"
                      name="telegram"
                      placeholder="Entity Name"
                      required="required"
                    />
                  </div>

                  <span
                    className="butn bord curve wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <span>Submit</span>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <Split>
                <h3 className="wow" data-splitting>
                  {contentFormData.title}
                </h3>
              </Split>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{contentFormData.email}</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestDemoFrom;
