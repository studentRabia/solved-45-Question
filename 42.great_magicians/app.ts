

let magician_names :string[]=["Harry Poter" ,"Bush Deo","Jhon Deo"]

function show_magicians(magician:string[]){
  magician.forEach(name => {
    console.log(name);
    
  });
}


function magician_grate(magicianName:string[]){
  for(let i=0;i<magicianName.length;i++){
    magicianName[i] =magicianName[i] + " the Great"
  }
}
magician_grate(magician_names)  //modifies the original array
show_magicians(magician_names)  //show modified

