import React, { useState, useContext } from "react";
import { Appcontext } from "../../App";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function RespAns() {
  const { refId } = useContext(Appcontext);
  const [ansid, setAnsid] = useState("");
  const [text, setText] = useState("");
  const { doctorId } = useContext(Appcontext);
  let votes=70;
  const addToList = () => {
    Axios.post("http://localhost:5000/responseAnswer", {
      quesid: refId,
      doctorId: doctorId,
      text: text,
      ansid: ansid,
      votes: votes
    });
  };
  return (
    <>
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Give response Answer!!
      </h1>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          border: "2px solid gray",
          margin: "70px 70px 70px 70px",
        }}
      >
        <Form onSubmit={addToList}>
          <Form.Group className="mb-3" controlId="ansidx" as={Col}>
            <Form.Label style={{ fontFamily: "sans-serif" }}>
              answerid
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setAnsid(e.target.value);
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
            <Form.Label>Answer+</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Form.Group>

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

export default RespAns;
