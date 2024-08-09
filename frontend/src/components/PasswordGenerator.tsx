import { Row, Col, Form, Button } from 'react-bootstrap';

const PasswordGenerator: React.FC = () => {
  return (
    <>
      <div className="main-text">
        <h2>
          React-Typescript-<span>Password-Generator</span>
        </h2>
      </div>
      <div className="main-container">
        {/* <h3>Password Generator</h3> */}
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '20px' }}>Number of Characters</Form.Label>
                <Form.Control type="number" min="8" max="128" />
              </Form.Group>

              <small>Which options would you like?</small>

              <Form.Check className="mt-3" type="checkbox" label="Include Uppercase Letters" />
              <Form.Check type="checkbox" label="Include Lowercase Letters" />
              <Form.Check type="checkbox" label="Include Special Characters" />
              <Form.Check type="checkbox" label="Include Numbers" />
              <Button variant="dark" style={{ color: 'rgb(252, 1, 1)' }} className="mt-3 w-100">
                Generate Password
              </Button>
            </Form>
          </Col>

          <Col md={6} className=" flex-column align-items-center">
            <h6 className="text-center">PASSWORD</h6>
            <div className="password-box">
              <p>12345678</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PasswordGenerator;
