"use strict";
//array magician name
let magician_names = ["Harry Poter", "Usman", "Jhon Deo"];
//print each magician name from array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//function to make magicians grate throuth map( ) modify array
function make_great(magicians) {
    return magicians.map(name => `the Great ${name}`);
}
//making a copy of orignal through slice()
let copy_magician_names = magician_names.slice();
//modify the copy array to include "The Great" with thier name
let copy_great_magicians = make_great(copy_magician_names);
//show both arrays
//original
console.log("Original Array: \n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array: \n");
show_magicians(copy_great_magicians);
//=========================================================
// let magicians:string[] = ["Ariba","Hoor","Noor","Usman"]
// function show_magicians(magician:string[]){
//   magicians.forEach(name => {
//     console.log(name);
//   });
// }
// // show_magicians(magicians)
// function make_grate(magicians:string[]){
//   let grateMagicition :string[]= [];
//   magicians.forEach(name => {
//     grateMagicition.push(`${name} the Grate`);
//   });
//   return grateMagicition;
// }
// let grateMagicition = make_grate(magicians.slice())
// console.log("original magicition");
// show_magicians(magicians)
// console.log("Copy Grate magicion");
//  show_magicians(grateMagicition)
