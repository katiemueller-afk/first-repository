const alphabet = "abcdefghijklmnopqrstuvwxyz";

function shiftChar(char, shiftValue) {
  const lowerChar = char.toLowerCase();
  if (!alphabet.includes(lowerChar)) return char;

  const shiftedIndex = (alphabet.indexOf(lowerChar) + shiftValue) % alphabet.length;
  const resultChar = alphabet[shiftedIndex < 0 ? shiftedIndex + 26 : shiftedIndex];

  return char === char.toUpperCase() ? resultChar.toUpperCase() : resultChar;
}

function decrypt(encryptedMessage, shiftValue) {
  let cleaned = "";

  // Step 1: Remove every third character (since every 2 chars had a random one inserted)
  for (let i = 0; i < encryptedMessage.length; i++) {
    // Keep two characters, skip one
    if ((i + 1) % 3 !== 0) {
      cleaned += encryptedMessage[i];
    }
  }

  // Step 2: Reverse Caesar shift (case-sensitive)
  let decrypted = "";
  for (let char of cleaned) {
    decrypted += shiftChar(char, -shiftValue);
  }

  return decrypted;
}

const encryptedMessage = `Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.`;

const shiftValue = 42 % alphabet.length; // = 16
const decryptedMessage = decrypt(encryptedMessage, shiftValue);

console.log("Decrypted Message:\n", decryptedMessage);

