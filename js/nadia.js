var person = {
  firstName: "Nadia",
  lastName: "Shutak",
  friends:  ["Tanya", "Petya", "Olya", "Katya", "Ihor"],
  sayHi: function () {
    return "Hello " + person.firstName + " " + person.lastName;
  }
}

console.log(person.sayHi());
console.log(person.friends);
console.log(person);

person.friends.push("Olena");

console.log(person.friends);

person.friends.unshift("Stepan");

console.log(person.friends);

person.firstName = prompt("What is your first name?");
person.lastName = prompt("What is your last name?");

console.log(person);

// well done УРА!!!!!!!!!!!!!!!!!!
alert(person.sayHi());
