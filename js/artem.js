// console.log('hello');
 


let person = {
  firstName: 'John ',
  lastName: 'Doe', 
  friends: ['Mike', 'Pall', 'Jane', 'Jacky', 'Bob'],
  sayHi: function()  {
    return person.firstName + person.lastName + friends
  }
};
person.firstName = prompt('What is your name?');
person.lastName = prompt('What is your lastname?');
alert(person.firstName +' '+ person.lastName);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.friends);
  
person.friends.unshift('Jim');
person.friends.push('Donald');

