import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "./MentalHealth.css";

export default function MentalHealth() {
  const history = useHistory();
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
                Tips to manage anger:
              1. Think before you speak
              2.Get some exercise
              
                <div>
                3.Take a timeout
              4.Use humor to release tension
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
                Tips to manage Depression:
              1. Get proper sleep
              2.Try to stay involved
                <div>
                3.Talk to a therapist
              4. Improve overall lifestyle
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
                
                Tips to manage Stress:
              1. Do deep breathing
              2. Eat Well
                <div>
                  3.Go easy on yourself
                  4.Eliminate your triggers
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
                Tips to manage Anxiety:
              1. Write down your thoughts
              
                <div>
                2. Avoid Alcohol
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <div className="footerMentalHealth" onClick={() => history.push("/home")}>
        {/* <button className="buttonClass"> Back to Home</button> */}
        <div className="material-icons homeFont">home</div>

        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}
