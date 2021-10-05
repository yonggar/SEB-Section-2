class Grub {
  // TODO..
  constructor(){
    this.age=0
    this.color='pink'
    this.food='jelly'
    // this.age=age ? age : 0
    // this.color=color ? color : 'pink'
    // this.food=food ? food : 'jelly'
  }
  eat(){
    return `Mmmmmmmmm ${this.food}`
  }
}

module.exports = Grub;
