"use strict";
function filterUser(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filterUser([
    { firstName: "Aman", lastName: 'Gupta', age: 16 },
    { firstName: "Aman", lastName: 'Gupta1', age: 18 }
]));
