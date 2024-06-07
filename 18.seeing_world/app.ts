let placeTovisit: string [] = ["Tashqand","UAE","New york" ,"Japan","Italy"]

//print in original order
console.log("\nOriginal order: ",placeTovisit);

 //print array in alphabetic order
 console.log("\nAlphabetical Order: ",[...placeTovisit].sort());            //[...array name] = spread oprator = aik array ko dosray order or aik object ko dosry object ma add kar deta h

 //array in original order printing
 console.log("\nOriginal order: ",placeTovisit);

// reverse alphabetical order
console.log("\nReverse Order: ",[...placeTovisit].sort().reverse());

 //array is stil original
 console.log("\nOriginal order: ",placeTovisit);

 //change original array order

 console.log("\nReverse order changed: ",placeTovisit.reverse());
 

 //reverse back origina order
 console.log("\nOriginal order: ",placeTovisit.reverse());

//sort and print
console.log("\nAlphabetical Order: ",placeTovisit.sort());

//reverse Alphabetical Order

console.log("\nReverse Order: ",placeTovisit.sort().reverse());
