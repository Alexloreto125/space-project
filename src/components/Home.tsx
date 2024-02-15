import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1>SpaceFlight</h1>
        </Col>
        <Col>
          <Link to="/flight">
            <Button variant="primary"> Vai a Flight</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
