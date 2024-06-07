"use strict";
let ailenColor = "Green";
//pass condition
if (ailenColor === "Green") {
    console.log("\n\tPlayer Just Earned 5 points For Green alien");
}
//fail condition
ailenColor = "Yellow";
if (ailenColor === "Green") { //because condition is false not printing any message 
    console.log("\nPlayer Just Earned '5' points"); // because else absent
}
