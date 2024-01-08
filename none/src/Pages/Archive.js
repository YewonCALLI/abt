import * as React from "react";
import "../style.css";
import {Modal} from "./Modal";
import "../style2.css";

function Archive() {
  const opencloseModal = () => {
    if (document.querySelector(".container").classList.contains("modal-open")) {
      document.querySelector(".container").classList.remove("modal-open");
    } else {
      document.querySelector(".container").classList.add("modal-open");
    }
  };

  return (
    <div className="App">
      <div class="back">
        <div id="navbar">
          <a id="logo" href="/">
            ABT
          </a>
          <ul id="menu">
            <li id="contact">
              <a href="https://www.instagram.com/art.body.tech/">Contact</a>
            </li>
            <li id="archive">
              <a href="/archive">Archive</a>
            </li>
            <li id="info">
              <a
                className="btn js-click-modal"
                onClick={() => {
                  opencloseModal();
                }}
              >
                Info
              </a>
            </li>
          </ul>
        </div>
     </div>

    <div className="Copyright-2023-ABT">Copyright @ 2023. ABT</div>

      <div className="neuron">
        <img src="static/neuron.png" />
        <span className="digital-performance-study">digital performance study</span>
        <span className="dps-1">
          <a href="/dps">1</a>
        </span>
        <span className="dps-2">
          <a href="dps-2.html">2</a>
        </span>
        <span className="dps-3">
          <a className="btn js-click-modal2">3</a>
        </span>
        <span className="meeting-with-plannerartists">
          meeting with planner/artists
        </span>
        <span className="mwp-1">
          <a className="btn js-click-modal2">1</a>
        </span>
        <span className="mwp-2">
          <a className="btn js-click-modal2">2</a>
        </span>
        <span className="mwp-3">
          <a className="btn js-click-modal2">3</a>
        </span>
        <span className="hongyeon-gil-dataset">hongyeon-gil dataset</span>
        <span className="hgd-1">
          <a className="btn js-click-modal2">1</a>
        </span>
        <span className="hgd-2">
          <a className="btn js-click-modal2">2</a>
        </span>
        <span className="hgd-3">
          <a className="btn js-click-modal2">3</a>
        </span>
        <span className="developing-moments">developing moments</span>
        <span className="dm-1">
          <a className="btn js-click-modal2">1</a>
        </span>
        <span className="dm-2">
          <a className="btn js-click-modal2">2</a>
        </span>
        <span className="dm-3">
          <a className="btn js-click-modal2">3</a>
        </span>
        <span className="GO-TO-MUSEUM">GO TO MUSEUM!</span>
        <span className="gm-1">
          <a className="btn js-click-modal2">1</a>
        </span>
        <span className="gm-2">
          <a className="btn js-click-modal2">2</a>
        </span>
        <span className="gm-3">
          <a className="btn js-click-modal2">3</a>
        </span>
      </div>
      <Modal />
    </div>
  );
}

export default Archive;
