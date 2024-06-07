"use strict";
//array magician name
let magician_name = ["Harry Poter", "Bush Deo", "Jhon Deo"];
//print each magician name from array
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
//call the function to print magicition name
show_magicians(magician_name);
