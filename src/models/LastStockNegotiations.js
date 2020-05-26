module.exports = (sequelize, DataTypes) => {
  return sequelize.define('last_stock_negotiation', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    negotiation_date: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
}
