/*"use strict";

const fs = require('fs');
const User = require('./user');


let content = fs.readFileSync('app/data/users.json');
let users = JSON.parse(content).map(User.createFromObject);
console.table(users);

function getUsers() {
    return users;
}

function getUserById(idUser) {
    return users.find(user => user._idUser === idUser);
}

function createUser(user) {
    user.push(User.createFromObject(user));
}

function updateUser(idUser, updatedUser) {
    const users = readUsersFromFile();
    const index = users.findIndex(user => user.idUser === idUser);
    if (index !== -1) {
        users[index] = {...users[index], ...updatedUser};
        writeUsersToJson(users);
        return users[index];
    }

    return null;
}

function deleteUser(idUser) {
    const users = readUsersFromFile();
    const index = users.findIndex(user => user.idUser === idUser);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1)[0];
        writeUsersToJson(users);
        return deletedUser;
    }

    return null;
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;*/
