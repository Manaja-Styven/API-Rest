const mongoose = require('mongoose');
const { User } = require('./dataModel');

mongoose.connect('mongodb://localhost/todoDb');

const registerUser = async (userData) => {
    try {
        let user = await User.create({
            username : userData.username,
            email : userData.email,
            password : userData.password
        })
        return user.username;
    } catch (error) {
        console.log('Erreur lors de l\'enregistrement : ', error);
        return null;
    }
}

module.exports = { registerUser };