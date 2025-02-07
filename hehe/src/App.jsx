import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import myAudio from "./assets/8-halo-cute-bgm-274661.mp3";

function App() {
  const [open, setOpen] = useState(false);
  const [noIsOpen, setNoIsOpen] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const moveButton = () => {
    const button = document.getElementById("unclickable");
    const container = document.querySelector(".buttongroup"); // Container element

    if (button && container) {
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      // Get container's dimensions
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Calculate max X and Y positions for the button within the container
      const maxX = containerWidth - buttonWidth - 10; // 10px margin from the right
      const maxY = containerHeight - buttonHeight - 10; // 10px margin from the bottom

      // Generate random X and Y values within the container bounds
      const randomX = Math.floor(Math.random() * (maxX - 10) + 10); // Ensures button stays inside
      const randomY = Math.floor(Math.random() * (maxY - 10) + 10);

      button.style.position = "absolute"; // Ensure it's absolutely positioned
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={myAudio} loop>
        Your browser does not support the audio element.
      </audio>
      {!isPlaying && (
        <div className="audiobutton">
          <button className="play-pause-button" onClick={togglePlayPause}>
            Click Me!
          </button>
        </div>
      )}

      {isPlaying && (
        <div>
          <h1 className="title">Will You Be My Valentine?</h1>
          <div className="envelope-container">
            <div className="maxy">
              <img className="maxygif" src="src\maxy (1).gif"></img>
            </div>
            <div className="buttongroup">
              <button onClick={() => setOpen(true)}>
                <img className="yesgif" src="src\yes.gif"></img>
              </button>
            </div>
            <div className="buttongroup">
              <button
                id="unclickable"
                onClick={() => setNoIsOpen(true)}
                onMouseEnter={moveButton}
              >
                <img className="nogif" src="src\no.gif"></img>
              </button>
            </div>
          </div>
        </div>
      )}
      <Popup
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="popup-container">
          <div className="container">
            <img src="src\happy-catto-cats.gif" alt="Centered Image"></img>
            <img className="flower" src="src\flower.png"></img>
          </div>
          <h1 className="message">Yay! I love you pookieeee</h1>
          <h3 className="submessage">Go check your mailbox!</h3>
        </div>
      </Popup>
      <Popup
        open={noIsOpen}
        onClose={() => {
          setNoIsOpen(false);
        }}
      >
        <img src="src\catmad-cat-mad.gif"></img>
        <h1 className="message">Wrong answer try again &gt;:&#40;</h1>
      </Popup>
    </>
  );
}

export default App;
