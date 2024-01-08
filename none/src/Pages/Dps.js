import * as React from "react";
import "../style.css";
import {Modal} from "./Modal";
import "../style3.css";

function DPS() {
  const opencloseModal = () => {
    if (document.querySelector(".container").classList.contains("modal-open")) {
      document.querySelector(".container").classList.remove("modal-open");
    } else {
      document.querySelector(".container").classList.add("modal-open");
    }
  };

  return (
    <div className="App">
      <div id="navbar1">
        <a id="logo" href="/">ABT</a>
        <ul id="menu">
          <li id="contact"><a href="https://www.instagram.com/art.body.tech/">Contact</a></li>
          <li id="archive"><a href="/archive">Archive</a></li>
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
        <div class="main">
            <div class="title2">
                홍연길 감각 수집
            </div>
            <div class="sub_title">
                <div class="Collecting-emotions-from-hongyeon-gil">
                    Collecting emotions from hongyeon-gil.
                </div>
                <div class="date">
                    08.26(토)
                </div>
            </div>
            <div class="vertical-wrap">
                <div class="vertical1">
                <img class="IMG_6017"src="static/photos/IMG_6007.png"/>
                <img class="IMG_6017-1"src="static/photos/IMG_6017-1.png"/>
                <img class="IMG_6017-2"src="static/photos/IMG_6017-2.png"/>
                <video class="video"src="static/photos/IMG_6052.MOV " controls autoplay loop></video>
                <img class="IMG_6017-3"src="static/photos/IMG_6017-3.png"/>
                <img class="IMG_6017-4"src="static/photos/IMG_6017-4.png"/>
                <img class="IMG_6017-5"src="static/photos/IMG_6017-5.png"/>
                <video class="video"src="static/photos/IMG_5205.MOV " controls autoplay loop></video>
                <img class="IMG_6017-6"src="static/photos/IMG_6017-6.png"/>
                <img class="IMG_6017-7"src="static/photos/IMG_6051.JPG"/>
                <img class="IMG_6017-8"src="static/photos/IMG_6017-8.png"/>
                </div>

                <div class="vertical2">
                <img class="IMG_6017-9"src="static/photos/IMG_6020.png"/>
                <video class="video"src="static/photos/IMG_4288.MOV " controls autoplay loop></video>
                <img class="IMG_6017-10"src="static/photos/IMG_6017-10.png"/>
                <img class="IMG_6017-11"src="static/photos/IMG_6017-11.png"/>
                <img class="IMG_6017-12"src="static/photos/IMG_6017-12.png"/>
                <img class="IMG_6017-13"src="static/photos/IMG_6017-13.png"/>
                <img class="IMG_6017-14"src="static/photos/IMG_6017-14.png"/>
                <video class="video"src="static/photos/IMG_6060.MOV " controls autoplay loop></video>
                <img class="IMG_6007"src="static/photos/IMG_6022.png"/>
                <img class="IMG_6020"src="static/photos/IMG_6027.png"/>
                <img class="IMG_6020"src="static/photos/IMG_5978.JPG"/>
                </div>
            </div>
            <div class="Rectangle-11">
                <div class="footer2">
                    <div class="footer3">
                      <span class="ABT-Avatar">
                          ABT : Avatar
                      </span>
                      <a class="arrow" href="https://www.instagram.com/art.body.tech/">
                          <span class="Contact">
                              Contact
                          </span>
                          <img class="arrow_icon" src="static/Vector 7.png"/>
                      </a>
                
                    </div>
                    
                    <a class="Archive" href="/archive">
                      Archive
                    </a>
                <div class="Vector-8"></div>
        </div>
        </div>
      <Modal />
    
    </div>
    </div>
  );
}

export default DPS;
