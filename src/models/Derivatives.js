module.exports = (sequelize, DataTypes) => {
  const Derivative = sequelize.define('derivative', {
    id          : {
      type : DataTypes.INTEGER.UNSIGNED,
      primaryKey : true,
      autoIncrement: true
    },
    derivative_code : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    stock_code : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    type : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    style : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    exercise_price : {
      type : DataTypes.FLOAT,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    exercise_date : {
      type : DataTypes.DATE,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    serie : {
      type : DataTypes.STRING,
      allowNull : true,
    }
  });

  return Derivative;
}
