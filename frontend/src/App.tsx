import React, { useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import { Options } from "./types";
import { generatePassword } from "./passwordLogic";

const App: React.FC = () => {
  const [options, setOptions] = useState<Options>({
    numberOfCharacters: "" as unknown as number,
    includeUpper: false,
    includeLower: false,
    includeSpecial: false,
    includeNumbers: false,
  });

  const [password, setPassword] = useState<string>("");

  const handleOptionChange = (key: keyof Options, value: any) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  const handleGeneratePassword = () => {
    try {
      const newPassword = generatePassword(options);
      setPassword(newPassword);
      setOptions({
        numberOfCharacters: "" as unknown as number,
        includeUpper: false,
        includeLower: false,
        includeSpecial: false,
        includeNumbers: false,
      });
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <PasswordGenerator
      options={options}
      password={password}
      handleOptionChange={handleOptionChange}
      generatePassword={handleGeneratePassword}
    />
  );
};

export default App;
