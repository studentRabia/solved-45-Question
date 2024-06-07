"use strict";
let users = ["Admin", "Amna", "Saima", "Kashf", "Najia"];
//     if(users.length === 0){
//         console.log(("\nWe need to find some user\n"));
//     }
// else{
//     users.forEach(user => {
//         console.log(`Hellow ${user}, Thank you for loggin`);
//     });
// }
//2nd if the list is empty, print the message "w need to find some users!"
// console.log(`\n2nd condition if the list is empty, print the message "w need to find some users!"`);
if (users.length === 0) {
    console.log(("\nWe need to find some user\n"));
}
else {
    users = [];
    console.log("All user has been removed ", users.length);
}
