import { RestaurantController } from "./Controllers/RestaurantController.js"

console.log("main")
// // in order to use a class we must instantiate it (new it up)
// const burger = new Food('burger', 1.5)
// const cheeseburger = new Food('cheeseburger', 1.6)
// const fries = new Food('fries', 1)

// const menu = [burger, cheeseburger, fries]

// menu.forEach(f => f.print())


const restaurantController = new RestaurantController()

// attach to global scope
window['restaurantController'] = restaurantController