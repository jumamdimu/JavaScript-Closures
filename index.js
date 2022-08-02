// Example 1

const outerFunction = (function (){
  const name = "juma mdimu"
  return function (){
    console.log(`Hi ${name}`)
  }
})()

outerFunction()


const a = (function(){
  let x = 10
  return function (c){
    return x * c
  }
})()

console.log(a(3)) // 30

//If outer function is again nested inside other function it will again form a closure with that function
function outer (){
  var a = 10
  function inner (){
    console.log(a)
  }
  return inner
}

const result = outer() // this returns inner function
console.log(result())
outer()()

function outer1 (b){ 
  function inner (){
    console.log(a, b)
  }
  var a = 10
  return inner
}

outer1("hello")() // 10 hello

// Example 2

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1; 
    return counter
  }
})();

add();
add();
add();

// the counter is now 3

// Example 3

function outerFunction(outer_variable){
  return function innerFunction(inner_variable){
    console.log("outer variable: ", outer_variable)
    console.log("inner variable: ", inner_variable)
  }
}

const newFunction = outerFunction("outer")
newFunction("inner")
outerFunction("outer")("inner")


// Example 4

const sum = function (a){
  return function(b){
    return function (c){
      return (d) => a + b + c + d
    }
  }
}
const sum1 = (a) => (b) => (c) => (d) => a + b + c + d // etc
const sum2 = (a) => (b) => () => a + b
const sum3 = (a) => (b) => b ? a + b : a

const answer = sum(2)(3)(4)(5)
console.log(answer) // 14
const answer1 = sum1(2)(2)(3)(4)
console.log(answer1) // 11
const answer2 = sum2(2)(2)()
console.log(answer2) // 4
const answer4 = sum3(3)(4)
console.log(answer4) // 7
const answer3 = sum3(3)()
console.log(answer3) // 3
