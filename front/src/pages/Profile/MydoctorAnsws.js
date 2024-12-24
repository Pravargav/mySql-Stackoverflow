import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Appcontext } from "../../App";

function ReadbyDoctorId() {
  const [mydoctoransws, setMydoctoransws] = useState([]);
  const { doctorId } = useContext(Appcontext);

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/stackExchange/d/${doctorId}`
        );

        setMydoctoransws(response.data);
        console.log(doctorId);
      } catch (err) {
        console.log(err);
      }
    };

    fn();
  }, [doctorId]);

  console.log(mydoctoransws);
  return (
    <>
      <Card style={{ width: "90rem", margin: "10px 2px 10px 2px" }}>
        {mydoctoransws.map((ans) => (
          <ListGroup className="list-group-flush" key={ans.answerid}>
            <ListGroup.Item>
              {" "}
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex  justify-content-between align-items-center"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Featured
                  <div>
                    <Button
                      variant="secondary"
                      style={{ fontFamily: "sans-serif", margin: "5px" }}
                      size="sm"
                    >
                      like{" "}
                      <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                        9
                      </Badge>
                      <span
                        className="visually-hidden"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        likes
                      </span>
                    </Button>
                    <Button
                      variant="secondary"
                      style={{ fontFamily: "sans-serif", margin: "5px" }}
                      size="sm"
                    >
                      dislike{" "}
                      <Badge bg="dark" style={{ fontFamily: "sans-serif" }}>
                        9
                      </Badge>
                      <span
                        className="visually-hidden"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        dislikes
                      </span>
                    </Button>

                    <Button
                      size="lg"
                      variant="secondary"
                      type="submit"
                      style={{ fontFamily: "sans-serif", borderRadius: "0px" }}
                    >
                      Go to Question
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body style={{ fontFamily: "sans-serif" }}>
                  <blockquote className="blockquote mb-0">
                    <p style={{ fontFamily: "sans-serif" }}> {ans.text} </p>
                    <footer
                      className="blockquote-footer"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Someone famous in{" "}
                      <cite
                        title="Source Title"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Source Title
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
    </>
  );
}

export default ReadbyDoctorId;
