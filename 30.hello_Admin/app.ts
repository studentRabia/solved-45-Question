let users:string[]=["Admin","Amna","Saima","Kashf","Najia"]


users.forEach(userName =>{
    if(userName === "Admin"){
        console.log((`\nHello ${userName}, Would You like to see a status report?\n`));
    }else{
    console.log(`Hello "${userName}", Thank you  for logging in again`);
        
    }
})