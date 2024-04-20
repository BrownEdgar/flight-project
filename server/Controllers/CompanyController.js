const {Errors,ErrorsMessages} = require("../Errors/Errors")


class CompanyController{

  async getAllCompany(req, res) {
    try {
      const company = await req.app.locals.services.company.getAllCompany();
      res.status(200).json(company);
    } catch (error) {
      Errors.saveError(res,ErrorsMessages.SERVER_ERROR)
    }
  }

  async saveCompany(req, res) {
    const { body } = req;
    body.logo = req?.file?.path;
    try {
      const company = await req.app.locals.services.company.saveCompany(body);
      res.status(201).json(company);
    } catch (error) {
      console.log(error);
     Errors.saveError(res,error.message)
    }
  }

}

module.exports = CompanyController