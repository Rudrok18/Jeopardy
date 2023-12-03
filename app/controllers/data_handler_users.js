"use strict";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require('fs');
const User = require('./user');
const path = require("path");

const { generateUUID } = require("./utils");

// Users

const usersFilePath = path.join(__dirname, "..", "data", "users.json");
console.log(usersFilePath);

function readUsersFromFile() {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        console.table(data);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users from file: ', error);
        return [];
    }
}

function writeUsersToFile(users) {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing users to file: ', error);
    }
}

function getUsers() {
    let data = readUsersFromFile();
    return data;
}

function getUserById(uuid) {
    const users = readUsersFromFile();
    return users.find(user => user.uuid === uuid);
}

function getUserByEmail(email) {
    const users = readUsersFromFile();
    return users.find(user => user.email === email);
}

function createUser(newUser) {
    const users = readUsersFromFile();
    newUser.uuid = generateUUID();
    users.push(newUser);
    writeUsersToFile(users);
    return newUser;
}

function updateUser(uuid, updatedUser) {
    const users = readUsersFromFile();
    const index = users.findIndex(user => user.uuid == uuid);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        writeUsersToFile(users);
        return users[index];
    }

    return null;
}

function deleteUser(uuid) {
    const users = readUsersFromFile();
    const index = users.findIndex(user => user.uuid === uuid);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1)[0];
        writeUsersToFile(users);
        return deletedUser;
    }
    return null;
}

//readUsersFromFile();

function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({ email:  `${email}`})
        .then(user => {
            let token = generateToken(password);
            if (token != undefined) {
                res.status(200);
                res.type("text/plain");
                res.send(token);
            } else {
                res.status(401);
                res.type("text/plain");
                res.send("Incorrect email or password");
            }
        })
        .catch(err => {
            res.status(401);
            res.type("text/plain");
            res.send("Incorrect email or password");
        })
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.getUserByEmail = getUserByEmail;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.login = login;
