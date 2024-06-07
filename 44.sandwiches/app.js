"use strict";
// //define a function with a arest parameter 
// function make_sandwich(...items:string[]){
// console.log("\n Making a sandwich with the followinh item: \n");
// items.forEach(singleItem => console.log(singleItem));
// console.log("\nNow enjoy the sandwish");
// }
// //call the function 3 time 3 different argment
// make_sandwich("Chicken","Cheese","Mayo","Egg")
// make_sandwich("Bread","Butter")
// make_sandwich("Chicken","Cheese","Mayo","Egg","Bread","Butter","Patty")
function make_sandwich(...item) {
    console.log(`Making a sandwich with : ${item.join(',')}.`);
}
make_sandwich("Chicken", "Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Chicken", "Cheese", "Mayo", "Egg", "Bread", "Butter", "Patty");
