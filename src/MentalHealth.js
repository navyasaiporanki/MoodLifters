import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Navbar, Button, Form } from "react-bootstrap";
import "./MentalHealth.css";

export default function MentalHealth() {
  const history = useHistory();
  return (
    <div className="healthResBody">
      <Navbar>
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <Button variant="primary" onClick={() => history.push("/")}>
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="titleMental">Mental Health Resources</div>
      <div className="allResources">
        <Accordion>
          <Card style={{ width: "100%" }}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Anger Management
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  Tips to manage anger: <br />
                  <div>1. Think before you speak</div>
                  <div>2.Get some exercise</div>
                  <div>3.Take a timeout</div>
                  <div>4.Use humor to release tension</div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ width: "100%" }}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Depression
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                Tips to manage Depression <br />
                <div>1. Get proper sleep </div>
                <div>2.Try to stay involved</div>
                <div>3.Talk to a therapist</div>
                <div>4. Improve overall lifestyle</div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ width: "100%" }}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Stress
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {" "}
                <div>Tips to manage Stress </div>
                <div>1. Do deep breathing </div>
                <div>2. Eat Well</div>
                <div>3.Go easy on yourself </div>
                <div>4.Eliminate your triggers</div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ width: "100%" }}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Anxiety
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {" "}
                <div>Tips to manage Anxiety:</div>
                <div>1. Write down your thoughts</div>
                <div>2. Avoid Alcohol</div>
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
