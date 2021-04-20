import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";

function Name() {
  const history = useHistory();

  const [displayButton, setDisplayButton] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.jpeg"})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="titleDiv">
        <label className="welcomeMsg">Welcome to Mood-Lifters</label>
        <div>
          <label className="stressMsg">Live Life Stress Free!</label>
        </div>
      </div>

      <div className="nameBlock">
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="bodyOfModal">
            <input
              type="text"
              className="textBox"
              placeholder="Enter User Name.."
            ></input>
            <input
              type="password"
              className="textBox"
              placeholder="Enter your password"
            ></input>
            <Form.Check
              className={displayButton === "signup" ? "" : "doNotShow"}
              type="checkbox"
              label="I agree to the terms and conditions."
            />
            <button
              className={displayButton === "login" ? "getStarted" : "doNotShow"}
              onClick={() => {
                history.push("/display");
              }}
            >
              {" "}
              Login
            </button>
            <button
              className={
                displayButton === "signup" ? "getStarted" : "doNotShow"
              }
              onClick={() => {
                history.push("/display");
              }}
            >
              {" "}
              Sign Up
            </button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <button
          className="getStarted"
          onClick={() => {
            setDisplayButton("login");
            handleShow();
          }}
        >
          {" "}
          Login
        </button>
        <button
          className="getStarted"
          onClick={() => {
            setDisplayButton("signup");
            handleShow();
          }}
        >
          {" "}
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Name;
