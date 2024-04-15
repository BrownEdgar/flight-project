const ErrorsMessages = {
  NOT_FOUND: "not found",
  EMAIL_EXIST: "This Email already exists",
  ID_ERROR: "with this :id is not found",
  SERVER_ERROR: "Something is Wrong,Server error",
  ID_LENGTH_ERROR: "ID is not found, it is too short",
  USER_FAILED: `User update failed`,
  NO_DATA_ERROR: `we don't have any data yet`,
  USER_NOTFOUND: `User is not found`,
  USER_DELETED: `User is already deleted!`,
  UPDATE_ERROR: `Update failed`,
  LOGIN_ERROR: `Login failed`,
  SUCCESSFUL: `Successful operation`,
  REGISTER_ERROR: `some filed is not present,please fill correct`,
  REFRESH_TOKEN_ERROR: `token type is not refresh`,
  AUTHORIZATION_HEADER_ERROR:"Authorization header is missing",
  TOKEN_ERROR:"Token is missing in Authorization header",
  VERIFY_TOKEN_ERROR:"Failed to verify token"
};

class Errors {
  static notFound(res, message = ErrorsMessages.NOT_FOUND) {
    res.status(404).json({
      message,
    });
  }
  static successful(res, message = ErrorsMessages.SUCCESSFUL) {
    res.status(201).json({
      message,
    });
  }
  static successfulToken(res, message = ErrorsMessages.SUCCESSFUL) {
    res.status(201).json({
      message,
      token
    });
  }
  static updateError(res,message = ErrorsMessages.UPDATE_ERROR){
    res.status(400).json({
      message
    })
  }
  static idLengthError(res,message = ErrorsMessages.ID_LENGTH_ERROR){
    res.status(409).json({
      message
    })
  }
  static noDataError(res,message = ErrorsMessages.NO_DATA_ERROR){
    res.status(500).json({
      message
    })
  }
  static userDeleted(res,message = ErrorsMessages.USER_DELETED){
    res.status(409).json({
      message
    })
  }
  static registerError(res,message = ErrorsMessages.REGISTER_ERROR){
    res.status(412).json({
      message
    })
  }
  static loginError(res,message = ErrorsMessages.LOGIN_ERROR){
    res.status(401).json({
      message
    })
  }
  static saveError(res,message = ErrorsMessages.REGISTER_ERROR){
    res.status(412).json({
      message
    })
  }
  static serverError(res,message = ErrorsMessages.SERVER_ERROR){
    res.status(500).json({
      message
    })
  }
  static authorizationError(res,message = ErrorsMessages.AUTHORIZATION_HEADER_ERROR){
    res.status(401).json({
      message
    })
  }
  static tokenError(res,message = ErrorsMessages.TOKEN_ERROR){
    res.status(401).json({
      message
    })
  }
  static verifyError(res,message = ErrorsMessages.VERIFY_TOKEN_ERROR){
    res.status(403).json({
      message
    })
  }
}
module.exports = {
  Errors,
  ErrorsMessages
};
