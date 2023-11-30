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
    constructor(title, categories, imgUrl) {
        this._uuid = utils.generateUUID();
        this.title = title;
        this.categories = this.limitCategories(categories);
        this.imgUrl = imgUrl;
    }

    limitCategories(categories) {
        if (categories.length !== 6) {
            throw new Error('6 categories required')
        }

        return categories.map(category => new Category(category.name, category.questions));
    }

    get uuid() {
        return this._uuid;
    }

    set uuid(value) {
        throw new GameException("Game UUIDs are auto-generated");
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== "string" || value === '') {
            throw new GameException("Game title cannot be emty")
        }
        this._title = value;
    }

    get categories() {
        return this._categories;
    }

    set categories(value){
        if (!Array.isArray(value) || value.some(item => !(item instanceof Category))) {
            throw GameException("Categories must be an array of Category objects");
        }
        this._categories = value;
    }

    get imgUrl() {
        return this._imgUrl;
    }

    set imgUrl(value) {
        if (typeof value !== "string") {
            throw new ProductException("Image url cannot be empty");
        }
        this._imgUrl = value;
    }

    /*static createFromJson(jsonValue) {
        let obj = JSON.parse(jsonValue);
        return Game.createFromObject(obj);
    }*/

    /*static createFromObject(obj) {
        let newGame = {};
        Object.assign(newGame, obj);
        Game.cleanObject(newGame);

        let game = new Game(newGame.title, newGame.categories, newGame.imgUrl);
        game._uuid = new.uuid;

        return game;
    }

    static cleanObject(obj) {
        const gameProperties = ['_uuid', 'title', 'categories', 'imgUrl'];
        for (let prop in obj) {
            if (!gameProperties.includes(prop)) {
                delete obj[prop];
            } else if (prop === 'categories' && Array.isArray(obj[prop])) {
                obj[prop].forEach(category => {
                    for (let categoryProp in category) {
                        if (categoryProp !== 'name' && categoryProp !== 'questions') {
                            delete category[categoryProp];
                        }
                    }
                });
            }
        }
    }*/
}

class Category {
    constructor(name, questions) {
        this.name = name;
        this.questions = this.limitQuestions(questions);
    }

    limitQuestions(questions) {
        if (questions.length !== 4) {
            throw new Error("4 quesitons required");
        }

        return questions;
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

    get questions() {
        return this._questions;
    }

    set questions(value) {
        if (typeof value !== "string" || value === '') {
            throw new CategoryException("Questions cannot be emty")
        }
        this._questions = value;
    }
}

module.exports = Game;
module.exports = Category;