//define a function to creat a car object with optional options...
function create_car(manufacturer, model, ...options) {
    // intialize a car object with manufacturer and modle
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    //add additonal option to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let my_car = create_car("Toyota", "corrola", "color:black", "sunroof:true");
let my_car1 = create_car("Toyota", "corrola", "color:black", "sunroof:true", "year:2024", "text:paid");
//printing
console.log(my_car);
console.log(my_car1);
export {};
