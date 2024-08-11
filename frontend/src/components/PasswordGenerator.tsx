import { Row, Col, Form, Button } from 'react-bootstrap';
import { Options } from '../types';

interface PasswordGeneratorProps {
  options: Options;
  password: string;
  handleOptionChange: (key: keyof Options, value: any) => void;
  generatePassword: () => void;
}

const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ options, password, handleOptionChange, generatePassword }) => {
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
                <Form.Control type="number" value={options.numberOfCharacters} onChange={(e) => handleOptionChange('numberOfCharacters', parseInt(e.target.value))} />
              </Form.Group>

              <small>Which options would you like?</small>

              <Form.Check className="mt-3" type="checkbox" label="Include Uppercase Letters" checked={options.includeUpper} onChange={(e) => handleOptionChange('includeUpper', e.target.checked)} />
              <Form.Check type="checkbox" label="Include Lowercase Letters" checked={options.includeLower} onChange={(e) => handleOptionChange('includeLower', e.target.checked)} />
              <Form.Check type="checkbox" label="Include Special Characters" checked={options.includeSpecial} onChange={(e) => handleOptionChange('includeSpecial', e.target.checked)} />
              <Form.Check type="checkbox" label="Include Numbers" checked={options.includeNumbers} onChange={(e) => handleOptionChange('includeNumbers', e.target.checked)} />
              <Button variant="dark" style={{ color: 'rgb(252, 1, 1)' }} className="mt-3 w-100" onClick={generatePassword}>
                Generate Password
              </Button>
            </Form>
          </Col>

          <Col md={6} className=" flex-column align-items-center">
            <h6 className="text-center">PASSWORD</h6>
            <div className="password-box">
              <p>{password}</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PasswordGenerator;
