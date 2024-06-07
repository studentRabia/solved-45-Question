"use strict";
//=======for loop====
let members = ['Ahmed', 'Saba', 'Komal', 'Amna', 'kashf', 'Kashif', 'Jinah', 'Baber']; //Array
for (let i = 0; i < members.length; i++) {
    console.log(`Dear Frind '${members[i]}!' Would you like to learn Typescript today?`);
}
//======for each of loop====
members.forEach(member => {
    console.log(`Hi: "${member}" !How are you today?`);
});
