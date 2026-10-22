
"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import "./contact.css";

export default function ContactPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);

    const fullName = String(data.get("fullName") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const workEmail = String(data.get("workEmail") ?? "").trim();
    const phoneNumber = String(data.get("phoneNumber") ?? "").trim();
    const availableDate = String(data.get("availableDate") ?? "").trim();
    const timeSlots = String(data.get("timeSlots") ?? "").trim();

    const subject = `PROSIGHT contact enquiry — ${fullName}`;

    const body = [
      "New enquiry from the PROSIGHT website",
      "",
      `Full Name: ${fullName}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Work Email: ${workEmail}`,
      `Phone Number: ${phoneNumber || "Not provided"}`,
      `Available Date: ${availableDate}`,
      `Preferred Timeslots: ${timeSlots}`,
    ].join("\n");

    const mailtoUrl =
      "mailto:info@prosight-aism.com" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setFeedback(
      "Your default email application should open with your enquiry details. Please send the email to complete your enquiry."
    );

    window.location.href = mailtoUrl;
  };

  return (
    <>
      {/* Shared website header */}
      <div className="contact-page__header">
        <SiteHeader />
      </div>

      <main className="prosight-contact">
        <section
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="contact-section__container">
            {/* =====================================
                LEFT COLUMN — CONTACT INTRODUCTION
            ====================================== */}

            <div className="contact-intro">
              <h1 id="contact-title">
                Get in touch
                <br />
                with us
              </h1>

              <div
                className="contact-intro__accent"
                aria-hidden="true"
              />

              <p>
                You can drop an email to{" "}
                <a href="mailto:info@prosight-aism.com">
                  info@prosight-aism.com
                </a>{" "}
                or fill in the form and we will reach out to you.
              </p>
            </div>

            {/* =====================================
                RIGHT COLUMN — CONTACT FORM
            ====================================== */}

            <div className="contact-form-panel">
              <header className="contact-form-panel__header">
                <h2>Contact Form</h2>
                <p>Tell us a little about your requirements</p>
              </header>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form__grid">
                  {/* Full Name */}
                  <div className="contact-form__field">
                    <label htmlFor="contact-full-name">
                      Full Name
                    </label>

                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>

                  {/* Organisation */}
                  <div className="contact-form__field">
                    <label htmlFor="contact-organisation">
                      Organisation
                    </label>

                    <input
                      id="contact-organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="contact-form__field">
                    <label htmlFor="contact-work-email">
                      Work Email
                    </label>

                    <input
                      id="contact-work-email"
                      name="workEmail"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="contact-form__field">
                    <label htmlFor="contact-phone">
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>

                  {/* Available Date */}
                  <div className="contact-form__field">
                    <label htmlFor="contact-available-date">
                      What date are you available for a call
                    </label>

                    <input
                      id="contact-available-date"
                      name="availableDate"
                      type="date"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* Preferred Timeslots */}
                  <div className="contact-form__field">
                    <label htmlFor="contact-time-slots">
                      Please specify the timeslots below
                    </label>

                    <input
                      id="contact-time-slots"
                      name="timeSlots"
                      type="text"
                      placeholder="e.g. 10 AM – 12 PM"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="contact-form__footer">
                  <button
                    className="contact-form__submit"
                    type="submit"
                  >
                    <span>Submit</span>

                    <span
                      className="contact-form__submit-icon"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M5 12h13M12 5l7 7-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Submission feedback */}
                <p
                  className="contact-form__feedback"
                  aria-live="polite"
                >
                  {feedback}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Shared website footer */}
      <SiteFooter />
    </>
  );
}
