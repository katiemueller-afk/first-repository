const randomDecimal = Math.random();
const range = 33 - 3 + 1; //31
const randomInRange = randomDecimal * range; //sets the range to 0-30 (31 would be excluded)
const randomInt = Math.floor(randomInRange); //removes the decimal to get a whole number between 0-30
const shiftValue = randomInt + 3; //shifts the range of the random number from 0-30 to 3-33
Question 1: Why did we add 1 to the difference between 33 and 3? //because normally the last integer is not included, 
// but we wanted 33 to be included, so we needed to add 1 for a total of 31 possible numbers including 3 through 33
Question 2: How does multiplying randomDecimal by range help us get a number within our desired range? //randomDecimal 
// chooses a whole number, and then range chooses a number between 3 and 33 which is our desired and set range
Question 3: Why do we use the Math.floor() function instead of other rounding methods like Math.round()?
//Math.floor() ensures the lowest possible random integer does not go below 3, and that the largest possible random integer
// does not exceed 33 as our designated range is 3 to 33
Question 4: How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33?
//without adding 3 to randomInt, the lowest possible integer possible would be 0. Since we want our desired range is 
// 3 to 33, adding 3 to randomInt ensures the lowest possible randomly-generated number is 3