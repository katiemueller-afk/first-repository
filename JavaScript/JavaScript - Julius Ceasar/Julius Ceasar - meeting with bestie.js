const friend = "BRUTUS"
const cypherVariable = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const firstLetter = friend[0]
const index = alphabet.indexOf(firstLetter.toLowerCase());
Question 1 // the result is 1 because string indexes begin with 0
const cypherIndex = index + cypherVariable;
const codedPartyDetails = alphabet[cypherIndex];
Question 2 // % will start from 0 once the max # of positions are reached
alphabet.length // 26
const alphabetLength = alphabet.length;
const cypherIndex = (index + cypherVariable) % alphabetLength;
const codedPartyDetails = alphabet[cypherIndex]
const codedTeaser = "EUXWXV";
const teaserMessage = codedTeaser.slice(0, 3);
Teaser Message // EUX