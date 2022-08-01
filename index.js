// Example 1

const outerFunction = (function (){
  const name = "juma mdimu"
  return function (){
    console.log(`Hi ${name}`)
  }
})()

outerFunction()

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
