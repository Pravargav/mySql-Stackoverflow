import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";	
import Axios from "axios";	
import { useNavigate } from "react-router-dom";	

function DoctorLogIn() {
  let navigate = useNavigate();	
  const [email, setEmail] = useState("");	
  const [password, setPassword] = useState("");	

  const handleSubmit = async (event) => {	
    event.preventDefault();	
    try {	
      const res = await Axios.post("http://localhost:5000/login-doctor", {	
        email,	
        password,	
      });	
      if (res.data.message === "success") {	
        window.localStorage.setItem("doctorId", res.data.id);	
        window.localStorage.setItem("userType", "doctor");	

        navigate("/myHome");	
      } else {	
        navigate("/");	
      }	
    } catch (error) {	
      console.error(error);	
    }	
  };	
  return (	
    <>	
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>	
        Doctor Login!!	
      </h1>	
      <div	
        style={{	
          display: "flex",	
          justifyContent: "center",	
          alignItems: "center",	
          height: "40vh",	
          width: "50vh 50vh",	
          border: "2px solid gray", // Add a black border	
          margin: "120px 540px 120px 540px", // Add margin around the component	
        }}	
      >	
        <Form onSubmit={handleSubmit}>	
          <Form.Group className="mb-3" controlId="emailx">	
            <Form.Label size="lg" style={{ fontFamily: "sans-serif" }}>	
              Email	
            </Form.Label>	
            <Form.Control	
              onChange={(e) => {	
                setEmail(e.target.value);	
              }}	
              type="text"	
              size="lg"	
              style={{	
                height: "50px",	
                borderRadius: "0",	
                borderColor: "black",	
                borderWidth: "2px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	

          <Form.Group className="mb-3" controlId="passwordx">	
            <Form.Label size="lg" style={{ fontFamily: "sans-serif" }}>	
              Password	
            </Form.Label>	
            <Form.Control	
              onChange={(e) => {	
                setPassword(e.target.value);	
              }}	
              type="text"	
              size="lg"	
              style={{	
                height: "50px",	
                borderRadius: "0",	
                borderColor: "black",	
                borderWidth: "2px",	
              }}	
              autoComplete="true"	
            />	
          </Form.Group>	

          <div	
            style={{	
              display: "flex",	
              justifyContent: "space-between",	
              marginTop: "20px", // Adjust the margin as needed	
            }}	
          >	
            <Button	
              variant="dark"	
              type="submit"	
              size="lg"	
              style={{ fontFamily: "sans-serif" }}	
            >	
              Login	
            </Button>	
          </div>	
        </Form>	
      </div>	
    </>	
  );	

}

export default DoctorLogIn;