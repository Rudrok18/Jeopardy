/*"use strict";

const { generateUUID } = require("./utils");

class UserException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class User {
    constructor(idUser, username, email, password) {
        this.idUser = idUser;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    set idUser(value) {
        if (typeof value !== "string" || value === '') {
            throw new UserException("ID cannot be emty")
        }
        this._idUser = value;
    }

    get idUser() {
        return this._idUser;
    }

    set username(value) {
        if (typeof value !== "string" || value === '') {
            throw new UserException("Username cannot be emty")
        }
        this._username = value;
    }

    get username() {
        return this._username;
    }

    set email(value) {
        if (typeof value !== "string" || value === '') {
            throw new UserException("Email cannot be emty")
        }
        this._email = value;
    }

    get email() {
        return this._email;
    }

    set password(value) {
        if (typeof value !== "string" || value === '') {
            throw new UserException("Password cannot be emty")
        }
        this._password = value;
    }

    get password() {
        return this._password;
    }

    static createFromJson(value) {
        let obj = JSON.parse(jsonValue);
        return new User(obj.idUser, obj.username, obj.email, obj.password)
    }

    static createFromObject(obj) {
        idUser = generateUUID();
        this._username = username;
        this._email = email;
        this._password = password;
        let cleanObj = this.cleanObject(obj);
        return new User(cleanObj.idUser, cleanObj.username, cleanObj.email, cleanObj.password);
    }

    static cleanObject(obj) {
        let cleanObj = {};
        const validKeys = ["idUser", "username", "email", "password"];
        for (let key of validKeys) {
            if (obj.hasOwnProperty(key)) {
                cleanObj[key] = obj[key];
            }
        }
        return cleanObj;
    }
}

module.exports = User;*/