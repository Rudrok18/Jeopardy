"use strict";

const express = require('express');
const router = express.Router();
const User = require('./../controllers/user');

const url = 'https://localhost:8000/users';

// Users CRUD

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({message: "Error getting users", error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "Error getting user by ID" });
        return;
    }
});

router.get('/:email', async (req, res) => {
    try {
        const user = await User.findByEmail(req.params.email);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "Error getting user by email" });
        return;
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: "Error creating user", error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "Error updating user", error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json({ message: "User deleted succesfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting user", error: error.message });
    }
});

module.exports = router;