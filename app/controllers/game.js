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
        if (typeof value !== "string" || value === '') {
            throw new GameException("Image url cannot be empty");
        }
        this._imgUrl = value;
    }

    static createFromJson(value) {
        let obj = JSON.parse(jsonValue);
        return new Game(obj.title, obj.categories, obj.imgUrl)
    }

    static createFromObject(obj) {
        let newGame = {}
        Object.assign(newGame, obj);
        Game.cleanObject(newGame);

        let game = new Game(obj.title, obj.categories, obj.imgUrl);
        //game._uuid = obj.uuid;

        return game;
    }


    static cleanObject(gameObj) {
        const allowedGameProperties = ['_uuid', 'title', 'categories', 'imgUrl'];
        const allowedCategoryProperties = ['name', 'questions'];

        const filteredObj = Object.keys(gameObj)
            .filter(key => allowedGameProperties.includes(key))
            .reduce((acc, key) => {
                if (key === 'categories') {
                    acc[key] = gameObj[key].map(category => {
                        return Object.keys(category)
                            .filter(categoryKey => allowedCategoryProperties.includes(categoryKey))
                            .reduce((catAcc, categoryKey) => {
                                catAcc[categoryKey] = category[categoryKey];
                                return catAcc;
                            }, {});
                    });
                } else {
                    acc[key] = gameObj[key];
                }
                return acc;
            }, {});

        return filteredObj;
    }
}

class Category {
    constructor(name, questions) {
        this.name = name;
        this._questions = this.limitQuestions(questions);
    }

    limitQuestions(questions) {
        if (Array.isArray(questions) && questions.length === 4 && questions.every(item => typeof item === 'string')) {
            return questions;
        } else {
            console.error('Questions must be an array of strings.');
            return [];
        }
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

    set questions(value){
        if (Array.isArray(newQuestions) && newQuestions.length === 4 && newQuestions.every(item => typeof item === 'string')) {
            this._questions = newQuestions;
        } else {
            console.error('Questions must be an array of 4 strings');
        }
    }
}
module.exports = Game;
    