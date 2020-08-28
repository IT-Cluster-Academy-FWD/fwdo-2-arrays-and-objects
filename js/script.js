if (true) {
  var lastName = "test";
}

console.log(lastName);

// es 6
if (true) {
  let fistName = "test";
}

// functions F = m * a

function calculateForce(mass, acceleration) {
  return mass * acceleration;
}

console.log(calculateForce(70, 10));


// double functions
function multiplyByNineFifths(number) {
  return number * (9/5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

var temp = 15;
console.log(getFahrenheit(temp));

// Objects

const user = {
  firstName: 'John',
  lastName: 'Doe',
  sayHi: function () {
    return "Hello I'm " + user.firstName + " " + user.lastName;
  },
};

console.log(user.sayHi())


// Array
const users = ['Jack', 'Mike', 'Jane', 'Bob'];

users.push('Chris');

users.unshift('Jim');

console.log(users.indexOf("Mike"));


