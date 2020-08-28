const user = {
  firstName: 'Maks',
  lastName: 'Kosar',
  myName: function () {
    return user.firstName + ' ' + user.lastName;
  },
  friends: ['Bob', 'Mark', 'Vl]d', 'Ivan', 'Ihor']
};

console.log(user.myName());
console.log(user.friends[5]);

user.friends.unshift('Victor');
user.friends.push('Dima');
console.log(user.friends);