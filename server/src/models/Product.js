const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Category = require('../models/Category');
const User = require('../models/User');
const Photo = require('../models/Photo');

const Product = db.define('product', {
  // Defino modelo
  idProduct: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  topic_1: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_1: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic_2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_2: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic_3: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_3: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic_4: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_4: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic_5: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_5: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic_6: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_6: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic_7: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_7: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic_8: {
    type: DataTypes.STRING,
    allowNull: true
  },
  detail_8: {
    type: DataTypes.STRING,
    allowNull: true
  },
  idCategoryProduct: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idUserProduct: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
  {
    initialAutoIncrement: 1,
    timestamps: false
  });

Product.belongsTo(Category, {
  foreignKey: 'idCategoryProduct'
});

Product.belongsTo(User, {
  foreignKey: 'idUserProduct'
});

Product.belongsToMany(Photo, {
  through: 'product_photo'
});

Photo.belongsToMany(Product, {
  through: 'product_photo'
});

module.exports = Product;


