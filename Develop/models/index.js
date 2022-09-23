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
  onDelete: 'cascade',
  through: 'product_tags',
  foreignKey: 'product_id',
  as :'tags',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tags',
  foreignKey: 'tag_id',
  as :'tags',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
