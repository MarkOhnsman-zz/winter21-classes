// export allows the class to be used in other files by 'importing it'
export class Food {
  // method that runs on instantiation
  constructor(name, price, emoji) {
    // this is a reference to the instance being created
    // (whatever is left of the '.' at calltime)
    this.name = name
    this.price = price
    // if the value always starts the same, simply hard code it
    this.ordered = 0
    this.emoji = emoji
  }

  printListItem() {
    return `<li onclick="restaurantController.order('${this.name}')">${this.name}${this.emoji}: $${this.price.toFixed(2)} (${this.ordered})</li>`
  }
}