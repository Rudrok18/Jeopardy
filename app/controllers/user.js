"use strict";

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let privateKey = process.env.TOKEN_KEY;

mongoose.connect('mongodb://127.0.0.1:27017/Atlas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    birthDate: {
        type: Date,
        required: true
    },
    sex: {
        type: String,
        enum: ['H', 'M'],
        required: true
    },
    profilePicture: {
        type: String,
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER', 'GUEST'],
        required: true
    },
    token: {
        type: String,
        required: true
    },
    access: {
        type: String,
        enum: ["guest", "registrated", "admin"],
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;

const newUser = {
    firstName: "Rodrigo",
    lastName: "Lopez",
    email: "rodrigolopezc03@gmail.com",
    password: "iteso123",
    birthDate: "2003-6-30",
    sex: "H"
};

userSchema.pre('save', function(next){
    let user = this;
    user.password = bcrypt.hashSync(user.password, 10);
    next();
});

userSchema.methods.generateToken = function(password) {
    let user = this;
    let payload = { id: user._id, role: user.role};
    let options = {expireIn: 60 * 60};

    if (bcrypt.compareSync(password, user.password)) {
        try {
            user.token = jwt.sign(payload, privateKey, options);
            return user.token;
        } catch (error) {
            console.log(error);
        }
    }
}

/*let user = User(newUser);

user.save()
    .then(doc => console.log(doc))
    .catch(err => console.log(err));

console.log(user);

User.find({}, (err, docs) => console.log(docs));

User.find({'sex': new RegExp('H', 'i')}, (err, docs) => console.log(docs));

User.findById("656be591cc540ea48be09b88", (err, docs) => console.log(docs));

User.findOneAndUpdate({lastName: 'Lopez'}, {lastName: 'López'}, {new: true})
    .then(doc) => {console.log(doc) })
    .catch(error) => {console.log(error) });
    
User.findByIdAndDelete("656be591cc540ea48be09b88", (err, doc) => { console.log(doc)});
*/