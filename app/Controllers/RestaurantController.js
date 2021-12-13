import { Food } from "../Models/Food.js"

// BAD DONT DO THIS DATA BELONGS IN THE STATE
const tempFood = [
  new Food('burger', 1.5, '🍔'),
  new Food('pizza', 3.6, '🍕'),
  new Food('fries', 1, '🍟')
]

// PRIVATE
// underscore means 'private'
function _drawMenu() {
  let template = ''
  tempFood.forEach(f => template += f.printListItem())
  document.getElementById('menu').innerHTML = template
}

function _hunger() {
  // itterate over all animals and food--
}

function _startInterval() {
  setInterval(_hunger, 3000)
}

export class RestaurantController {
  // PUBLIC
  constructor() {
    _drawMenu()
  }

  order(name) {
    console.log(name)
    // NOTE this is the service job not the controller so don't do this....
    const foodItem = tempFood.find(f => f.name === name)
    foodItem.ordered++
    //
    _drawMenu()
  }
}