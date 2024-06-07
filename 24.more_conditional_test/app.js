"use strict";
//test for equality and inequality with strings
console.log(" Equality Test", "Rabia Rehman" === "Rabia Rehman");
//test for Inequality
console.log(" Inequality Test", "Rabia Rehman" == "Rabia Rani");
//test using the lower case function
console.log("lower case test", "ABDUL REHMAN".toLowerCase() === "abdul rehman");
console.log("lower case test", "ABD-UL-REHMAN".toLowerCase() === "abdul rehman");
//numarical test involving equality and inequality 
console.log("Equality Test", 1000 === 1000);
//numarical test inequality 
console.log("In quality Test", 10 == 9);
//numarical test Greater than
console.log("Greater than ", 10000 > 100);
//numarical test Less than
console.log("Less than ", 10 < 100);
//numarical test Greater than and equal to test
console.log(" Greater than and equal to test", 10 >= 10);
//test using "and" and "or" operators
console.log("And operators test", 10 > 5 && 10 > 8);
//test using  "or" operators
console.log("Or operators test", 10 > 5 || 10 > 18);
//test an item is in a array
const myNumber = [1, 2, 3, 4, 5];
console.log("test an item is in a array ", myNumber.includes(2));
//test an item is not in a array
const myNum = [1, 2, 3, 4, 5];
console.log("test an item is not in a array ", myNumber.includes(10));
