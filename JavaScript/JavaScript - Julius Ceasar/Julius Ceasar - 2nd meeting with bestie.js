const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedName = "";
for (let i = 0; i < friend.length; i++)
{
   const currentLetter = friend[i];
   const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
   const newIndex = (currentIndex + shiftValue) % alphabet.length;
   encryptedName += alphabet[newIndex].toUpperCase(); 
}
Question 1:
What advantage does using a loop provide over manually encrypting each letter?
//way less code since the loop with automatically run through each letter
//it changes/encrypts. Since the process is automated, there is also less
//room for coding errors and would not have to be adjusted if the name
//were to change.
Question 2:
Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?
//The % causes the loop to wrap back to the start so our loop does not stop
//at the end of the alphabet. This ensures all letters get encrypted with
//the continuous aphabet wrap.