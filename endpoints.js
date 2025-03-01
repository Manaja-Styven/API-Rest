const bcrypt = require('bcryptjs');
const dataManagement = require('./dataManagement');

const register = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        if(!username || !email || !password) {
            return res.status(403).json({ message : 'Tous les champs sont réquis' });
        }
    
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
    
        let userData = {
            username : username,
            email : email,
            password : hashedPassword
        }
    
        let user = await dataManagement.registerUser(userData);
        if(!user) {
            return res.status(401).json({ message : 'Impossible d\'enregistrer l\'utilisateur' });
        }
        res.json({ message : `Bienvenue ${user}` });
    } catch (error) {
        console.log('Erreur interne du serveur : ', error);
        return res.status(500);
    }
}

module.exports = { register };