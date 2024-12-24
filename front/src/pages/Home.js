import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Home = () => {
  return (
    <>
      {/* {val1+val2+val3+val4} */}
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand
              style={{
                fontSize: "27px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                display:"flex",
              }}
            >
              <h1>
              Health stack Exchange
              </h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}

      <div style={{ display: "flex" }}>
        <Card style={{ width: "50rem", marginRight: "10px" }}>
          <Card.Body>
            <Card.Title>Doctor</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="/doctorLogin">
              {" "}
              <Button
                variant="dark"
                type="submit"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
              >
                Login
              </Button>{" "}
            </Card.Link>
            <Card.Link href="/doctorSignUp">
              {" "}
              <Button
                variant="dark"
                type="submit"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
              >
                Signup
              </Button>{" "}
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "50rem", marginLeft: "10px" }}>
          <Card.Body>
            <Card.Title>Patient</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="/patientLogin">
              {" "}
              <Button
                variant="dark"
                type="submit"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
              >
                Login
              </Button>{" "}
            </Card.Link>
            <Card.Link href="/patientSignUp">
              {" "}
              <Button
                variant="dark"
                type="submit"
                size="lg"
                style={{ fontFamily: "sans-serif" }}
              >
                Signup
              </Button>{" "}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
