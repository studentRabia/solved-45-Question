//define arry of guest
//for loop

let guestList:string[] = ["Ahmed","Najia","Shahrukh"];
for(let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]} \nIts pleaser to invite you to dinnier\nThank you\n`);
    
}


//invit each guest for dinner
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You are Corrially invited to Dinner.`);
});



