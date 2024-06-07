"use strict";
let guestList = ["Ahmed", "Amna", "kashf", "Najia", "Shahrukh", "Abdulla Sheikh", "Muzafer"];
//print message
console.log(`Unfortunately! The New Dinner Table Wont Arrive So We Can Invite Only Two(2) guests.\n`);
guestList.unshift("Boobi", "Noman");
//print message updated list
console.log(`Updated list of guest: ${guestList}\n`);
//for loop
//remove guest from list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Dear! ${removedGuest}, You are unfortunatly not invited for the Dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear! ${guestList[i]}, You are still invited for the Dinner.`);
}
// guestList.splice(0,2)
console.log(" \nCurrent  inviting to dinner (GuestList): \n", guestList);
console.log(" \nCurrent number of people are inviting to dinner (GuestList): \n", guestList.length);
