export const generatePassword = (options: {
    numberOfCharacters: number;
    includeUpper: boolean;
    includeLower: boolean;
    includeSpecial: boolean;
    includeNumbers: boolean;
  }): string => {

    const specialCharArray = "!@#$^&*()_-+=+".split("");
    const numberArray = "1234567890".split("");
    const upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");

    // Check for minimum number of characters
    if (options.numberOfCharacters < 8 || options.numberOfCharacters > 10) {
            alert("Password must be between 8 and 10 characters long."); 
            return ""; 
        }

    let possibleCharacters: string[] = [];
    let guaranteedCharacters: string[] = [];
  
    if (options.includeUpper) {
      possibleCharacters = possibleCharacters.concat(upperCaseArray);
      guaranteedCharacters.push(upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)]);
    }
  
    if (options.includeLower) {
      possibleCharacters = possibleCharacters.concat(lowerCaseArray);
      guaranteedCharacters.push(lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)]);
    }
  
    if (options.includeSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharArray);
      guaranteedCharacters.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
    }
  
    if (options.includeNumbers) {
      possibleCharacters = possibleCharacters.concat(numberArray);
      guaranteedCharacters.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
    }
  
    if (possibleCharacters.length === 0) {
      alert("You must select at least one character type.");
      return "";
    }
  
    let generatedPassword = "";
    for (let i = 0; i < options.numberOfCharacters; i++) {
      const randomChar = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      generatedPassword += randomChar;
    }
  
    // Replace the first characters in the password with the guaranteed characters
    guaranteedCharacters.forEach((char, index) => {
      generatedPassword = generatedPassword.substring(0, index) + char + generatedPassword.substring(index + 1);
    });
  
    return generatedPassword;
  };
  