import "./MoodTracker.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Navbar, Button, Form } from "react-bootstrap";

function PreviousMood() {
  const history = useHistory();
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bodyMood">
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <Button variant="primary" onClick={() => history.push("/")}>
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="titleMood">Mood Tracker</div>
      <div className="windowMood">
        <div style={{ margin: "20px" }}>Your Previous Mood</div>
        <div className="itemOne">
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <div style={{ display: "flex", margin: "15px", cursor: "pointer" }}>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-grin-stars fontSizeMood joyful"></i>
                <br />
                <label style={{ fontSize: "12px" }}>joyful</label>
                <br />
                <label style={{ fontSize: "12px" }}>03/26/2021</label>
                <div
                  className="viewNote"
                  onClick={() => {
                    setText("I went to Newyork!!");
                    handleShow();
                  }}
                >
                  View My Note
                </div>
              </Card.Body>
            </Card>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="fas fa-meh fontSizeMood neutral"></i>
                <br />
                <label style={{ fontSize: "12px" }}>neutral</label>
                <br />
                <label style={{ fontSize: "12px" }}>03/19/2021</label>
                <div
                  className="viewNote"
                  onClick={() => {
                    setText("Slept all day!!");
                    handleShow();
                  }}
                >
                  View My Note
                </div>
              </Card.Body>
            </Card>
          </div>
          <div style={{ display: "flex", margin: "15px", cursor: "pointer" }}>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="fal fa-grin fontSizeMood happy"></i>
                <br />
                <label style={{ fontSize: "12px" }}>happy</label>
                <br />
                <label style={{ fontSize: "12px" }}>03/5/2021</label>
                <div
                  className="viewNote"
                  onClick={() => {
                    setText("I completed my Assignment.");
                    handleShow();
                  }}
                >
                  View My Note
                </div>
              </Card.Body>
            </Card>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-sad-tear fontSizeMood sad"></i>
                <br />
                <label style={{ fontSize: "12px" }}>sad</label>
                <br />
                <label style={{ fontSize: "12px" }}>02/26/2021</label>
                <div
                  className="viewNote"
                  onClick={() => {
                    setText("I miss my Home town");
                    handleShow();
                  }}
                >
                  View My Note
                </div>
              </Card.Body>
            </Card>
          </div>
          <div style={{ display: "flex", margin: "15px", cursor: "pointer" }}>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-meh-rolling-eyes fontSizeMood anxious"></i>
                <br />
                <label style={{ fontSize: "12px" }}>anxious</label>
                <br />
                <label style={{ fontSize: "12px" }}>03/01/2021</label>
                <div
                  className="viewNote"
                  onClick={() => {
                    setText("Amazon Interview very soon");
                    handleShow();
                  }}
                >
                  View My Note
                </div>
              </Card.Body>
            </Card>
            <Card className="cardIndexOne">
              <Card.Body>
                <i className="far fa-grin-stars fontSizeMood joyful"></i>
                <br />
                <label style={{ fontSize: "12px" }}>joyful</label>
                <br />
                <label style={{ fontSize: "12px" }}>03/26/2021</label>
                <div
                  className="viewNote"
                  onClick={() => {
                    setText("Semester ends and I am graduating");
                    handleShow();
                  }}
                >
                  View My Note
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="footerDiv" style={{ margin: "25px" }}>
          <div
            className="footerBreathingSong"
            onClick={() => history.push("/moodOptions")}
          >
            <div className="material-icons homeBS">
              <i class="fas fa-arrow-left"></i>
            </div>

            <div className="goToHomeBS">Back</div>
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

export default PreviousMood;
