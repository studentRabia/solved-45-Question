"use strict";
let magician_names = ["Harry Poter", "Bush Deo", "Jhon Deo"];
function show_magicians(magician) {
    magician.forEach(name => {
        console.log(name);
    });
}
function magician_grate(magicianName) {
    for (let i = 0; i < magicianName.length; i++) {
        magicianName[i] = magicianName[i] + " the Great";
    }
}
magician_grate(magician_names); //modifies the original array
show_magicians(magician_names); //show modified
