import Col from "react-bootstrap/Col";
import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useContext } from "react";
import { Appcontext } from "../../App";
import Row from "react-bootstrap/Row";

function AskQues() {
  const fields = [
    "Endocrinology",
    "Cardiology",
    "Pharmacology",
    "Neurology",
    "Immunology",
    "Rheumatology",
    "Gastroenterology",
    "Orthopedics",
    "Dermatology",
    "Hematology",
    "Urology",
    "General Medicine",
    "Psychiatry",
    "General Surgery",
    "Ophthalmology",
    "Nutrition",
    "Dentistry",
    "Allergy and Immunology",
    "Hepatology",
    "Pulmonology",
    "Lifestyle Medicine",
    "ENT",
    "Nephrology",
    "Oncology",
    "Gynecology",
    "Plastic Surgery",
    "Sleep Medicine",
    "Obstetrics",
    "Pediatrics",
    "Pain Management",
    "Respiratory Medicine",
    "Sports Medicine",
    "Physiotherapy",
    "Infectious Diseases",
    "Emergency Medicine",
    "Internal Medicine",
    "Virology",
    "Geriatrics",
    "Radiology",
  ];
  const [quesid, setQuesid] = useState("");
  const [text, setText] = useState("");
  const { patientId } = useContext(Appcontext);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:5000/askQuestion", {
      quesid: quesid,
      patientId: patientId,
      text: text,
      p1: val1,
      p2: val2,
      p3: val3,
      p4: val4,
    });
  };
  return (
    <>
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Ask Question!!
      </h1>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          width: "20vh 20vh",
          border: "2px solid gray",
          margin: "70px 70px 70px 70px",
        }}
      >
        <Form onSubmit={addToList}>
          <Form.Group className="mb-3" controlId="questionidx" as={Col}>
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              questionid
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setQuesid(e.target.value);
              }}
              style={{
                height: "50px",
                borderColor: "black",
                borderWidth: "1px",
              }}
              autoComplete="true"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Question+</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState1">
              <Form.Label>priority1</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setVal1(e.target.value)}
              >
                {fields.map((element, index) => (
                  <option key={index} value={element}>
                    {element}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState2">
              <Form.Label>priority2</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setVal2(e.target.value)}
              >
                {fields.map((element, index) => (
                  <option key={index} value={element}>
                    {element}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState3">
              <Form.Label>priority3</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setVal3(e.target.value)}
              >
                {fields.map((element, index) => (
                  <option key={index} value={element}>
                    {element}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState4">
              <Form.Label>priority4</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setVal4(e.target.value)}
              >
                {fields.map((element, index) => (
                  <option key={index} value={element}>
                    {element}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          <Button
            variant="dark"
            type="submit"
            size="lg"
            style={{ fontFamily: "sans-serif" }}
            className="w-100"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AskQues;
