import { useEffect, useState } from "react";
import { ILaunch, IResult, ISpace } from "../Interfaces/Interfaces";
import { escape } from "lodash";
import { Col, Container, Row } from "react-bootstrap";
import Flight from "./Flight";

const FetchFlight = () => {
  const [flight, setFlight] = useState<(ISpace & ILaunch & IResult)[]>([]);

  const fetchSpaceFlight = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      if (response.ok) {
        const arrayOfFlight = await response.json();
        console.log("array results", arrayOfFlight.results);
        setFlight(arrayOfFlight.results);
        console.log("flight", flight);
      } else {
        throw new Error("Errore nel recupero dei flight");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSpaceFlight();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Flight disponibili nel database:</h2>
        </Col>
      </Row>
      <Row>
        {flight.map((flight) => (
          <Flight flightData={flight} key={flight.id} />
        ))}
      </Row>
    </Container>
  );
};

export default FetchFlight;
