import React from 'react';
import { Row, Col, Button } from 'reactstrap';

export default class Checker extends React.Component {
  render() {
    return (
      <div className="checkerBox">
        <Row className="d-flex justify-content-center">
          <Col><Button color="success">Success</Button></Col>
          <Col><Button color="danger">Incorrect</Button></Col>
        </Row>
      </div>
    );
  }
}
