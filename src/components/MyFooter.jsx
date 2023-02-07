import { Component } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <Row>
        <Col className="bg-light p-4">©BoooksAcme by Books-Enterprise</Col>
      </Row>
    );
  }
}

export default MyFooter;
