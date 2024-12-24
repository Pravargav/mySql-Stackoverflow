import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { Appcontext } from "../../App";
import { useNavigate } from "react-router-dom";

function SearchQn() {
  const { ques, setRefId ,userType} = useContext(Appcontext);

  let navigate = useNavigate();
  const handleClick = async (qnid) => {
    try {
      setRefId(qnid);
      navigate("/myHome/referenceAnswer");
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick2 = async (qnid) => {
    try {
      setRefId(qnid);
      if(userType==="doctor"){
      navigate("/myHome/responseAnswer");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Card style={{ width: "100rem", margin: "10px 2px 10px 2px" }}>
        {ques.map((qns) => (
          <ListGroup className="list-group-flush" key={qns.questionid}>
            <ListGroup.Item>
              {" "}
              <Card style={{ borderRadius: "0" }}>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-between align-items-center"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Featured
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Answer+
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ fontFamily: "sans-serif" }}>
                    Special title treatment
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "sans-serif" }}>
                    {qns.text}
                    <Stack direction="horizontal" gap={2}>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.priority1}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.priority2}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.priority3}
                      </Badge>
                      <Badge
                        bg="dark"
                        style={{
                          fontFamily: "sans-serif",
                          borderRadius: "0px",
                        }}
                      >
                        {qns.priority4}
                      </Badge>
                    </Stack>
                  </Card.Text>
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif" }}
                    onClick={() => handleClick(qns.questionid)}
                  >
                    Go to Answers
                  </Button>
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{ fontFamily: "sans-serif" }}
                    onClick={() => handleClick2(qns.questionid)}
                  >
                    Give Response
                  </Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
}

export default SearchQn;
