// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
  key: 'product_id',
  allowNull: false,
}
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: {
    key: 'product_id',
    allowNull: false,
  }
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: {
    key: 'product_tags',
    allowNull: false,
  }
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: {
    key: 'product_tags',
    allowNull: false,
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
