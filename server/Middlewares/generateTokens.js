const jwt = require("jsonwebtoken");
const { Errors, ErrorsMessages } = require("../Errors/Errors");

const generateToken = (payload, expiresIn = "20m") => {
  if (payload) {
    return jwt.sign(payload, process.env.SERVER_ACCESS_TOKEN_SECRET, { expiresIn });
  }
  throw new Errors.loginError(res, ErrorsMessages.LOGIN_ERROR)
};


const generateTokens = (user) => {
  const token = generateToken({ id: user.id }, "20m");
  const refreshToken = generateToken({ username: user.username }, "30d");
  return { token, refreshToken };
};

module.exports = generateTokens;
