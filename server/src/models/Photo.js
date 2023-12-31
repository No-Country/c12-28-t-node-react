const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Photo = db.define('photo', {
    idPhoto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        initialAutoIncrement: 1,
        timestamps: false
    });

module.exports = Photo;