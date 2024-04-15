
const { Errors, ErrorsMessages } = require("../Errors/Errors");
const generateTokens = require("../Middlewares/generateTokens");

class AuthControllers {
  async signUp(req, res) {
    const { body } = req;
    try {
      const user = await req.app.services.auth.signUp(body);
      if (user) {
        const {token,refreshToken} =  generateTokens(user)
        res.cookie("refreshToken", refreshToken, {
          maxAge: 1000 * 60 * 60 * 24 * 30,
          httpOnly: true,
          secure: true,
        });
        res.json({ token });
      }
      res.status(200).json(user);
    } catch (error) {
      Errors.serverError(res,ErrorsMessages.SERVER_ERROR)
    }
  }

  async signIn(req, res) {
    const { body } = req;
    try {
      const user = await req.app.services.auth.signIn(body);
      const token = generateToken({ id: user.id }, "20m");
      res.status(200).json({ id: user.id, token });
    } catch (error) {
      Errors.serverError(res,ErrorsMessages.SERVER_ERROR)
    }
  }
}

module.exports = AuthControllers;
