import React, { useState } from "react";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD:src/MusicPlaylist.js
import "./MusicPlaylist.css";
=======
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./BreathingPlaylist.css";
>>>>>>> f599a02ea43270499b6815919464d083f8382ecc:src/BreathingPlaylist.js

function MusicPlaylist() {
  const history = useHistory();
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="musicBody"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/cloudBG.jpeg"})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="music-title">Calm Music Playlist</div>
      <div className="textAlignLeft">
        <div>Calm Music to Improve mood</div>5 Songs. 16 mins 38 secs
      </div>

      <div className="options">
        <div className="music">
          <button
            className="music-buttonClass"
            onClick={() => history.push("/breathingSong")}
          >
            {" "}
            Very Calm Music
            <span className="music-info">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Some matter about lions breath");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">3:11</label>
        </div>
        <div className="music">
          <button
            className="music-buttonClass"
            onClick={() => history.push("/breathingSong")}
          >
            {" "}
            Super Calm Music
            <span className="music-info">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">5:29</label>
        </div>
        <div className="music">
          <button className="music-buttonClass">
            {" "}
            Calm Music
            <span className="music-info">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Some matter about breath focus");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">2:08</label>
        </div>
        <div className="music">
          <button className="music-buttonClass">
            {" "}
            Relaxing Music
            <span className="music-info">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Some matter about Equal breath");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">2:45</label>
        </div>
        <div className="exercise">
          <button className="music-buttonClass">
            {" "}
            Piano Music
            <span className="music-info">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Some matter about sitali breath");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">3:15</label>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>{text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="footerMusic" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>

        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}

export default MusicPlaylist;
