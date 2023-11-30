/*"use strict";

const { MongoClient } = require('mongodb');

let mongoUrl = 'mongodb://127.0.0.1:27017'
let options = {
    useNewUrlParser: true
};

MongoClient.connect(mongoUrl, options, (err, client) => {
    if (err) throw err;
    console.log("Connected to MongoDB server");

    const db = client.db('UsersDB');
    db.createCollection('users', (err, res) => {
        if (err) throw err;
        console.log("collection 'users' created!");
        client.close();
    });
});
*/