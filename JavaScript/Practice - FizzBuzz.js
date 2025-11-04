//algorithm FizzBuzz, takes n, returns nothing:
	//if n is not a positive integer that is less than 100:
	//	print Error and stop

	//for each integer from 1 to n (both included):
		//if the number is divisible by 3:
		//	print Fizz
		//if the number is divisible by 5:
		//	print Buzz
		//if the number is divisible by 3 and 5:
		//	print FizzBuzz
		//if the number is not divisible by 3 or 5:
		//	print the number

function fizzBuzz (n) {
  if(!Number.isInteger(n) || n < 1 || n >= 100){
    console.error("error");
    return;
  }
  for(let i=1; i<=n; i++) {
    const remainderBy3 = i % 3;
    const remainderBy5 = i % 5;
    if remainderBy3 === 0 && remainderBy5 === 0){
      console.log("FizzBuzz");
    }
    else if(remainderBy3 === 0){
      console.log("Fizz");
    }
    else if(remainderBy5 === 0){
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
    }
  }

  //algorithm LetterCount, takes word, returns a dictionary with letter counts:
	//if word is not a string of alphabetical characters:
		//print Error and stop

	//create a dictionary to hold letter counts

	//for each letter in word:
		//if dictionary already has the letter:
	       // increment the count of the letter by 1
	    //else
		    //set the count of the letter to 1

	//return the dictionary that holds the letter counts

  function letterCount (word){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (typeof word !== "string"){
    console.error("Error");
    return;
  }
  for (const letter of word){
    if (!alphabet.includes(letter.toLowerCase()))
    {
      console.error("Error");
      return;
    }
  }
  let letterCounts = {};
  for (let letter of word)
  {
    let lowerCaseLetter = letter.toLowerCase();
    if (letterCounts[lowerCaseLetter] !== undefined){
      letterCounts[lowerCaseLetter]++;
    }
    else{
      letterCounts[lowerCaseLetter] = 1;
    }
  }
  return letterCounts;
}