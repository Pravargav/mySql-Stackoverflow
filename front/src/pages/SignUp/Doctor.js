import Form from 'react-bootstrap/Form';
import React, { useState } from "react";	
import Button from "react-bootstrap/Button";	
import Col from "react-bootstrap/Col";	
import Axios from "axios";

function DoctorSignUp() {
  const [email, setEmail] = useState("");	
  const [password, setPassword] = useState("");	
  const [name, setName] = useState("");	
  const [doctorid, setDoctorid] = useState("");	
  const [mobilenum, setMobilenum] = useState("");	
  const [address, setAddress] = useState("");	
  const [specialisation, setSpecialisation] = useState("");	
  const [experience, setExperience] = useState(0);	

  const addToList = () => {	
    Axios.post("http://localhost:5000/signup-doctor", {	
      email: email,	
      password: password,	
      name: name,	
      doctorid: doctorid,	
      mobilenum: mobilenum,	
      address: address,	
      specialisation: specialisation,	
      experience: experience,	
    });	
  };	
  return (	
    <>	
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>	
        Doctor SignUp!!	
      </h1>	
      <div	
        style={{	
          display: "flex",	
          justifyContent: "center",	
          alignItems: "center",	
          height: "150vh",	
          width: "20vh 20vh",	
          border: "2px solid gray",	
          margin: "100px 440px 100px 440px",	
        }}	
      >	
        <Form onSubmit={addToList} style={{width:"40rem"}}>	
          <Form.Group className="mb-3" controlId="emailx" as={Col}>	
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

          <Form.Group className="mb-3" controlId="passwordx" as={Col}>	
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
          <Form.Group className="mb-3" controlId="namex" as={Col}>	
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

          <Form.Group className="mb-3" controlId="doctoridx" as={Col}>	
            <Form.Label style={{ fontFamily: "sans-serif" }}>	
              doctorId	
            </Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setDoctorid(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	

          <Form.Group className="mb-3" controlId="mobilenumx" as={Col}>	
            <Form.Label style={{ fontFamily: "sans-serif" }}>	
              mobileNum	
            </Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setMobilenum(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	

          <Form.Group className="mb-3" controlId="addressx" as={Col}>	
            <Form.Label style={{ fontFamily: "sans-serif" }}>	
              address	
            </Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setAddress(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	

          <Form.Group className="mb-3" controlId="specialisationx" as={Col}>	
            <Form.Label style={{ fontFamily: "sans-serif" }}>	
              specialisation	
            </Form.Label>	
            <Form.Control	
              type="text"	
              onChange={(e) => {	
                setSpecialisation(e.target.value);	
              }}	
              style={{	
                height: "50px",	
                borderColor: "black",	
                borderWidth: "1px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	
          <Form.Group className="mb-3" controlId="experiencex" as={Col}>	
            <Form.Label style={{ fontFamily: "sans-serif" }}>	
              experience	
            </Form.Label>	
            <Form.Control	
              type="number"	
              onChange={(e) => {	
                setExperience(e.target.value);	
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

export default DoctorSignUp;