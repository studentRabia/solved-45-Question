"use strict";
let guestList = ["Ahmed", "Amna", "kashf", "Najia", "Shahrukh", "Abdulla Sheikh", "Muzafer"];
//print message
console.log(`Unfortunately! The New Dinner Table Wont Arrive So We Can Invite Only Two(2) guests.\n`);
//for loop
//remove guest from list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, We cant invite you for dinner.`);
}
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still inivited to dinner.`);
});
//console.log(guestList);
guestList.splice(0, guestList.length);
console.log("Current GuestList: ", guestList);
