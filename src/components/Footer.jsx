import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>Created by Mallory Smith &copy; {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;