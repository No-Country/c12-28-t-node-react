const User = require('../models/User');

module.exports = {
    findAll: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
        }

    },
    findOne: {

    }
}