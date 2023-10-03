import * as React from "react";
import "../style.css";
import {Modal} from "./Modal";

function Main() {
  const opencloseModal = () => {
    if(document.querySelector(".container").classList.contains("modal-open")){
      document.querySelector(".container").classList.remove("modal-open");
    }else{
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
        <div className="logo">
          <img className="abt_logo_1-1" src="static/abt_logo_1.png" />
        </div>
        <div className="Copyright-2023-ABT">Copyright @ 2023. ABT</div>
        <Modal />
      </div>
    </div>
  );
}



export default Main;
