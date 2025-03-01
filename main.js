require('dotenv').config();

const express = require('express');
const endpoints = require('./endpoints');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/signup', endpoints.register);

app.listen(PORT, () => {
    console.log('Serveur lancer sur le port : ', PORT);
})