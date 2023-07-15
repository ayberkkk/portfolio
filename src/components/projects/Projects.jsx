import React, { useState } from "react";
import LazyLoad from "react-lazyload";
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

const Project = React.memo(({ image, title, onClick }) => (
  <div className="project__content" onClick={onClick}>
    <LazyLoad>
      <img src={image} alt={title} />
    </LazyLoad>
    <h2 className="project__title">{title}</h2>
  </div>
));

const Projects = React.memo(() => {
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
        <Project
          image={pr_ss_1}
          title="Cartoon - Animation Company"
          onClick={() => openModal(pr_1)}
        />
        <Project
          image={pr_ss_4}
          title="NFT's - NFT Marketplace"
          onClick={() => openModal(pr_2)}
        />
        <Project
          image={pr_ss_5}
          title="Nursery"
          onClick={() => openModal(pr_3)}
        />
        <Project
          image={pr_ss_3}
          title="Minik Kalpler (Continuing)"
          onClick={() => openModal(pr_4)}
        />
        <Project
          image={pr_ss_6}
          title="SandBox - Software Company"
          onClick={() => openModal(pr_5)}
        />
        <Project
          image={pr_ss_2}
          title="Mosto - Bank APP"
          onClick={() => openModal(pr_6)}
        />
        <div></div>
         <div className="github">
          <a
            href="https://github.com/ayberkkk"
            className="button button--flex"
            target="_blank"
            rel="noreferrer"
          >
            All Project
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <div></div>
      </div>
      {modalOpen && (
        <div className="modal modal__active" onClick={closeModal}>
          <div className="content">
            <LazyLoad>
              <video
                width="100%"
                height="auto"
                autoPlay
                muted
                loop
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </LazyLoad>
          </div>
        </div>
      )}
    </section>
  );
});

export default Projects;
