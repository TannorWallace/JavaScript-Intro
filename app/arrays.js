// 1. Add the following people to the contacts array.
let contacts = [];

let jake = {
  name: 'Jake Overall',
  email: 'jake.overall@boisecodeworks.com',
  title: 'founder'
};
let matt = {
  name: 'Matt Overall',
  email: 'matt.overall@boisecodeworks.com',
  title: 'founder'
};

let mark = {
  name: 'Mark Ohnsman',
  email: 'mark@boisecodeworks.com',
  title: 'instructor'
};
let darryl = {
  name: 'Darryl Kilzer',
  email: 'darryl@boisecodeworks.com',
  title: 'instructor'
};
let tom = {
  name: 'Tom Day',
  email: 'tom@boisecodeworks.com',
  title: 'instructor'
};
contacts = []
// add to the array below here
contacts[0] = jake
contacts[1] = matt
contacts[2] = mark
contacts[3] = darryl
contacts[4] = tom
console.log(contacts)





// ------------------------------------------


// 2. What is the length of contacts at this moment? Assign the anwser to the value of length.


let length = contacts.length;// **your code here on the right side of the variable declaration and assigment**


// ------------------------------------------




// 3. Woops! After adding all of those people to the same contacts list you realized you need a list
// of just the instructors. Populate the variable provided (instructors) using the contacts array. 


let instructors = [mark, darryl, tom];
