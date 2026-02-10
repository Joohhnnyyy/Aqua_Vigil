"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookie-consent", "denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="cookies"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        width: "480px",
        height: "300px",
        margin: "0px",
        padding: "20px",
        backgroundColor: "rgb(10, 10, 10)",
        color: "rgb(250, 250, 250)",
        fontSize: "16px",
        fontFamily: "Satoshi-Variable, Inter, sans-serif",
        borderRadius: "0px",
        boxShadow: "none",
        zIndex: 9999,
      }}
    >
      <div
        className="cookies-title"
        style={{
          display: "block",
          width: "438px",
          height: "43px",
          margin: "0px 0px 15px 0px",
          padding: "0px",
          color: "rgb(250, 250, 250)",
          fontSize: "32px",
          fontWeight: 700,
          fontFamily: "Satoshi-Variable, Inter, sans-serif",
        }}
      >
        We use cookies!
      </div>

      <div
        className="cookies-content"
        style={{
          display: "block",
          width: "438px",
          flexGrow: 1,
          margin: "0px",
          padding: "0px",
        }}
      >
        <div className="ref-text-mask">
          <div
            className="text-medium"
            style={{
              display: "block",
              width: "438px",
              height: "22px",
              fontSize: "16px",
              lineHeight: "22px",
              fontFamily: "Satoshi-Variable, Inter, sans-serif",
            }}
          >
            These are analytics cookies that help us to understand your
          </div>
          <div
            className="text-medium"
            style={{
              display: "block",
              width: "438px",
              height: "22px",
              fontSize: "16px",
              lineHeight: "22px",
              fontFamily: "Satoshi-Variable, Inter, sans-serif",
            }}
          >
            interactions with our website, so we can improve your user
          </div>
          <div
            className="text-medium"
            style={{
              display: "block",
              width: "438px",
              height: "22px",
              fontSize: "16px",
              lineHeight: "22px",
              fontFamily: "Satoshi-Variable, Inter, sans-serif",
            }}
          >
            experience. They will only be set after obtaining your consent.
          </div>
        </div>
      </div>

      <div
        className="cookies-footer"
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          id="accept-cookies"
          onClick={handleAccept}
          className="cookies-button left"
          style={{
            backgroundColor: "rgb(250, 250, 250)",
            color: "rgb(10, 10, 10)",
            border: "1px solid rgb(250, 250, 250)",
            padding: "10px 30px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s ease",
            borderRadius: "0px",
          }}
        >
          Accept
        </button>
        <button
          id="deny-cookies"
          onClick={handleDeny}
          className="cookies-button right"
          style={{
            backgroundColor: "transparent",
            color: "rgb(250, 250, 250)",
            border: "1px solid rgb(250, 250, 250)",
            padding: "10px 30px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.3s ease",
            borderRadius: "0px",
          }}
        >
          Deny
        </button>
      </div>

      <div
        className="cookies-privacy-link"
        style={{
          marginTop: "15px",
        }}
      >
        <a
          href="/privacy"
          style={{
            color: "rgb(250, 250, 250)",
            fontSize: "12px",
            textDecoration: "none",
            opacity: 0.6,
            transition: "opacity 0.3s ease",
            fontFamily: "Satoshi-Variable, Inter, sans-serif",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "0.6")}
        >
          <span>[ </span>Privacy policy<span> ]</span>
        </a>
      </div>
    </div>
  );
};

export default CookieConsent;