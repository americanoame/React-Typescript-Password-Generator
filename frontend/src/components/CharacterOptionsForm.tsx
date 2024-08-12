import React from "react";
import { Form } from "react-bootstrap";
import { Options } from "../types";

interface CharacterOptionsFormProps {
  options: Options;
  handleOptionChange: (key: keyof Options, value: any) => void;
}

const CharacterOptionsForm: React.FC<CharacterOptionsFormProps> = ({ options, handleOptionChange }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{ fontSize: "20px" }}>Number of Characters</Form.Label>
        <Form.Control type="number" value={options.numberOfCharacters} onChange={(e) => handleOptionChange("numberOfCharacters", parseInt(e.target.value))} />
      </Form.Group>
      <small>Which options would you like?</small>
      <Form.Check className="mt-3" type="checkbox" label="Include Uppercase Letters" checked={options.includeUpper} onChange={(e) => handleOptionChange("includeUpper", e.target.checked)} />
      <Form.Check type="checkbox" label="Include Lowercase Letters" checked={options.includeLower} onChange={(e) => handleOptionChange("includeLower", e.target.checked)} />
      <Form.Check type="checkbox" label="Include Special Characters" checked={options.includeSpecial} onChange={(e) => handleOptionChange("includeSpecial", e.target.checked)} />
      <Form.Check type="checkbox" label="Include Numbers" checked={options.includeNumbers} onChange={(e) => handleOptionChange("includeNumbers", e.target.checked)} />
    </Form>
  );
};

export default CharacterOptionsForm;
