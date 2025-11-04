const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  const shift = shiftValue % alphabet.length;
  let shifted = "";

  // Step 1: Apply Caesar shift to letters only
  for (let char of message) {
    if (alphabet.includes(char.toLowerCase())) {
      const isUpper = char === char.toUpperCase();
      const newIndex = (alphabet.indexOf(char.toLowerCase()) + shift) % 26;
      let newChar = alphabet[newIndex];
      if (isUpper) newChar = newChar.toUpperCase();
      shifted += newChar;
    } else {
      shifted += char; // keep punctuation/spaces unchanged
    }
  }

  // Step 2: Insert random letter after every 2 characters (including non-letters)
  let encrypted = "";
  for (let i = 0; i < shifted.length; i++) {
    encrypted += shifted[i];
    if ((i + 1) % 2 === 0) {
      const randomLetter = alphabet[Math.floor(Math.random() * 26)];
      encrypted += randomLetter;
    }
  }

  return encrypted;
}

// Decrypt function
function decrypt(encryptedMessage, shiftValue) {
  const shift = shiftValue % 26;
  let cleaned = "";

  // Step 1: Remove every 3rd character (the random inserted letters)
  for (let i = 0; i < encryptedMessage.length; i++) {
    if ((i + 1) % 3 === 0) continue;
    cleaned += encryptedMessage[i];
  }

  // Step 2: Reverse Caesar shift for letters
  let decrypted = "";
  for (let char of cleaned) {
    if (alphabet.includes(char.toLowerCase())) {
      const isUpper = char === char.toUpperCase();
      let newIndex = alphabet.indexOf(char.toLowerCase()) - shift;
      if (newIndex < 0) newIndex += 26;
      let newChar = alphabet[newIndex];
      if (isUpper) newChar = newChar.toUpperCase();
      decrypted += newChar;
    } else {
      decrypted += char;
    }
  }

  return decrypted;
}

// --- Example usage ---

const secretMessage = `Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.`;

console.log(decrypt(secretMessage, 42));
