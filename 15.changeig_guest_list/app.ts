//Q:15

let guestList:string[] = ["Juned","Amna","Najia","Shahrukh"];

for(let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]}, \nyou are cordially invited\n`);  
    }
    
//remove one person how can't make dinner and print

//----
let unable :string =guestList[0];

console.log(`${unable},Is not comming to the dinner\n`);

let new_gest:string = "Ahmed"
guestList[0] =new_gest;
//console.log(guestList);



//for loop
for(let i=0;i<guestList.length;i++){
console.log(`Dear ${guestList[i]}, \nyou are cordially invited\n`);

}


// //2nd method
console.log(`${unable},Is not comming to the dinner\n`);

 guestList.splice(0,1,"Imran khan")
 guestList.forEach(guest => {
    console.log(`Dear ${guest}, \nyou are cordially invited\n`);
    
 });






