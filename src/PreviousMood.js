import "./MoodTracker.css";
import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

function PreviousMood() {
  const history = useHistory();
  return (
    <div className="bodyMood">
      <div className="titleMood">Mood Tracker</div>
      <div className="windowMood">
        <div style={{ margin: "20px" }}>Your Previous Mood</div>
        <div className="itemOne">
          <div style={{display: "flex", margin: "15px"}}>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-grin-stars fontSizeMood joyful"></i>
                <br/>
                <label style={{ fontSize: "12px" }}>joyful</label>
                <br/>
                <label style={{ fontSize: "12px" }}>03/26/2021</label>
              </Card.Body>
            </Card>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="fas fa-meh fontSizeMood neutral"></i>
                <br/>
                <label style={{ fontSize: "12px" }}>neutral</label>
                <br/>
                <label style={{ fontSize: "12px" }}>03/19/2021</label>
              </Card.Body>
            </Card>
          </div>
          <div style={{display: "flex", margin: "15px"}}>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="fal fa-grin fontSizeMood happy"></i>
                <br/>
                <label style={{ fontSize: "12px" }}>happy</label>
                <br/>
                <label style={{ fontSize: "12px" }}>03/5/2021</label>
              </Card.Body>
            </Card>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-sad-tear fontSizeMood sad"></i>
                <br/>
                <label style={{ fontSize: "12px" }}>sad</label>
                <br/>
                <label style={{ fontSize: "12px" }}>02/26/2021</label>
              </Card.Body>
            </Card>
          </div>
          <div style={{display: "flex", margin: "15px"}}>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-meh-rolling-eyes fontSizeMood anxious"></i>
                <br/>
                <label style={{ fontSize: "12px" }}>anxious</label>
                <br/>
                <label style={{ fontSize: "12px" }}>03/01/2021</label>
              </Card.Body>
            </Card>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-grin-stars fontSizeMood joyful"></i>
                <br/>
                <label style={{ fontSize: "12px" }}>joyful</label>
                <br/>
                <label style={{ fontSize: "12px" }}>03/26/2021</label>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="footerMentalHealth" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>
        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}

export default PreviousMood;
