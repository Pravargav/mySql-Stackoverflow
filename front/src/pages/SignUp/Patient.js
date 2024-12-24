import Form from 'react-bootstrap/Form';
import React, { useState } from "react";	
import Button from "react-bootstrap/Button";	
import Axios from "axios";

function PatientSignUp() {
  const [email, setEmail] = useState("");	
  const [password, setPassword] = useState("");	
  const [name, setName] = useState("");	
  const [patientid, setPatientid] = useState("");	

  const addToList = () => {	
    Axios.post("http://localhost:5000/signup-patient", {	
      email: email,	
      password: password,	
      name: name,	
      patientid: patientid,	
    });	
  };	

  return (	
    <>	
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>	
        Patient SignUp!!	
      </h1>	

      <div	
        style={{	
          display: "flex",	
          justifyContent: "center",	
          alignItems: "center",	
          height: "80vh",	
          width: "40vh 40vh",	
          border: "2px solid gray",	
          margin: "120px 540px 120px 540px",	
        }}	
      >	
        <Form onSubmit={addToList} style={{width:"30rem"}}>	
          <Form.Group className="mb-3" controlId="emailx">	
            <Form.Label style={{ fontFamily: "sans-serif" }}>Email</Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setEmail(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	

          <Form.Group className="mb-3" controlId="passwordx">	
            <Form.Label style={{ fontFamily: "sans-serif" }}>	
              Password	
            </Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setPassword(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	
          <Form.Group className="mb-3" controlId="namex">	
            <Form.Label style={{ fontFamily: "sans-serif" }}>Name</Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setName(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	
          <Form.Group className="mb-3" controlId="patientidx">	
            <Form.Label style={{ fontFamily: "sans-serif" }}>	
              patientId	
            </Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setPatientid(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	

          <div	
            style={{	
              display: "flex",	
              justifyContent: "space-between",	
              marginTop: "20px",	
            }}	
          >	
            <Button	
              variant="dark"	
              type="submit"	
              size="lg"	
              style={{ fontFamily: "sans-serif" }}	
            >	
              SignUp
            </Button>	
          </div>	
        </Form>	
      </div>	
    </>	
  );	

}

export default PatientSignUp;