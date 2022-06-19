import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 shadow-lg bg-neutral text-neutral-content footer-center">
      <div>
        <p>Copywrite &copy; {footerYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
