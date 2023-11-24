"use strict";

const utils = require('./utils');

class GameException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class CategoryException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

class Game {
    constructor(title, categories) {
        this._uuid = utils.generateUUID();
        this.title = title;
        this.categories = categories;
        
    }

    get uuid() {
        return this._uuid;
    }

    set uuid(value) {
        throw new GameException("Game UUIDs are auto-generated");
    }

    get title() {
        return this.title;
    }

    set title(value) {
        if (typeof value !== "string" || value === '') {
            throw new GameException("Game title cannot be emty")
        }
        this._title = value;
    }

    get categories() {
        return this.categories;
    }

    set categories(value){
        if (!Array.isArray(value) || value.some(item => !(item instanceof Category))) {
            throw GameException("Categories must be an array of Category objects");
        }
        this._categories = value;
    }
}

class Category {
    constructor(name, question1, question2, question3, question4) {
        this.name = name;
        this.question1 = question1;
        this.question2 = question2;
        this.question3 = question3;
        this.question4 = question4;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        if (typeof value !== "string" || value === '') {
            throw new CategoryException("Category name cannot be emty")
        }
        this._name = value;
    }

    get question1() {
        return this.question1;
    }

    set question1(value) {
        if (typeof value !== "string" || value === '') {
            throw new CategoryException("Questions cannot be emty")
        }
        this._question1 = value;
    }

    get question2() {
        return this.question1;
    }

    set question2(value) {
        if (typeof value !== "string" || value === '') {
            throw new CategoryException("Questions cannot be emty")
        }
        this._question2 = value;
    }

    get question3() {
        return this.question1;
    }

    set question3(value) {
        if (typeof value !== "string" || value === '') {
            throw new CategoryException("Questions cannot be emty")
        }
        this._question3 = value;
    }

    get question4() {
        return this.question1;
    }

    set question4(value) {
        if (typeof value !== "string" || value === '') {
            throw new CategoryException("Questions cannot be emty")
        }
        this._question4 = value;
    }
}