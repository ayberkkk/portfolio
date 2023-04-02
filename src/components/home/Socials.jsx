import React from "react";

const Socials = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/aayberkt/"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ayberk-tigli/"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/ayberkkk"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Socials;
