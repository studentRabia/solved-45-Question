import { log } from "console";

 let members: string [] =['Ahmed','Saba','Komal','Amna','kashf','Kashif','Jinah','Baber']; //Array
// printing Array
for(let i = 0; i < members.length; i++){
    //console.log(members[i]);
console.log(members[i].toUpperCase());     //--printing name in upper case
}


//------using for each loop  ----
//one by one printing array element
//members is array's variable name ,member is a variable name in which each name is storing and print
members.forEach(member => {
    console.log(member);
});
