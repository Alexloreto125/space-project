import { Button, Card, Col } from "react-bootstrap";
import { ISpace } from "../Interfaces/Interfaces";
import { IResult } from "../Interfaces/Interfaces";
import { ILaunch } from "../Interfaces/Interfaces";
import { Link } from "react-router-dom";

const Flight = ({ flightData }: { flightData: ISpace & IResult & ILaunch }) => {
  return (
    <Col xs={12} md={6} className="mb-3">
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={flightData.image_url} />
        <Card.Body className="d-flex flex-column ">
          <Card.Title>{flightData.title}</Card.Title>
          <Card.Text>{flightData.summary}</Card.Text>
          <Card.Text>{flightData.published_at}</Card.Text>
          <Link to={`/details/${flightData.id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Flight;
