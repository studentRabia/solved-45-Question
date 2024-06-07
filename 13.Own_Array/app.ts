//====for loop====

let transportationMode:string[] =["Car","Motor cycle", "Bicycle","Bus"];
for (let i = 0; i < transportationMode.length; i++) {
console.log(`I would like a own a "${transportationMode[i]}"`);
}

//====for each loop====
transportationMode.forEach(mode => {
    console.log(`I WOULD LIKE A OWN A " ${mode} "`);
});

