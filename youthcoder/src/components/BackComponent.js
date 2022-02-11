import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/forum">
          <Button color="light" className="btn btn-outline-secondary">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;
