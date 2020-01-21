const User = {
  init: function(name){
    this.name = name
    return this
  },
  getGreeting: function(){
    return `Hello, ${this.name}`
  }
}



var peter = User.init( "Peter" )

console.log({peter})
// console.log(peter)

var greeting = peter.getGreeting()

console.log( greeting )

// Should output "Hello, Peter"
