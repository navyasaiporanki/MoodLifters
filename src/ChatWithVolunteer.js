import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
import "./ChatWithVolunteer.css";
import { Navbar, Form } from "react-bootstrap";

function ChatWithVolunteer() {
  const history = useHistory();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bodyChat">
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <Button variant="primary" onClick={() => history.push("/")}>
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="titleChat">
        You are chatting with {location.nameOfVolunteer}
      </div>
      <div className="infoText">{location.infoOfVolunteer}</div>
      <div className="window">
        <div className="mess">
          <div>Hello</div>
          <div style={{ marginTop: "10px" }}>How can we help you?</div>
        </div>
        <div
          className="footerChat"
          onClick={() => {
            handleShow();
          }}
        >
          <div className="messageBar">Send a Message!</div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            This feature will be implemented in the future!!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="chatFooterIcons">
        <div
          className="footerMentalHealth"
          onClick={() => history.push("/volunteer")}
        >
          <div className="material-icons homeFont">
            <i class="fas fa-arrow-left"></i>
          </div>

          <div className="goToHome">Back</div>
        </div>
        <div
          className="footerMentalHealth"
          onClick={() => history.push("/home")}
        >
          <div className="material-icons homeFont">home</div>

          <div className="goToHome">Go to Home</div>
        </div>
      </div>
      {/* <div className="footerMentalHealth" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>

        <div className="goToHome">Go to Home</div>
      </div> */}
    </div>
  );
}

export default ChatWithVolunteer;
