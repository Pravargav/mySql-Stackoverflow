import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../../App";
import ReadbyPatientId from "./MypatientQns";

function Patientprofile() {
    let navigate = useNavigate();
    const [patient, setPatient] = useState({});
    const { patientId } = useContext(Appcontext);
    const func = () => {
      window.localStorage.setItem("patientId", "myProfileId");
      window.localStorage.setItem("userType", "userType");
      navigate("/");
    };
  
    useEffect(() => {
      const fetchprofile = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/patientProfile/${patientId}`
          );
          setPatient(response.data);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchprofile();
    }, []);
  
    const Bttncontainer = {
      display: "flex",
      justifyContent: "space-between",
    };
    const Bttn = {
      fontFamily: "sans-serif",
      width: "600px",
    };
    return (
      <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Card.Title
              style={{ fontFamily: "sans-serif" }}
              className="d-flex justify-content-center align-items-center"
            >
              Patientprofile
              <Button
                variant="secondary"
                size="sm"
                style={{ textAlign: "right", marginLeft: "100px" }}
                onClick={func}
              >
                logout
              </Button>
            </Card.Title>
            <Card.Text
              style={{ fontFamily: "sans-serif" }}
              className="d-flex justify-content-center align-items-center"
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
              patientid : {patient.patientid}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
              name : {patient.name}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
              email : {patient.email}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontFamily: "sans-serif" }}>
              password : {patient.password}
            </ListGroup.Item>
          </ListGroup>
          <div style={Bttncontainer}>
            <Button variant="dark" size="lg" style={Bttn}>
              my reports
            </Button>
  
            <Button variant="dark" size="lg" style={Bttn}>
              my appointments
            </Button>
          </div>
        </Card>
      </div>
      <ReadbyPatientId/>
      </>
    );
}

export default Patientprofile;
