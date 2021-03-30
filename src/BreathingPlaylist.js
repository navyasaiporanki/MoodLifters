import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./BreathingPlaylist.css";

function BreathingPlaylist() {
  const history = useHistory();
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="breathingBody"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/cloudBG.jpeg"})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="playlistTitle">Breathing Exercise Playlist</div>
      <div className="textAlignLeft">
        <div>Breathing Exercies to Improve mood</div>4 Songs. 11 mins 19 secs
      </div>

      <div className="options">
        <div className="exercise">
          <button
            className="buttonClass"
            onClick={() =>
              history.push({
                pathname: "/breathingSong",
                nameOfSong: "Lions Breath",
              })
            }
          >
            {" "}
            Lions Breath
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
        <div className="exercise">
          <button
            className="buttonClass"
            onClick={() =>
              history.push({
                pathname: "/breathingSong",
                nameOfSong: "Breath Focus",
              })
            }
          >
            {" "}
            Breath Focus
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
        <div className="exercise">
          <button
            className="buttonClass"
            onClick={() =>
              history.push({
                pathname: "/breathingSong",
                nameOfSong: "Equal Breathing",
              })
            }
          >
            {" "}
            Equal Breathing
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
          <button
            className="buttonClass"
            onClick={() =>
              history.push({
                pathname: "/breathingSong",
                nameOfSong: "Sital Breath",
              })
            }
          >
            {" "}
            Sitali Breath
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

      <div className="footerBreathing" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>

        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}

export default BreathingPlaylist;