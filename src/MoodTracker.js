import "./MoodTracker.css";
import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MoodTracker() {
  const history = useHistory();
  return (
    <div className="bodyMood">
      <div className="titleMood">Mood Tracker</div>
      <div className="windowMood">
        <div style={{ margin: "20px" }}>How are you Feeling Today?</div>
        <div className="outerDiv">
          <div>
            <Card className="cardIndex">
              <Card.Body>
                <i className="far fa-smile-beam fontSizeMood"></i>
                Happy
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="cardIndex">
              <Card.Body>
                <i class="far fa-sad-tear fontSizeMood"></i>
                Sad
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="cardIndex">
              <Card.Body>
                <i class="fal fa-angry fontSizeMood"></i>
                Angry
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="outerDiv">
          <div>
            <Card className="cardIndex">
              <Card.Body>
                <i className="far fa-smile-beam fontSizeMood"></i>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="cardIndex">
              <Card.Body>
                <i class="far fa-sad-tear fontSizeMood"></i>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="cardIndex">
              <Card.Body>
                <i class="fal fa-angry fontSizeMood"></i>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="context">
          <div style={{ textAlign: "left", padding: "10px", opacity: "0.7" }}>
            <textarea
              style={{ width: "100%", height: "125px", border: "none" }}
              placeholder="What you would like to Say?"
            ></textarea>
          </div>
        </div>
        <button className="getStarted" style={{ margin: "auto" }}>
          {" "}
          Save My Mood
        </button>
      </div>
      <div className="footerMentalHealth" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>
        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}

export default MoodTracker;
