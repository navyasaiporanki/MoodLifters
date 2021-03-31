import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./MusicPlaylist.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./BreathingPlaylist.css";

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
        <div>Calm Music to Improve mood</div>4 Songs. 17 mins 16 secs
      </div>

      <div className="options">
        <div className="music">
          <button
            className="music-buttonClass"
            onClick={() => history.push({ pathname: "/calmMusic",
            nameOfSong: "Relaxing Music",})}
          >
            {" "}
            Relaxing Music
            <span className="music-info">
              {/* <i className="fas fa-info-circle"></i> */}
            </span>
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Realxing Music that will relieve you from your stress");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
          </div>
          <label className="time">4:19</label>
        </div>
        {/* <div className="music">
          <button
            className="music-buttonClass"
            onClick={() => history.push("/breathingSong")}
          >
            {" "}
            Super Calm Music
            <span className="music-info">
              <i className="fas fa-info-circle"></i>
            </span>
          </button> */}
          {/* {/* <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">5:29</label>
        </div> */}
        <div className="music">
          <button className="music-buttonClass"
          onClick={() => history.push({ pathname: "/calmMusic",
          nameOfSong: "Beautiful Music for Sleep",})}>
            {" "}
            Beautiful Music for sleep
            <span className="music-info">
              {/* <i className="fas fa-info-circle"></i> */}
            </span> 
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Music that will help you sleep better");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
          </div>
          <label className="time">4:19</label>
        </div>
        <div className="music">
          <button className="music-buttonClass"
          onClick={() => history.push({ pathname: "/calmMusic",
          nameOfSong: "Focus Music for work/study",})}>
            {" "}
            Focus Music for work/study
            <span className="music-info">
              {/* <i className="fas fa-info-circle"></i> */}
            </span>
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Music that will help you focus in your work/study");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
          </div>
          <label className="time">4:19</label>
        </div>
        <div className="exercise">
          <button className="music-buttonClass"
          onClick={() => history.push({ pathname: "/calmMusic",
          nameOfSong: "Meditation Music",})}>
            {" "}
            Meditation Music
            <span className="music-info">
              {/* <i className="fas fa-info-circle"></i> */}
            </span>
          </button>
          <span
            className="iconInfo"
            onClick={() => {
              setText("Music that will aid in meditation");
              handleShow();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </span>
          <div className="padding10px">
          </div>
          <label className="time">4:19</label>
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
