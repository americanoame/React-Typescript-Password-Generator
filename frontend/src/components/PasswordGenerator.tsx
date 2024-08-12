import { Row, Col, Button } from "react-bootstrap";
import { Options } from "../types";
import CharacterOptionsForm from "../components/CharacterOptionsForm";

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
        <Row>
          <Col md={6}>
            <CharacterOptionsForm options={options} handleOptionChange={handleOptionChange} />
            <Button variant="dark" style={{ color: 'rgb(252, 1, 1)' }} className="mt-3 w-100" onClick={generatePassword}>
              Generate Password
            </Button>
          </Col>
          <Col md={6} className="flex-column align-items-center">
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
