const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Helper function: shift a single character by shiftValue
function shiftChar(char, shiftValue) {
  const isUpper = char === char.toUpperCase();
  const lowerChar = char.toLowerCase();

  // Check if character is in alphabet
  const index = alphabet.indexOf(lowerChar);
  if (index === -1) {
    // Non-alphabet character, return as is
    return char;
  }

  // Calculate shifted index with wrap-around using modulo
  // Use ((index + shiftValue) % 26 + 26) % 26 to handle negative shifts correctly
  const shiftedIndex = ((index + shiftValue) % 26 + 26) % 26;

  const shiftedChar = alphabet[shiftedIndex];
  // Preserve original case
  return isUpper ? shiftedChar.toUpperCase() : shiftedChar;
}

// Encrypt function
function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let lettersCount = 0; // Counter for inserting random letters

  for (let char of message) {
    // Shift the character if it's a letter
    const shiftedChar = shiftChar(char, shiftValue);
    encryptedMessage += shiftedChar;

    // If it's a letter (shiftedChar in alphabet ignoring case), increment counter
    if (alphabet.includes(shiftedChar.toLowerCase())) {
      lettersCount++;
    }

    // After every 2 letters, insert a random letter
    if (lettersCount === 2) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      encryptedMessage += alphabet[randomIndex];
      lettersCount = 0; // Reset counter
    }
  }

  return encryptedMessage;
}

// Decrypt function
function decrypt(encryptedMessage, shiftValue) {
  let cleanedMessage = "";

  // We know after every 2 letters, a random letter was inserted.
  // So to clean the message, skip every 3rd letter.
  // We'll count only letters and non-letters separately to avoid errors.
  // But inserted letters are only after every 2 letters, so pattern is:
  // Keep 2 letters, skip 1 letter, repeat.

  let lettersCount = 0;

  for (let i = 0; i < encryptedMessage.length; i++) {
    const char = encryptedMessage[i];

    if (alphabet.includes(char.toLowerCase())) {
      lettersCount++;

      if (lettersCount % 3 === 0) {
        // This character is the inserted random letter, skip it
        continue;
      } else {
        // It's an original encrypted letter, add to cleaned message
        cleanedMessage += char;
      }
    } else {
      // Non-alphabet character - add as is and reset lettersCount?
      // But original spec says non-alphabet chars are passed as is, no inserted letters after them.
      // So just add it and reset lettersCount? No, we must NOT reset lettersCount,
      // because the inserted letters count only alphabetic letters.

      cleanedMessage += char;
    }
  }

  // Now shift letters back by shiftValue
  let decryptedMessage = "";
  for (let char of cleanedMessage) {
    decryptedMessage += shiftChar(char, -shiftValue);
  }

  return decryptedMessage;
}

// Testing the functions with small examples

// const encrypted = encrypt("Hello World!", 3);
// console.log("Encrypted:", encrypted);
// console.log("Decrypted:", decrypt(encrypted, 3));

// Decrypt the given secret message with shift 42

const secretMessage = `Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.`;

const decryptedSecret = decrypt(secretMessage, 42);
console.log("Decrypted Secret Message:\n", decryptedSecret);

//Possible Answer: Seek the midnight shadow of Romulus and peace. There, decipher the code 'Aurelius' in the whiskers. The river key unveils the sun our launch hacafnjl earns and glory to tip the next quest.

