const {Errors,ErrorsMessages} = require("../Errors/Errors")

class UsersControllers{

  async getAllUsers(req,res){
    try {
      const users = await req.app.locals.services.users.getAllUsers()
      res.status(200).json(users)
    } catch (error) {
     Errors.noDataError(res,ErrorsMessages.ID_ERROR.replace(':id',users.id))
    }
  }
  async saveUsers(req, res) {
    const { body } = req;
    try {
      const users = await req.app.locals.services.users.saveUsers(body);
      res.status(201).json(users);
    } catch (error) {
      Errors.saveError(res,ErrorsMessages.SERVER_ERROR)

    }
  }

}


module.exports = UsersControllers 