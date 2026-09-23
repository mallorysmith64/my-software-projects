import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer has-background-dark has-text-white-ter">
      <div className="content has-text-centered">
        <p>Created by Mallory Smith © {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;