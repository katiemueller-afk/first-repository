const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};
guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
};
guests.CICERO.pastGifts.push("Golden Lyre");
const antonyRegion = guests.ANTONY.region;
delete guests.CICERO;
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";
Question 1:
After executing Step 5, what will be the region of ANTONY in the original object?
,//The region will be Eqypt. We changed the variables in the object, so
//the reference still points to the object that now contains a new
//variable