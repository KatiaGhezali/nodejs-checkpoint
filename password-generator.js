const generatePassword = require("generate-password");

function createPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  console.log(password);
}

createPassword();
