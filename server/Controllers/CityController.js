
const { Errors, ErrorsMessages } = require("../Errors/Errors");


class CityController {
  async getAllCities(req, res) {
    try {
      const cities = await req.app.locals.services.city.getAllCities();
      res.status(200).json(cities);
    } catch (error) {
      Errors.saveError(res,ErrorsMessages.SERVER_ERROR)
    }
  }

  async saveCity(req, res) {
    const { body } = req;

    try {
      const cities = await req.app.locals.services.city.saveCity(body);
      res.status(201).json(cities);
    } catch (error) {
      Errors.saveError(res,ErrorsMessages.SERVER_ERROR)
    }
  }
  // async getCityByName(req, res) {
  //   const { body } = req;
  //   try {
  //     const cities = await req.app.locals.services.city.getCityByName(body);
  //     res.status(201).json(cities);
  //   } catch (error) {
  //     Errors.saveError(res,ErrorsMessages.SERVER_ERROR)
  //   }
  // }
}

module.exports = CityController;
