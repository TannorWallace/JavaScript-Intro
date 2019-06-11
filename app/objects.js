// 1. Write a function that will iterate over the properties of the provided object and return a new object with only the key/value pairs of the provided object whose value is truthy.
// Example:
// input: { firstName: "Theo", middleName: "", lastName: "Gerrard" }
// output: { firstName: "Theo", lastName: "Gerrard" }
// Hint: Utilize a for...in loop - 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Truthy Reference: https://developer.mozilla.org/en-US/docs/Glossary/Truthy


function truthyExtractor(object) {
  let output = {}
  for (const key in object) {
    if (object[key]) {
      output[key] = object[key];
    }
  }
  return output;
}

console.log(truthyExtractor(object));



// ------------------------------------------


// 2. Using dot and bracket notation modify the existing object values to replace the information with your own

let me = {
  'name': 'Jake Overall',
  'age': 29,
  'hair color': 'brown'
};

me.name = 'Tannor Wallace'
me.age = 31
me['hair color'] = 'bald'


// ------------------------------------------


// 3. Iterate over an object and add the property or key names to an array. Have the function return 
// the array of keys.
// Example:
// input: { 'name': "Jake Overall", 'age': 29, 'hair color': "brown" }
// output: [ 'name', 'age', 'hair color' ]




function objectKeys(object) {
  let newArray = []
  for (let key in object) {
    newArray.push(key)
  }
  return newArray;
}
objectKeys(me)