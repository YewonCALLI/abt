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
        <div class="message">
          <span class="New-Updates">
            New Updates
          </span>
          <div class="News">
              <img src="static/fi-rr-confetti.svg" class="light"/>
              <a class="news_title" id="news" href="/dps">
                홍연길 감각 수집 (08/26)<br/>
                <span class="text-style-1">게시물이 열렸습니다!</span>
              </a>
              <span class="alarm">
                09.02(토)
              </span>
          </div>
          <div class="input_text">
            <span class="Type-Something">
              Type Something
            </span>
          </div>
        </div>

        <div class="mo-message">
          <div class="mo-News">
          <img src="static/fi-rr-confetti.svg" class="mo-light"/>
              <a class="mo-news_title" id="mo-news" href="/dps">
                홍연길 감각 수집 (08/26)<br/>
                <span class="text-style-1">게시물이 열렸습니다!</span>
              </a>
          </div>
        </div>
        <div className="Copyright-2023-ABT">Copyright @ 2023. ABT</div>
        <Modal />
      </div>
    </div>
  );
}



export default Main;
