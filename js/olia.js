var person = {
  firstName: "Olha",
  lastName: "Chem",
  fullName: function () {
    return person.firstName+ " " + person.lastName;
  },
  friends: ["Kate", "Den", "Maria", "Ivan", "Mike", "Sofia"],
};

person.friends.unshift("Lorri");
person.friends.push("Daria");
person.friends.unshift("Roman");
person.friends[8]="Peter";


console.log(person.fullName());
console.log(person.friends);

person.firstName = prompt("What's your first name?");
person.lastName = prompt("What's your last name?");

alert(person.fullName());




 

