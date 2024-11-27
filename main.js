// Create an arrow function
import sayMyColor from "./color.js"

import sayMyCountry from "./country.js"

import { sayMyFood, sayMyPet } from "./food.js"


let color = sayMyColor()
let pet = sayMyPet()
let country = sayMyCountry()
let food = sayMyFood()

console.log(color, pet, country, food)