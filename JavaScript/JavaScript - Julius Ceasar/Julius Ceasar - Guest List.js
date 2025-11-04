const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
guests.unshift("BRUTUS");
Question 1:
How can you verify that "BRUTUS" was added to the beginning of the array?
// You can verify through JS Code, or you can double-check which name is now first in the
//"guests" array with guests[0] since 0 is the index that identifies the first position
guests.push("AUGUSTUS", "LUCIA");
const spartacusIndex = guests.indexOf("SPARTACUS");
Question 2:
What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
// -1
const indexRemoval = guests.indexOf("CASSIUS")
guests.splice(indexRemoval, 1)
const firstThreeGuests = guests.slice(0,3);
const honoredGuest = guests.slice(0,1); //singles out the first guest/honored guest
const regularGuests = guests.slice(1); //groups the remaining guests together minus the honored guest
regularGuests.sort(); //alphabetizes the guest list minus the honored guest
const alphaOrder = honoredGuest.concat(regularGuests); //adds honored guest to the alphabetized guest list
