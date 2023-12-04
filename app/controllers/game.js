"use strict";

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Atlas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    questions: {
        type: [String],
        required:true,
        validate: {
            validator: function(arr) {
                return arr.length === 4;
            },
            message: 'Array must contain 4 questions'
        }
    }
});

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    categories: {
        type: [CategorySchema], 
        required: true,
        validate: {
            validator: function(arr) {
                return arr.length === 6;
            },
            message: 'Array must contain 6 categories'
        }
    },
    img_url: {
        type: String,
        required: true,
        trim: true
    }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;

/*
const newGame = new Game({
    title: 'Test game',
    categories: [
        { name: 'Category A', questions: ['A1', 'A2', 'A3', 'A4'] },
        { name: 'Category B', questions: ['B1', 'B2', 'B3', 'B4'] },
        { name: 'Category C', questions: ['C1', 'C2', 'C3', 'C4'] },
        { name: 'Category D', questions: ['D1', 'D2', 'D3', 'D4'] },
        { name: 'Category E', questions: ['E1', 'E2', 'E3', 'E4'] },
        { name: 'Category F', questions: ['F1', 'F2', 'F3', 'F4'] }
    ],
    img_url: 'https://ibb.co/Gtx3h2k'
})

newGame.save()
       .then(savedGame => {
        console.log('Game saved:', savedGame)
       })
       .catch(error => {
        console.error('Error saving the game', error)
       });
*/

// Game creation with objects, ignore this

/*
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
            throw new GameException("Game title cannot be empty")
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
        let obj = JSON.parse(value);
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
*/
