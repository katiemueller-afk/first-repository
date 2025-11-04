const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const guests = {
function encryptLetter (letter, shift)(
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}
function encryptMessage (word, shift){
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++){
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}
function decryptLetter (letter, shift){
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}
function decryptMessage (word, shift){
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++){
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}
//Question:
//If Caesar encrypts the word "BRUTUS" using our encryptMessage function
// and then decrypts the result using our decryptMessage function, 
// will he get "BRUTUS" back? Why or why not?
//Answer:
//Yes, Ceasar would simply perform the decryptMessage function, which is the
// opposite function of the encryption, so the decryption cancels out the
//ecryption function to get the original message