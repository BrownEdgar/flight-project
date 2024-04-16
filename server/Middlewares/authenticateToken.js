const jwt = require("jsonwebtoken");
const { ErrorsMessages, Errors } = require("../Errors/Errors");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log('token', authHeader);
  if (!authHeader) {
    return Errors.authorizationError(res, ErrorsMessages.AUTHORIZATION_HEADER_ERROR)
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return Errors.tokenError(res, ErrorsMessages.TOKEN_ERROR)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return Errors.verifyError(res, ErrorsMessages.VERIFY_TOKEN_ERROR)
    }
    res.locals.user = user;
  });
  next()
}




module.exports = authenticateToken;
