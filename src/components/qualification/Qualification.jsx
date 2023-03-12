import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bursa Uludag University{" "}
                </h3>
                <span className="qualification__subtitle">
                  Management Information Systems
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  October 2018 - June 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Serenay Yazılım</h3>
                <span className="qualification__subtitle">
                  Jr. Frontend Developer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  February 2022 - March 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Serenay Yazılım</h3>
                <span className="qualification__subtitle">
                  Jr. Frontend Developer (Intern)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  February 2021 - June 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Blueit </h3>
                <span className="qualification__subtitle">
                  Jr. Frontend Developer (Volunteer)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  October 2021 - June 2022 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
