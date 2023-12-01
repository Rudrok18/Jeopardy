/*"use strict";

const express = require('express');
const router = express.Router();
const dataHandler_users = require('./../controllers/data_handler_users');

router.route('/')
    .get((req, res) => {
        let query = req.query.fitler;

        let users;

        if (query == undefined) {
            try {
                users = dataHandler_users.getUsers();
            } catch(e) {
                res.status(400).send("Error");
            }
            res.status(200).json(users);
        }
    })

module.exports = router;*/