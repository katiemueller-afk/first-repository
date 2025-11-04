//Your task is to craft two intricate functions: one that encrypts a message
//in the spirit of Caesar's Cipher but with added layers of complexity and
// another that decrypts such messages, unveiling their hidden content.
console.log("hello"); //sanity check
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function encrypt (message, shiftValue){
  const shift = shiftValue % alphabet.length; 
  let shifted = ""; //applying shift separately from random letter insertion
  for (let character of message) { //Step 1
    if (alphabet.includes(character.toLowerCase())) {
      const upper = character === character.toUpperCase(); 
      const shiftedIndex = (alphabet.indexOf(character.toLowerCase()) + shift) % alphabet.length;
      let shiftedCharacter = alphabet[shiftedIndex];
      if (upper) shiftedCharacter = shiftedCharacter.toUpperCase(); //maintaining capitalization when necessary
      shifted += shiftedCharacter; //marrying the shifted uppercase letters with shifted lowercase
    } else {
      shifted += character; //non-letters pass through the string
    }
  }
    let encrypted = ""; //producing an encrypted message, now we will insert random letters after every 2 characters
  for (let i = 0; i < shifted.length; i++) { //Step 2
    encrypted += shifted[i];
    if ((i + 1) % 2 === 0) { //identifying the location for random letters i.e. after every 2 characters
      const randomLetter = alphabet[Math.floor(Math.random() * 26)]; //random whole integer of the alphabet
      encrypted += randomLetter; //combining the encrypted message with the random letters
    }
  }
  return encrypted;
}
console.log(encrypt("Take a plaintext message and a shift value and return an encrypted string.",42)); //Result of Steps 1 and 2

function decrypt(encryptedMessage, shiftValue) {
  const shift = shiftValue % alphabet.length;
  let randosRemoved = ""; //removing inserted randoms before shifting back
  for (let i = 0; i < encryptedMessage.length; i++) { //loops over the encrypted message
    if ((i + 1) % 3 === 0) continue; //skip every 3rd character
    randosRemoved += encryptedMessage[i]; //our encrypted message without the randos
  }
  let decrypted = "";
  for (let character of randosRemoved) {
    if (alphabet.includes(character.toLowerCase())) { //checking if the character is a letter or non-letter by looping over lowercase alphabet
      const upper = character === character.toUpperCase(); //naming capital letters
      let shiftedIndex = alphabet.indexOf(character.toLowerCase()) - shift;
      if (shiftedIndex < 0) shiftedIndex += alphabet.length; //when shifting back, cannot go below 0 which is the first index in our alphabet
      let shiftedChar = alphabet[shiftedIndex];
      if (upper) shiftedChar = shiftedChar.toUpperCase(); //maintaining capitalization
      decrypted += shiftedChar;
    } else {
      decrypted += character; //passing any non-letters back into the string
    }
  }
  return decrypted;
}

let originalString = "Take a plaintext message and a shift value and return an encrypted string.";
console.log("Original String:", originalString);

let encryptedString = encrypt(originalString, 3);
console.log("Encrypted String:", encryptedString);

const decryptedString = decrypt(encryptedString, 3);
console.log("Decrypted String:", decryptedString);

let stepOneExample  = "Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri.";
console.log("Step 1 Example:", stepOneExample)

let decryptedExample = decrypt(stepOneExample, 42);
console.log("Decrypted Example:", decryptedExample);

const secretMessage = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
console.log("Encrypted Secret Message:", secretMessage);

let decryptedSecretMsg = decrypt(secretMessage, 42);
console.log("Decrypted Secret Message:", decryptedSecretMsg);
console.log("Which Slack Channel do I message 'Aurelius' to, and what is supposed to happen?") //just being silly putting this in console.log, 
// but seriously, not sure where to post the word Aurelius and if I'm supposed to get something back in return??


