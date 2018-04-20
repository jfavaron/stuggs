import React from 'react';
import { Row, Col } from 'reactstrap';
import star from '../star.svg';

export default class Subject extends React.Component {
  render() {
    return (
      <div className="subjectBox">
        <Row className="d-flex justify-content-center">
          <Col>
            <img src={star} className="subject" alt="logo" />
          </Col>
        </Row>
      </div>
    );
  }
}
