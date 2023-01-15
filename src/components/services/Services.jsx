import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services seciton" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-image services__icon"></i>
            <h3 className="services__title">
              Web Page Desinger
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Page Desinger</h3>
              <p className="services__modal-description">Loading...</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">UI / UX</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">UI / UX</h3>
              <p className="services__modal-description">Loading...</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">End-user tests</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">End-user tests</h3>
              <p className="services__modal-description">Loading...</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__moda-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
