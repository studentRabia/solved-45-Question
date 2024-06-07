let age =25;
//if the person is less than 2 year,print a message that the person is a baby.

if(age<=2){
    console.log("The person is less than 2, year person is a baby.");
}else if(age >2 && age<=4){
    console.log("The person is toddler.");          //Test The person is toddler
}else if(age >4 && age<=13){
    console.log("The person is kid.");              //Test The person is kid
}else if(age >13 && age<=20){
    console.log("The person is teenager.");         //Test The person is teenager
}else if(age >20 && age<=65){
    console.log("The person is adult.");            //Test The person is adult.
}else if(age >65 && age<=75){
    console.log("The person is elder.");            //Test The person is elder          //The person is adult.
}else{
    
    console.log(`person is seniour citizen.`);
    
}