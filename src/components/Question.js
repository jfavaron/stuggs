import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Question extends React.Component {
  render() {
    return (
      <div className="questionBox">
        <Row className="d-flex justify-content-center">
          <Col>
            <h2>What Shape Is This?</h2>
          </Col>
        </Row>
      </div>
    );
  }
}
