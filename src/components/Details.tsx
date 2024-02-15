import { useEffect, useState } from "react";
import { ILaunch, IResult, ISpace } from "../Interfaces/Interfaces";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Spinner } from "react-bootstrap";

const Details = () => {
  const [flightDetails, setFlightDetails] = useState<
    (ISpace & ILaunch & IResult) | null
  >(null);
  const { id } = useParams();
  console.log("id", id);

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${id}`
      );
      if (response.ok) {
        const objectOfDetails = await response.json();
        setFlightDetails(objectOfDetails);
        console.log(objectOfDetails);
      } else {
        throw new Error("Errore nel recupero dei Details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);
  return (
    <div>
      <h2>Details Page</h2>
      <div className="d-flex ">
        <Link to="/flight" className="me-4">
          <Button variant="primary"> Return to Flight</Button>
        </Link>
        <Link to="/">
          <Button variant="secondary">Return to Home</Button>
        </Link>
      </div>

      {flightDetails ? (
        <Card style={{ height: "100%" }}>
          <Card.Img variant="top" src={flightDetails.image_url} />
          <Card.Body>
            <Card.Title>{flightDetails.title}</Card.Title>
            <Card.Text>{flightDetails.summary}</Card.Text>
            <Card.Text>{flightDetails.published_at}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <>
          <p>Caricamento dei dettagli...</p>
          <Spinner variant="warning" animation="border"></Spinner>
        </>
      )}
    </div>
  );
};

export default Details;
