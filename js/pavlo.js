let person = {
  firstName: 'Jack',
  lastName: 'Dou',
  fullName: function() {
    return person.firstName + " " + person.lastName
  },

  friends: ['Bob', 'Mike', 'Pavlo', 'Dmytro', 'Ivan']
};

console.log(person.fullName());

person.friends.unshift('Maria');

person.friends.push('Tania');

person.firstName = prompt('Введіть ваше ім\'я');
person.lastName = prompt('Введіть ваше прізвище');

alert(person.fullName());

