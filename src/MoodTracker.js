import "./MoodTracker.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MoodTracker() {
  const history = useHistory();
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");

  function handleClick(event) {
    setValue(event.target.value);
  }
  return (
    <div className="bodyMood">
      <div className="titleMood">Mood Tracker</div>
      <div className="windowMood">
        <div style={{ margin: "20px" }}>How are you Feeling Today?</div>
        <div className="outerDiv">
          <div className={selected === "joyful" ? "selectedEmoji" : ""}>
            <Card
              className="cardIndex"
              onClick={() => {
                setSelected("joyful");
              }}
            >
              <Card.Body>
                <i className="far fa-grin-stars fontSizeMood joyful"></i>
                Joyful
              </Card.Body>
            </Card>
          </div>
          <div className={selected === "happy" ? "selectedEmoji" : ""}>
            <Card
              className="cardIndex"
              onClick={() => {
                setSelected("happy");
              }}
            >
              <Card.Body>
                <i class="fal fa-grin fontSizeMood happy"></i>
                Happy
              </Card.Body>
            </Card>
          </div>
          <div className={selected === "neutral" ? "selectedEmoji" : ""}>
            <Card
              className="cardIndex"
              onClick={() => {
                setSelected("neutral");
              }}
            >
              <Card.Body>
                <i class="fas fa-meh fontSizeMood neutral"></i>
                Neutral
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="outerDiv">
          <div className={selected === "sad" ? "selectedEmoji" : ""}>
            <Card
              className="cardIndex"
              onClick={() => {
                setSelected("sad");
              }}
            >
              <Card.Body>
                <i className="far fa-sad-tear fontSizeMood sad"></i>
                Sad
              </Card.Body>
            </Card>
          </div>
          <div className={selected === "angry" ? "selectedEmoji" : ""}>
            <Card
              className="cardIndex"
              onClick={() => {
                setSelected("angry");
              }}
            >
              <Card.Body>
                <i class="fal fa-angry fontSizeMood angry"></i>
                Angry
              </Card.Body>
            </Card>
          </div>
          <div className={selected === "anxious" ? "selectedEmoji" : ""}>
            <Card
              className="cardIndex"
              onClick={() => {
                setSelected("anxious");
              }}
            >
              <Card.Body>
                <i class="far fa-meh-rolling-eyes fontSizeMood anxious"></i>
                Anxious
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="context">
          <div style={{ textAlign: "left", padding: "10px", opacity: "0.7" }}>
            <textarea
              value={value}
              onChange={(event) => handleClick(event)}
              style={{ width: "100%", height: "125px", border: "none" }}
              placeholder="What happened to make you feel that way?"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            className="getStarted"
            style={{ margin: "auto" }}
            onClick={() => {
              alert("Mood Saved Successfully");
              setSelected("");
              setValue("");
            }}
          >
            {" "}
            Save My Mood
          </button>
          <button
            className="getStarted"
            onClick={() => {
              history.push("/prevMood");
            }}
          >
            View My Previous Mood
          </button>
        </div>
        <div className="footerDiv" style={{margin:"25px"}}>
          <div
            className="footerBreathingSong"
            onClick={() => history.push("/moodOptions")}
          >
            <div className="material-icons homeBS">sentiment_satisfied_alt</div>

            <div className="goToHomeBS">Playlist</div>
          </div>
          <div
            className="footerMentalHealth"
            onClick={() => history.push("/home")}
          >
            <div className="material-icons homeFont">home</div>
            <div className="goToHome">Go to Home</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;
