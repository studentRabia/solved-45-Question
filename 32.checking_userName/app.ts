let current_users:string[]=["Ali","Rabia","Saima","Nadir","Shan","Jahnger"];

let new_users:string[]=["Umer","Raheem Baksh","Shameem","ali","Rabia"];

new_users.forEach((newUser)=>{
    let our_condition = current_users.some((current_one_user) => current_one_user.toLowerCase() === newUser.toLowerCase())
    if(our_condition) {
    console.log(`${newUser.toUpperCase()} will need to enter a new user name.`);  
} else{
    console.log(`${newUser.toUpperCase()} is avilable.`);
}
});
