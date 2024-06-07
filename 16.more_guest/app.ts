let guestList:string[] = ["Ahmed","Najia","Shahrukh"];

console.log("Great news! I found a bigger dinner table!");

//unshift()
guestList.unshift("Muhammed Umer ");  //unshift will add element at  start

//splice()
//guestList.splice(1,0,"Shameem Begum")
guestList.splice(Math.floor(guestList.length/2),0,"Shameem Begum");       // add element at middle       //to avoide points values use Math.floor()

//push
guestList.push("Tanzeel ul Rehman");          //push will add element at last
//console.log(guestList);

// for(let i=0;i<guestList.length; i++){
//     console.log(`Dear ${guestList[i]},\n you are cordially invited to dinner`);  
// }


//for each
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
    
});
