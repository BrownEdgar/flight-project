
const { Errors, ErrorsMessages } = require("../Errors/Errors");


class CityController {
  async getAllCities(req, res) {
    try {
      const cities = await req.app.locals.services.city.getAllCities();
      res.status(200).json(cities);
    } catch (error) {
      Errors.saveError(res, error.message)
    }
  }
  async deleteCity(req, res) {
    const { id } = req.params
    try {
      const cities = await req.app.locals.services.city.deleteCity(id);
      res.status(200).json({ message: 'city deleted!', status: 'success' });
    } catch (error) {
      console.log(error)
      Errors.saveError(res, error.message)
    }
  }

  async saveCity(req, res) {
    const { body } = req;
    try {
      const cities = await req.app.locals.services.city.saveCity(body);
      res.status(201).json(cities);
    } catch (error) {
      Errors.saveError(res, ErrorsMessages.SERVER_ERROR)
    }
  }

  async changeCity(req, res) {
    const { body, params } = req;
    try {
      const city = await req.app.locals.services.city.changeCity(body, params);
      res.status(201).json(city);
    } catch (error) {
      Errors.saveError(res, ErrorsMessages.SERVER_ERROR)
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
