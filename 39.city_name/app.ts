//creating function with return value
function describe_cities(nameOfCity:string = "Karachi",nameOfCountry:string ="Pakista"):string{
return `${nameOfCity},${nameOfCountry}`
}
//calling the function and returned value
console.log(describe_cities("Isamabad","Pakistan"));
console.log(describe_cities("Lahore"));
console.log(describe_cities());
console.log(describe_cities("Dehli","India"));
console.log(describe_cities("Tehran","Iran"));

