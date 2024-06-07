"use strict";
function describe_cities(nameOfCity = "Karachi", nameOfCountry = "Pakista") {
    console.log(`${nameOfCity} is in ${nameOfCountry}.`);
}
describe_cities();
describe_cities("Lahore");
describe_cities("Dobi", "UAE");
describe_cities("Tokyo", "Japan");
describe_cities("Dehli", "India");
