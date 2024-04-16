const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');


const User = function (sequelize) {
  return sequelize.define('users', {
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isStrongPassword(value) {
          if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)) {
            throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
          }
        }
      }
    }
  }, {
    timestamps: false,
    tableName: 'users',
    hooks: {
      beforeCreate: async (user, options) => {
        const hashPassword = await bcrypt.hash(user.password, 10);
        user.password = hashPassword;
      }
    },
    defaultScope: {
      attributes: { exclude: ['password'] } // Excluding password by default from query results
    }
  });
}

User.login = async function ({ username, password }) {
  const user = await this.findOne({ where: { username: username } });
  if (user) {
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (isValidPassword) {
      return user;
    }
  }
  throw new Error("Invalid Email or Password");
};


module.exports = User;
