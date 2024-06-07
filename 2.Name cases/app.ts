import { log } from "console";

// Lower case :
let personName :string = "rAbia";
console.log("Lower Case :",personName.toLowerCase());

// Upper Case :
console.log("Upper Case :",personName.toUpperCase());

// Tittle Case :
console.log("Tittle Case :",personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

// 2nd method Tittle Case :
let person_Name :string = "RaBia robaB rEhman ";
console.log(`Tittle Case 2: ${person_Name.split(" ").map(item => item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()).join(" ")}`);













