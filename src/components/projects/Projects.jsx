import React, { useState } from "react";
import "./projects.css";
import pr_1 from "../../assets/videos/cartoon.mp4";
import pr_2 from "../../assets/videos/nft.mp4";
import pr_3 from "../../assets/videos/nursery.mp4";
import pr_4 from "../../assets/videos/nursery-2.mp4";
import pr_5 from "../../assets/videos/soft.mp4";
import pr_6 from "../../assets/videos/landing.mp4";

import pr_ss_1 from "../../assets/web-ss/ss-1.png";
import pr_ss_2 from "../../assets/web-ss/ss-2.png";
import pr_ss_3 from "../../assets/web-ss/ss-3.png";
import pr_ss_4 from "../../assets/web-ss/ss-4.png";
import pr_ss_5 from "../../assets/web-ss/ss-5.png";
import pr_ss_6 from "../../assets/web-ss/ss-6.png";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Sample Website Projects</span>
      <div className="projects__container container grid">
        <div className="project__content" onClick={() => openModal(pr_1)}>
          <img src={pr_ss_1} alt="Cartoon" />
          <h2 className="project__title">Cartoon - Animation Company</h2>
        </div>
        <div className="project__content" onClick={() => openModal(pr_2)}>
          <img src={pr_ss_4} alt="NFT's" />
          <h2 className="project__title">NFT's - NFT Marketplace </h2>
        </div>
        <div className="project__content" onClick={() => openModal(pr_3)}>
          <img src={pr_ss_5} alt="Nursery" />
          <h2 className="project__title">Nursery</h2>
        </div>
        <div className="project__content" onClick={() => openModal(pr_4)}>
          <img src={pr_ss_3} alt="Nursery - 2" />
          <h2 className="project__title">Nursery 2 (Continuing)</h2>
        </div>
        <div className="project__content" onClick={() => openModal(pr_5)}>
          <img src={pr_ss_6} alt="Software" />
          <h2 className="project__title">SandBox - Software Company</h2>
        </div>
        <div className="project__content" onClick={() => openModal(pr_6)}>
          <img src={pr_ss_2} alt="Landing Page" />
          <h2 className="project__title">Mosto - Bank APP</h2>
        </div>
      </div>
      {modalOpen && (
        <div className="modal modal__active" onClick={closeModal}>
          <div className="content">
            <video
              width="100%"
              height="auto"
              autoplay=""
              muted=""
              loop=""
              playsinline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
