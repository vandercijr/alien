module.exports = (sequelize, DataTypes) => {
  return sequelize.define('stock_negotiation', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    TIPREG: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DATAPREG: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CODBDI: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CODPREFIX: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CODNEG: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TIPMERC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NOMERES: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ESPEC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PRAZOT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MODREF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OPENPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MAXPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MINPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MIDPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CLOSEPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OFCPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OFVPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TOTNEG: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QUATOT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TOTVOLUME: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EXEPRICE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    INDOPC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DATAVENC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FATCOT: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PTOEXE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CODISI: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DISMES: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
}
