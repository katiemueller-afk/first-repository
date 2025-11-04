const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let locationStart = "";
if (emblemClue1 === "Eagle") {
    locationStart = "Forum";
}
else if (emblemClue1 === "Lion") {
    locationStart = "Colosseum";
}
else {locationStart = "Villa";}
if (emblemClue2 === "Laurel" && locationStart === "Forum") 
    {
    locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa") 
    {
    locationStart += "of Pompey";
}
switch (emblemClue3)
{
    case 7:
        locationStart += "North";
        break;
    case 3:
        locationStart += "South";
        break;
    case 9:
        locationStart += "East";
        break;
    case 4: 
        locationStart += "West";
        break;
}
Question: Why is it important to be careful when using == (double equals) instead of ===
(tripple equals) in our conditionals?
// double equals checks for equality of value, not equality of type. The information is converted to a common type and them compared, whereas
// === considers strict equality, which includes type. In other words, the type must match in order to produce a true result.
// Additionally, the == may "read" the information incorrectly and produce an inaccurate result.