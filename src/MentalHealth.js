import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "./MentalHealth.css";

export default function MentalHealth() {
  return (
    <div className="healthResBody">
      <div className="titleMental">Mental Health Resources</div>
      <div className="allResources">
        <Accordion defaultActiveKey="0">
          <Card style={{width: "100%"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Anger Management
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{width: "100%"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Depression
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{width: "100%"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Stress
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {" "}
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{width: "100%"}}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Anxiety
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {" "}
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
                The goal of anger management is to reduce both your emotional
                feelings and the physiological arousal that anger causes
                <div>
                  The goal of anger management is to reduce both your emotional
                  feelings and the physiological arousal that anger causes
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="footerMentalHealth">
        {/* <button className="buttonClass"> Back to Home</button> */}
        <div className="material-icons homeFont">home</div>

        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}
