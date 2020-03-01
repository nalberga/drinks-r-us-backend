'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Product = sequelize.define('Order_Product', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {});
  Order_Product.associate = function(models) {
    Order_Product.belongsTo(Order);
    Order_Product.belongsTo(Product);
  };
  return Order_Product;
};