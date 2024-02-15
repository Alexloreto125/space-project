import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>SpaceFlight</h1>
        </Col>
        <Col>
          <Link to="/flight">Vai a flight</Link>
        </Col>
        <Col>
          <Link to="/">Vai a Home</Link>
          {/* <Link to="/details"></Link> */}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
