const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Invalide format de l'email"]
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('users', userSchema);

module.exports = { User };