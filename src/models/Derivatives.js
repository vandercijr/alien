  module.exports = (sequelize, DataTypes) => {
  const Derivative = sequelize.define('Derivative', {
    id          : {
      type : DataTypes.INTEGER.UNSIGNED
    },
    option_code : {
      type : DataType.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    stock_code : {
      type : DataType.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    type : {
      type : DataType.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    style : {
      type : DataType.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    exercise_price : {
      type : DataType.FLOAT,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    exercise_date : {
      type : DataType.DATE,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
    serie : {
      type : DataType.STRING,
      allowNull : true,
    }
  });

  return Derivative;
}
